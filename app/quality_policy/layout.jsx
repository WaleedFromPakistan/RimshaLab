import React from "react";


export const metadata = {
  title: "Quality Policy | Rimsha Labs",
  description:
    "Explore Rimsha Labs' Quality Policy – delivering accurate pathology test results, advanced diagnostic services, and patient-focused care in Lahore. Trusted since 2008.",
};

export default function CareersLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <main>{children}</main>
        
      </body>
    </html>
  );
}
