import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk to Next.js Documentation with openAi",
  description:
    "A chatbot about Next.js documentation. The documentation was scraped and cleaned for AI use with Playwright and Cheerio. The model used for embeddings is text-embedding-3-small. The documentation is stored in a vector database. The model powering this chatbot is gpt-3.5-turbo-0125. gpt-4-0125-preview is much more efficient in its responses. If you wish to use it, you can retrieve the GitHub repository below.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={cn(GeistMono.variable, GeistSans.variable, "h-full")}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
