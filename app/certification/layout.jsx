import React from "react";


export const metadata = {
  title: "Certificates | Rimsha Labs",
  description:
    "View Rimsha Labs' official certificates and accreditations – proof of trusted pathology testing, diagnostic quality, and compliance in Lahore since 2008.",
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
