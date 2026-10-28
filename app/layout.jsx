import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "./utils/cn";
import Footer from "./ui/Footer";
import NextTopLoader from "nextjs-toploader";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Fahad Ahmed Akash",
  description:
    "Backend & full-stack engineer building enterprise video conferencing and cloud storage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(jetBrains.className, "bg-black-2 text-white-1")}>
        <NextTopLoader
          color={"#73daca"}
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
