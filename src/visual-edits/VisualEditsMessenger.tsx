/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useRef } from "react";

export const CHANNEL = "ORCHIDS_HOVER_v1" as const;
const VISUAL_EDIT_MODE_KEY = "orchids_visual_edit_mode" as const;
const FOCUSED_ELEMENT_KEY = "orchids_focused_element" as const;

// Deduplicate helper for high-frequency traffic (HIT / FOCUS_MOVED / SCROLL)
// -----------------------------------------------------------------------------
let _orchidsLastMsg = "";
const postMessageDedup = (data: any) => {
  try {
    const key = JSON.stringify(data);
    if (key === _orchidsLastMsg) return; // identical – drop
    _orchidsLastMsg = key;
  } catch {
    // if stringify fails, fall through
  }
  window.parent.postMessage(data, "*");
};

export type ParentToChild =
  | { type: typeof CHANNEL; msg: "POINTER"; x: number; y: number }
  | { type: typeof CHANNEL; msg: "VISUAL_EDIT_MODE"; active: boolean }
  | { type: typeof CHANNEL; msg: "SCROLL"; dx: number; dy: number }
  | { type: typeof CHANNEL; msg: "CLEAR_INLINE_STYLES"; elementId: string }
  | {
      type: typeof CHANNEL;
      msg: "PREVIEW_FONT";
      elementId: string;
      fontFamily: string;
    }
  | {
      type: typeof CHANNEL;
      msg: "RESIZE_ELEMENT";
      elementId: string;
      width: number;
      height: number;
    }
  | {
      type: typeof CHANNEL;
      msg: "SHOW_ELEMENT_HOVER";
      elementId: string | null;
    };

export type ChildToParent =
  | {
      type: typeof CHANNEL;
      msg: "HIT";
      id: string | null;
      tag: string | null;
      rect: { top: number; left: number; width: number; height: number } | null;
    }
  | {
      type: typeof CHANNEL;
      msg: "ELEMENT_CLICKED";
      id: string | null;
      tag: string | null;
      rect: { top: number; left: number; width: number; height: number };
      clickPosition: { x: number; y: number };
      isEditable?: boolean;
      currentStyles?: {
        fontSize?: string;
        color?: string;
        fontWeight?: string;
        fontStyle?: string;
        textDecoration?: string;
        textAlign?: string;
        lineHeight?: string;
        letterSpacing?: string;
        paddingLeft?: string;
        paddingRight?: string;
        paddingTop?: string;
        paddingBottom?: string;
        marginLeft?: string;
        marginRight?: string;
        marginTop?: string;
        marginBottom?: string;
        backgroundColor?: string;
        backgroundImage?: string;
        borderRadius?: string;
        fontFamily?: string;
        opacity?: string;
        display?: string;
        flexDirection?: string;
        alignItems?: string;
        justifyContent?: string;
        gap?: string;
      };
      className?: string;
      src?: string;
    }
  | { type: typeof CHANNEL; msg: "SCROLL_STARTED" }
  | { type: typeof CHANNEL; msg: "SCROLL_STOPPED" }
  | {
      type: typeof CHANNEL;
      msg: "TEXT_CHANGED";
      id: string;
      oldText: string;
      newText: string;
      filePath: string;
      line: number;
      column: number;
    }
  | {
      type: typeof CHANNEL;
      msg: "STYLE_CHANGED";
      id: string;
      styles: Record<string, string>;
      filePath: string;
      line: number;
      column: number;
    }
  | {
      type: typeof CHANNEL;
      msg: "STYLE_BLUR";
      id: string;
      styles: Record<string, string>;
      filePath: string;
      line: number;
      column: number;
      className: string;
    }
  | {
      type: typeof CHANNEL;
      msg: "IMAGE_BLUR";
      id: string;
      oldSrc: string;
      newSrc: string;
      filePath: string;
      line: number;
      column: number;
    }
  | {
      type: typeof CHANNEL;
      msg: "FOCUS_MOVED";
      id: string;
      rect: { top: number; left: number; width: number; height: number };
    }
  | { type: typeof CHANNEL; msg: "VISUAL_EDIT_MODE_ACK"; active: boolean }
  | { type: typeof CHANNEL; msg: "VISUAL_EDIT_MODE_RESTORED"; active: boolean };

