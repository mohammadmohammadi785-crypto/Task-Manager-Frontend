import Navbar from "@/components/nav-bar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <div>
        <Navbar />
        {children}
      </div>
    </body>
  );
}
