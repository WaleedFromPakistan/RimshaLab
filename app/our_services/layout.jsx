import React from "react";


export const metadata = {
  title: "Our Services | Rimsha Labs",
  description:
    "Learn more about Rimsha Labs – a trusted pathology laboratory in Lahore committed to diagnostic excellence since 2008.",
};

export default function ServicesLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <main>{children}</main>
        
      </body>
    </html>
  );
}