type Box = null | { top: number; left: number; width: number; height: number };

const BOX_PADDING = 4; // Pixels to expand the box on each side

// Helper to check if element can be made contentEditable
const isTextEditable = (element: HTMLElement): boolean => {
  const tagName = element.tagName.toLowerCase();
  // Elements that typically contain text and can be made contentEditable
  const editableTags = [
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "span",
    "div",
    "li",
    "td",
    "th",
    "label",
    "a",
    "button",
  ];

  // Check if it's already contentEditable or an input/textarea
  if (
    element.contentEditable === "true" ||
    tagName === "input" ||
    tagName === "textarea"
  ) {
    return true;
  }

  // Allow editing if element contains text and is an editable tag
  // Only allow editing if element has at most 1 child OR has direct text content
  if (editableTags.includes(tagName) && element.textContent?.trim()) {
    // Check if element has direct text nodes (not just text from children)
    const hasDirectText = Array.from(element.childNodes).some(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
    );

    // Allow editing if:
    // 1. Element has no children (pure text element)
    // 2. Element has 1 or fewer children AND has direct text content
    if (
      element.childElementCount === 0 ||
      (element.childElementCount <= 1 && hasDirectText)
    ) {
      return true;
    }
  }

  return false;
};

// Helper to extract only text nodes from an element (excluding child element text)
const extractDirectTextContent = (element: HTMLElement): string => {
  let text = "";
  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent || "";
    }
  }
  return text;
};

// Helper to parse data-orchids-id to extract file path, line, and column
const parseOrchidsId = (
  orchidsId: string
): { filePath: string; line: number; column: number } | null => {
  // Format: "filepath:line:column"
  const parts = orchidsId.split(":");
  if (parts.length < 3) return null;

  // The file path might contain colons, so we need to handle that
  const column = parseInt(parts.pop() || "0");
  const line = parseInt(parts.pop() || "0");
  const filePath = parts.join(":"); // Rejoin the remaining parts as the file path

  if (isNaN(line) || isNaN(column)) return null;

  return { filePath, line, column };
};

