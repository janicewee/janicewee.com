import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Janice Wee - Indie Author of Christian Speculative Fiction",
  description: "Explore fantasy novels with faith and family themes by indie author Janice Wee. Featuring Dragon Unbound, Billy The Lion Boy, The Quest For Immortality, and the Billy Lionheart Series.",
  keywords: "Janice Wee, Christian fiction, fantasy novels, Dragon Unbound, Billy The Lion Boy, Quest For Immortality, Billy Lionheart Series, faith-based fiction, family themes",
  authors: [{ name: "Janice Wee" }],
  openGraph: {
    title: "Janice Wee - Indie Author of Christian Speculative Fiction",
    description: "Fantasy novels woven with faith and family themes",
    type: "website",
    url: "https://janicewee.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}