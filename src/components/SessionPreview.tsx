import Image from "next/image";
import { asset } from "@/lib/asset";

const photos = [
  { src: asset("/images/coach-action.jpg"), alt: "המאמן שי פרץ מדגים תרגיל בסטודיו" },
  { src: asset("/images/session-group.jpg"), alt: "קבוצת ילדים מתאמנים עם משקולות בהדרכת מאמן" },
  { src: asset("/images/athlete-2.jpg"), alt: "מתאמנת צעירה באימון פונקציונלי" },
  { src: asset("/images/up-sign.jpg"), alt: "שלט הלוגו של UPGRADE בסטודיו" },
];

export default function SessionPreview() {
  return (
    <section className="bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            איך נראה אימון ב-UPGRADE
          </h2>
          <p className="mt-3 text-white/70">
            אימונים פונקציונליים בסגנון קרוספיט לילדים ונוער — קטלבלים,
            חבלים, משקל גוף ותרגול בקבוצות קטנות, בהתאמה אישית לגיל ולרמה של
            כל ילד.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition duration-300 hover:scale-110"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