// Helper to get current styles of an element (including inline styles)
const getCurrentStyles = (
  element: HTMLElement
): {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  borderRadius?: string;
  fontFamily?: string;
  opacity?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
} => {
  const computed = window.getComputedStyle(element);

  // Helper to normalize values and provide defaults
  const normalizeValue = (value: string, property: string): string => {
    // Handle background color - if it's transparent or rgba(0,0,0,0), return "transparent"
    if (property === "backgroundColor") {
      if (
        value === "rgba(0, 0, 0, 0)" ||
        value === "rgb(0, 0, 0, 0)" ||
        value === "transparent" ||
        value === ""
      ) {
        return "transparent";
      }
    }

    // Handle background image - if none, return "none"
    if (property === "backgroundImage" && (value === "none" || value === "")) {
      return "none";
    }

    // Handle text decoration - if none, return "none"
    if (property === "textDecoration") {
      // Some browsers return complex values like "none solid rgb(0, 0, 0)"
      if (value.includes("none") || value === "") {
        return "none";
      }
    }

    // Handle font style - if normal, return "normal"
    if (property === "fontStyle" && (value === "normal" || value === "")) {
      return "normal";
    }

    // Handle font weight - normalize to standard values
    if (property === "fontWeight") {
      const weight = parseInt(value);
      if (!isNaN(weight)) {
        return String(weight);
      }
      return value || "400";
    }

    // Handle opacity - if 1, return "1"
    if (property === "opacity" && (value === "1" || value === "")) {
      return "1";
    }

    // Handle spacing values (padding/margin) - if 0px, return "0"
    if (
      (property.includes("padding") || property.includes("margin")) &&
      (value === "0px" || value === "0")
    ) {
      return "0";
    }

    // Handle border radius - if 0px, return "0"
    if (property === "borderRadius" && (value === "0px" || value === "0")) {
      return "0";
    }

    // Handle letter spacing - if normal, return "normal"
    if (
      property === "letterSpacing" &&
      (value === "normal" || value === "0px")
    ) {
      return "normal";
    }

    // Handle gap - if normal, return "normal"
    if (property === "gap" && (value === "normal" || value === "0px")) {
      return "normal";
    }

    return value;
  };

  return {
    fontSize: normalizeValue(computed.fontSize, "fontSize"),
    color: normalizeValue(computed.color, "color"),
    fontWeight: normalizeValue(computed.fontWeight, "fontWeight"),
    fontStyle: normalizeValue(computed.fontStyle, "fontStyle"),
    textDecoration: normalizeValue(computed.textDecoration, "textDecoration"),
    textAlign: normalizeValue(computed.textAlign, "textAlign"),
    lineHeight: normalizeValue(computed.lineHeight, "lineHeight"),
    letterSpacing: normalizeValue(computed.letterSpacing, "letterSpacing"),
    paddingLeft: normalizeValue(computed.paddingLeft, "paddingLeft"),
    paddingRight: normalizeValue(computed.paddingRight, "paddingRight"),
    paddingTop: normalizeValue(computed.paddingTop, "paddingTop"),
    paddingBottom: normalizeValue(computed.paddingBottom, "paddingBottom"),
    marginLeft: normalizeValue(computed.marginLeft, "marginLeft"),
    marginRight: normalizeValue(computed.marginRight, "marginRight"),
    marginTop: normalizeValue(computed.marginTop, "marginTop"),
    marginBottom: normalizeValue(computed.marginBottom, "marginBottom"),
    backgroundColor: normalizeValue(
      computed.backgroundColor,
      "backgroundColor"
    ),
    backgroundImage: normalizeValue(
      computed.backgroundImage,
      "backgroundImage"
    ),
    borderRadius: normalizeValue(computed.borderRadius, "borderRadius"),
    fontFamily: normalizeValue(computed.fontFamily, "fontFamily"),
    opacity: normalizeValue(computed.opacity, "opacity"),
    display: normalizeValue(computed.display, "display"),
    flexDirection: normalizeValue(computed.flexDirection, "flexDirection"),
    alignItems: normalizeValue(computed.alignItems, "alignItems"),
    justifyContent: normalizeValue(computed.justifyContent, "justifyContent"),
    gap: normalizeValue(computed.gap, "gap"),
  };
};

// Normalize image src for comparison (handles Next.js optimization wrappers)
const normalizeImageSrc = (input: string): string => {
  if (!input) return "";
  try {
    const url = new URL(input, window.location.origin);
    // Handle Next.js <Image> optimization wrapper
    if (url.pathname === "/_next/image") {
      const real = url.searchParams.get("url");
      if (real) return decodeURIComponent(real);
    }
    return url.href; // absolute form
  } catch {
    return input;
  }
};

// Helper to wrap multiline text only when it contains line breaks
const wrapMultiline = (text: string): string => {
  if (text.includes("\n")) {
    const escaped = text.replace(/\n/g, "\\n");
    // Wrap in {` ... `} so JSX will interpret it as a template literal
    return `{\`${escaped}\`}`;
  }
  return text;
};

