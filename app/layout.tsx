// /app/layout.tsx
"use client";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-gray-100">{children}</main>
      </body>
    </html>
  );
}