import type { Metadata } from "next";
import { Geist, Geist_Mono,IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const IBMPlex = IBM_Plex_Sans({
  subsets:["latin"],
  weight:['400','500','600','700'],
  variable:"--font-ibm-plex"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapFix",
  description: "An Application to enchance images like your joyful life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary:'#624cf5'}}}>
    <html lang="en">
      <body
        className={cn("font-IBMPlex antialiased",IBMPlex.variable)}>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