export default function HoverReceiver() {
  const [hoverBox, setHoverBox] = useState<Box>(null);
  const [hoverBoxes, setHoverBoxes] = useState<Box[]>([]);
  const [focusBox, setFocusBox] = useState<Box>(null);
  const [focusedElementId, setFocusedElementId] = useState<string | null>(null);
  const [isVisualEditMode, setIsVisualEditMode] = useState(() => {
    // Initialize from localStorage if available
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(VISUAL_EDIT_MODE_KEY);
      return stored === "true";
    }
    return false;
  });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState<string | null>(null);
  const [resizeStart, setResizeStart] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Tag labels for hover and focus overlays
  const [hoverTag, setHoverTag] = useState<string | null>(null);
  const [focusTag, setFocusTag] = useState<string | null>(null);
  const isResizingRef = useRef(false);
  const lastHitElementRef = useRef<HTMLElement | null>(null);
  const lastHitIdRef = useRef<string | null>(null);
  const focusedElementRef = useRef<HTMLElement | null>(null);
  const isVisualEditModeRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const originalContentRef = useRef<string>("");
  const originalSrcRef = useRef<string>(""); // track original img src
  const focusedImageElementRef = useRef<HTMLImageElement | null>(null); // track the actual img element
  const editingElementRef = useRef<HTMLElement | null>(null);
  const wasEditableRef = useRef<boolean>(false);
  const styleElementRef = useRef<HTMLStyleElement | null>(null);
  const originalStylesRef = useRef<Record<string, string>>({});
  const appliedStylesRef = useRef<Map<string, Record<string, string>>>(
    new Map()
  );
  const hasStyleChangesRef = useRef<boolean>(false);
  const lastClickTimeRef = useRef<number>(0);
  const pendingCleanupRef = useRef<NodeJS.Timeout | null>(null);

  // Cache of loaded fonts
  const loadedFontFamilies = useRef<Set<string>>(new Set());
  // Map of elementId that already has a persistent font set
  const persistentFontMap = useRef<Map<string, string>>(new Map());
  // Timeout refs for clearing persistent font map
  const persistentFontTimeouts = useRef<Map<string, number>>(new Map());

  // Keep ref in sync with state and persist to localStorage
  useEffect(() => {
    isVisualEditModeRef.current = isVisualEditMode;
    // Persist to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(VISUAL_EDIT_MODE_KEY, String(isVisualEditMode));
    }
  }, [isVisualEditMode]);

  // On mount, notify parent if visual edit mode was restored from localStorage
  useEffect(() => {
    if (isVisualEditMode) {
      // Send acknowledgement to parent that visual edit mode is active
      // This will sync the parent's state with our restored state
      window.parent.postMessage(
        { type: CHANNEL, msg: "VISUAL_EDIT_MODE_ACK", active: true },
        "*"
      );

      // Also send a special message to indicate this was restored from localStorage
      window.parent.postMessage(
        { type: CHANNEL, msg: "VISUAL_EDIT_MODE_RESTORED", active: true },
        "*"
      );

      // Restore focused element after a short delay to ensure DOM is ready
      setTimeout(() => {
        if (typeof window !== "undefined") {
          // Restore focused element
          const focusedData = localStorage.getItem(FOCUSED_ELEMENT_KEY);
          if (focusedData) {
            try {
              const { id } = JSON.parse(focusedData);
              const element = document.querySelector(
                `[data-orchids-id="${id}"]`
              ) as HTMLElement;

              if (element) {
                // Simulate a click on the element to restore focus
                const rect = element.getBoundingClientRect();
                const clickEvent = new MouseEvent("click", {
                  clientX: rect.left + rect.width / 2,
                  clientY: rect.top + rect.height / 2,
                  bubbles: true,
                  cancelable: true,
                });
                element.dispatchEvent(clickEvent);
              }
            } catch {
              // Ignore parsing errors
            }
          }
        }
      }, 500); // Wait 500ms for DOM to be fully ready
    }
  }, []); // Run only on mount

  // Helper function to expand box dimensions
  const expandBox = (rect: DOMRect): Box => ({
    top: rect.top - BOX_PADDING,
    left: rect.left - BOX_PADDING,
    width: rect.width + BOX_PADDING * 2,
    height: rect.height + BOX_PADDING * 2,
  });

  // Helper to update focus box position
  const updateFocusBox = () => {
    if (focusedElementRef.current) {
      const r = focusedElementRef.current.getBoundingClientRect();
      setFocusBox(expandBox(r));
    }
  };

  // Add global styles for contentEditable elements
  useEffect(() => {
    if (isVisualEditMode && !styleElementRef.current) {
      const style = document.createElement("style");
      style.textContent = `
        [contenteditable="true"]:focus {
          outline: none !important;
          box-shadow: none !important;
          border-color: inherit !important;
        }
        [contenteditable="true"] {
          cursor: text !important;
        }
        /* Prevent the default blue highlight on contenteditable */
        [contenteditable="true"]::selection {
          background-color: rgba(59, 130, 246, 0.3);
        }
        [contenteditable="true"]::-moz-selection {
          background-color: rgba(59, 130, 246, 0.3);
        }
        /* Prevent child elements from being editable */
        [contenteditable="true"] [contenteditable="false"] {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          opacity: 0.7 !important;
          cursor: default !important;
        }
        /* Ensure protected elements can't be selected */
        [data-orchids-protected="true"] {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
        }
      `;
      document.head.appendChild(style);
      styleElementRef.current = style;
    } else if (!isVisualEditMode && styleElementRef.current) {
      styleElementRef.current.remove();
      styleElementRef.current = null;
    }

    return () => {
      if (styleElementRef.current) {
        styleElementRef.current.remove();
        styleElementRef.current = null;
      }
    };
  }, [isVisualEditMode]);

  // Helper to make only text nodes editable and protect child elements
  const protectChildElements = (element: HTMLElement) => {
    // Make all child elements non-editable
    const childElements = element.querySelectorAll("*");
    childElements.forEach((child) => {
      const childEl = child as HTMLElement;
      childEl.contentEditable = "false";
      // Add a data attribute to mark protected elements
      childEl.setAttribute("data-orchids-protected", "true");
      // Only prevent text selection within the child elements when parent is being edited
      // But still allow pointer events for hovering and clicking
      childEl.style.userSelect = "none";
      childEl.style.webkitUserSelect = "none";
      // Don't set pointerEvents to none - we want to allow hover and click
    });
  };

  // Helper to restore child elements after editing
  const restoreChildElements = (element: HTMLElement) => {
    const protectedElements = element.querySelectorAll(
      '[data-orchids-protected="true"]'
    );
    protectedElements.forEach((child) => {
      const childEl = child as HTMLElement;
      childEl.removeAttribute("contenteditable");
      childEl.removeAttribute("data-orchids-protected");
      // Restore original styles
      childEl.style.userSelect = "";
      childEl.style.webkitUserSelect = "";
    });
  };

  // Handle text changes and send to parent
  const handleTextChange = (element: HTMLElement) => {
    // Double-check this is still the editing element to avoid stale closures
    if (element !== editingElementRef.current) {
      console.warn("Attempting to handle text change for non-editing element");
      return;
    }

    // Get the orchids ID from the element to ensure we're working with the right one
    const orchidsId = element.getAttribute("data-orchids-id");
    if (!orchidsId) return;

    // For elements with children, only extract direct text content
    let newText: string;
    let oldText: string;

    if (element.childElementCount > 0) {
      // Element has children - only track direct text nodes
      newText = extractDirectTextContent(element);
      // We need to compare against the original direct text content
      // Since originalContentRef stores the full text, we need to handle this differently
      oldText = originalContentRef.current;
    } else {
      // No children - use innerText to preserve line breaks
      newText = element.innerText || element.textContent || "";
      oldText = originalContentRef.current;
    }

    if (newText !== oldText) {
      const parsed = parseOrchidsId(orchidsId);
      if (!parsed) return;

      // Send text change message to parent
      const msg: ChildToParent = {
        type: CHANNEL,
        msg: "TEXT_CHANGED",
        id: orchidsId,
        oldText: wrapMultiline(oldText),
        newText: wrapMultiline(newText),
        filePath: parsed.filePath,
        line: parsed.line,
        column: parsed.column,
      };

      postMessageDedup(msg);

      // Update the original content reference
      originalContentRef.current = newText;
    }
  };

  // Handle style changes and send to parent
  const handleStyleChange = (
    element: HTMLElement,
    styles: Record<string, string>
  ) => {
    const orchidsId = element.getAttribute("data-orchids-id");
    if (!orchidsId) return;

    const parsed = parseOrchidsId(orchidsId);
    if (!parsed) return;

    // Find ALL elements with the same orchids ID
    const allMatchingElements = document.querySelectorAll(
      `[data-orchids-id="${orchidsId}"]`
    ) as NodeListOf<HTMLElement>;

    // Apply styles to ALL matching elements for visual feedback
    allMatchingElements.forEach((el) => {
      Object.entries(styles).forEach(([property, value]) => {
        // Convert camelCase to kebab-case for CSS property names
        const cssProp = property.replace(/([A-Z])/g, "-$1").toLowerCase();

        // Handle special cases for default values
        let finalValue = value;

        // If backgroundColor is being set to transparent, use transparent keyword
        if (
          property === "backgroundColor" &&
          (value === "transparent" ||
            value === "rgba(0, 0, 0, 0)" ||
            value === "rgb(0, 0, 0, 0)")
        ) {
          finalValue = "transparent";
        }

        // If removing styles (setting to default), remove the property
        if (
          (property === "backgroundColor" && finalValue === "transparent") ||
          (property === "backgroundImage" && value === "none") ||
          (property === "textDecoration" && value === "none") ||
          (property === "fontStyle" && value === "normal") ||
          (property === "opacity" && value === "1") ||
          ((property.includes("padding") || property.includes("margin")) &&
            value === "0") ||
          (property === "borderRadius" && value === "0") ||
          (property === "letterSpacing" && value === "normal") ||
          (property === "gap" && value === "normal")
        ) {
          // Remove the property to let the stylesheet value show through
          el.style.removeProperty(cssProp);
        } else {
          // Apply with !important so it overrides existing rules
          el.style.setProperty(cssProp, finalValue, "important");
        }
      });
    });

    // Store the applied styles
    const existingStyles = appliedStylesRef.current.get(orchidsId) || {};
    appliedStylesRef.current.set(orchidsId, { ...existingStyles, ...styles });
    hasStyleChangesRef.current = true;

    // Update the focus box after style change
    requestAnimationFrame(() => {
      updateFocusBox();
    });

    // Don't send to parent yet - wait for blur
  };

  // Send style changes on blur
  const handleStyleBlur = (element: HTMLElement) => {
    if (!hasStyleChangesRef.current) return;

    const orchidsId = element.getAttribute("data-orchids-id");
    if (!orchidsId) return;

    const parsed = parseOrchidsId(orchidsId);
    if (!parsed) return;

    const appliedStyles = appliedStylesRef.current.get(orchidsId);
    if (!appliedStyles || Object.keys(appliedStyles).length === 0) return;

    // Get className for breakpoint detection
    const className = element.getAttribute("class") || "";

    // Send style blur message to parent for Tailwind conversion
    const msg: ChildToParent = {
      type: CHANNEL,
      msg: "STYLE_BLUR",
      id: orchidsId,
      styles: appliedStyles,
      className,
      filePath: parsed.filePath,
      line: parsed.line,
      column: parsed.column,
    };

    postMessageDedup(msg);

    // Reset style changes flag
    hasStyleChangesRef.current = false;
  };

  // Flush image src updates on blur/focus change
  const flushImageSrcChange = () => {
    // Use the stored image element reference if available
    const imgElement = focusedImageElementRef.current;
    if (!imgElement) return;

    const orchidsId = imgElement.getAttribute("data-orchids-id");
    if (!orchidsId) return;

    const parsed = parseOrchidsId(orchidsId);
    if (!parsed) return;

    const newSrc = normalizeImageSrc(imgElement.src);
    const oldSrc = normalizeImageSrc(originalSrcRef.current);

    if (!newSrc || newSrc === oldSrc) return; // nothing changed

    const msg: ChildToParent = {
      type: CHANNEL,
      msg: "IMAGE_BLUR",
      id: orchidsId,
      oldSrc,
      newSrc,
      filePath: parsed.filePath,
      line: parsed.line,
      column: parsed.column,
    };

    postMessageDedup(msg);

    originalSrcRef.current = newSrc; // reset baseline
    focusedImageElementRef.current = null; // clear reference
  };

  // Listen for style and image updates from parent
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type === "ORCHIDS_STYLE_UPDATE") {
        const { elementId, styles } = e.data;

        // Find ALL elements with the same orchids ID
        const allMatchingElements = document.querySelectorAll(
          `[data-orchids-id="${elementId}"]`
        ) as NodeListOf<HTMLElement>;

        if (allMatchingElements.length > 0) {
          // If fontFamily is present ensure stylesheet loaded first
          const fam = styles.fontFamily || styles["fontFamily"];
          if (fam) {
            const familyKey = fam.replace(/['\s]+/g, "+");
            if (!loadedFontFamilies.current.has(familyKey)) {
              const link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = `https://fonts.googleapis.com/css2?family=${familyKey}:wght@400&display=swap`;
              document.head.appendChild(link);
              loadedFontFamilies.current.add(familyKey);
            }
          }

          // If fontFamily made persistent via style update, remember so previews don't override
          if (fam) {
            persistentFontMap.current.set(elementId, fam);

            // Clear any existing timeout
            const existingTimeout =
              persistentFontTimeouts.current.get(elementId);
            if (existingTimeout) {
              clearTimeout(existingTimeout);
            }

            // Set timeout to clear persistent font after 2 seconds, allowing previews again
            const timeoutId = window.setTimeout(() => {
              persistentFontMap.current.delete(elementId);
              persistentFontTimeouts.current.delete(elementId);
            }, 2000);

            persistentFontTimeouts.current.set(elementId, timeoutId);
          }

          // Apply styles to ALL matching elements
          allMatchingElements.forEach((element) => {
            // Only update handleStyleChange for the focused element to track changes
            if (focusedElementRef.current === element) {
              handleStyleChange(element, styles);
            } else {
              // For other elements, apply styles directly
              Object.entries(styles).forEach(([property, value]) => {
                const cssProp = property
                  .replace(/([A-Z])/g, "-$1")
                  .toLowerCase();

                // Handle special cases for default values
                let finalValue = String(value);

                // If backgroundColor is being set to transparent, use transparent keyword
                if (
                  property === "backgroundColor" &&
                  (value === "transparent" ||
                    value === "rgba(0, 0, 0, 0)" ||
                    value === "rgb(0, 0, 0, 0)")
                ) {
                  finalValue = "transparent";
                }

                // If removing styles (setting to default), remove the property
                if (
                  (property === "backgroundColor" &&
                    finalValue === "transparent") ||
                  (property === "backgroundImage" && value === "none") ||
                  (property === "textDecoration" && value === "none") ||
                  (property === "fontStyle" && value === "normal") ||
                  (property === "opacity" && value === "1") ||
                  ((property.includes("padding") ||
                    property.includes("margin")) &&
                    value === "0") ||
                  (property === "borderRadius" && value === "0") ||
                  (property === "letterSpacing" && value === "normal") ||
                  (property === "gap" && value === "normal")
                ) {
                  // Remove the property to let the stylesheet value show through
                  element.style.removeProperty(cssProp);
                } else {
                  element.style.setProperty(cssProp, finalValue, "important");
                }
              });
            }
          });
        }
      } else if (e.data?.type === "ORCHIDS_IMAGE_UPDATE") {
        const { elementId, src, oldSrc } = e.data;
        let element: HTMLImageElement | null = null;
        const candidates = document.querySelectorAll(
          `[data-orchids-id="${elementId}"]`
        );
        candidates.forEach((el) => {
          if (el.tagName.toLowerCase() === "img") {
            const img = el as HTMLImageElement;
            const norm = normalizeImageSrc(img.src);
            if (!element) element = img; // first fallback
            if (oldSrc && normalizeImageSrc(oldSrc) === norm) {
              element = img;
            }
          }
        });

        if (!element) return;

        if ((element as HTMLElement).tagName.toLowerCase() === "img") {
          const imgEl = element as HTMLImageElement;

          {
            /*
             * Clear any existing responsive sources so the newly uploaded image
             * always displays.  Some frameworks (e.g. Next.js) add a `srcset`
             * attribute which can override `src` in certain viewport/device
             * scenarios, so we strip it out before setting the new source.
             */
            imgEl.removeAttribute("srcset");
            imgEl.srcset = "";

            imgEl.src = src;

            // Update baseline src so flush doesn't treat this as pending change
            originalSrcRef.current = normalizeImageSrc(src);
            focusedImageElementRef.current = imgEl;

            imgEl.onload = () => updateFocusBox();
          }
        }
      } else if (e.data?.type === "RESIZE_ELEMENT") {
        const { elementId, width, height } = e.data;
        const element = document.querySelector(
          `[data-orchids-id="${elementId}"]`
        ) a