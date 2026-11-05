import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export default function Location() {
  return (
    <section id="contact" className="bg-panel py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">
            בואו לבקר אותנו ביבנה
          </h2>
          <p className="mt-4 text-white/70">
            רחוב אברהם אשטמקר, יבנה
            <br />
            הגעה בוואטסאפ מומלצת — נענה לכל שאלה ונתאם ניווט מדויק.
          </p>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-bold text-ink transition hover:scale-[1.03]"
          >
            💬 דברו איתנו בוואטסאפ
          </a>
          <p className="mt-6 text-sm text-white/40">
            <a
              href="https://www.instagram.com/upgrade_kids_yavne"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-lime"
            >
              @upgrade_kids_yavne
            </a>{" "}
            באינסטגרם
          </p>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="מפת מיקום הסטודיו ביבנה"
            src="https://www.google.com/maps?q=%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%90%D7%A9%D7%98%D7%9E%D7%A7%D7%A8%2C%20%D7%99%D7%91%D7%A0%D7%94&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
