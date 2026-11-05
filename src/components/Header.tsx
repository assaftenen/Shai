import Link from "next/link";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="#top" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-lime">
            UP<span className="text-white">GRADE</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          <a href="#method" className="transition hover:text-lime">
            השיטה
          </a>
          <a href="#coach" className="transition hover:text-lime">
            המאמן
          </a>
          <a href="#testimonials" className="transition hover:text-lime">
            הורים ממליצים
          </a>
          <a href="#faq" className="transition hover:text-lime">
            שאלות נפוצות
          </a>
          <a href="#contact" className="transition hover:text-lime">
            יצירת קשר
          </a>
        </nav>
        <a
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-lime px-4 py-2 text-sm font-bold text-ink transition hover:shadow-glow"
        >
          אימון ניסיון חינם
        </a>
      </div>
    </header>
  );
}
