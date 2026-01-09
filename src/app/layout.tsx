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
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="546b9e9c-9967-4921-82d9-450005cde91c"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="4e64cddb-88ff-496f-973b-fd14b6040d10"
        />
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
