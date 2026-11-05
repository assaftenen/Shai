import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export default function Offer() {
  return (
    <section className="bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-lime/30 bg-gradient-to-b from-panel2 to-ink px-6 py-12 text-center shadow-glow">
        <h2 className="text-3xl font-black sm:text-4xl">
          🎁 אימון ניסיון אחד — <span className="text-lime">ללא עלות</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          בלי התחייבות, בלי הפתעות. תבואו, תנסו, ותחליטו אם UPGRADE מתאים
          לילד או לילדה שלכם. מחירי המסלולים והחבילות — בשיחה אישית בוואטסאפ.
        </p>
        <a
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-ink transition hover:scale-[1.03]"
        >
          💬 לקביעת אימון ניסיון בוואטסאפ
        </a>
      </div>
    </section>
  );
}
