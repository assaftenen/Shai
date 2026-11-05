import Image from "next/image";
import { asset } from "@/lib/asset";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink to-ink" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 md:grid-cols-2 md:items-center md:pb-24 md:pt-20">
        <div>
          <p className="mb-4 inline-block rounded-full border border-lime/40 bg-lime/10 px-4 py-1 text-sm font-semibold text-lime">
            📍 סטודיו ביבנה · למעלה מעשור ניסיון
          </p>
          <h1 className="text-4xl font-black leading-[1.1] sm:text-5xl lg:text-6xl">
            אנחנו לא רק בונים כושר.
            <br />
            <span className="text-lime">אנחנו בונים ביטחון,</span>
            <br />
            התמדה ושייכות.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            אימונים פונקציונליים לילדים ונוער עם המאמן שי פרץ — סטודיו שמפתח
            גוף חזק, יחד עם ביטחון עצמי וחברים אמיתיים. ביבנה, למעלה מ-450
            ילדים ונערים כבר הצטרפו.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-bold text-ink shadow-glow transition hover:scale-[1.03]"
            >
              🎁 קבעו אימון ניסיון ללא עלות
            </a>
            <a
              href="#method"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white/80 transition hover:border-lime hover:text-lime"
            >
              איך זה עובד?
            </a>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:max-w-none">
          <Image
            src={asset("/images/session-group.jpg")}
            alt="ילדים מתאמנים בסטודיו UPGRADE ביבנה עם משקולות, בהדרכת מאמן"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 480px, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
