import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "UPGRADE | אימונים פונקציונליים לילדים ונוער ביבנה",
  description:
    "סטודיו לאימונים פונקציונליים לילדים ונוער ביבנה עם המאמן שי פרץ. למעלה מעשור ניסיון, כ-450 ילדים ונערים הצטרפו. אימון ניסיון ללא עלות — קבעו עכשיו בוואטסאפ.",
  openGraph: {
    title: "UPGRADE | אימונים פונקציונליים לילדים ונוער ביבנה",
    description:
      "אנחנו לא רק בונים כושר. אנחנו בונים ביטחון, התמדה ושייכות. אימון ניסיון ללא עלות.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-heebo antialiased bg-ink text-white">
        {children}
      </body>
    </html>
  );
}
