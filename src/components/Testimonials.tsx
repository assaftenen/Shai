// Placeholder quotes — swap for real parent testimonials before launch.
const quotes = [
  {
    text: "הבן שלי הגיע חסר ביטחון לגמרי, ואחרי כמה חודשים אני רואה ילד אחר — זקוף, שמח, ורץ לאימונים.",
    name: "משפחת כהן, יבנה",
  },
  {
    text: "שי יודע בדיוק איך לדבר עם ילדים. הבת שלי מחכה לאימון כל שבוע, וזה כבר הרבה יותר מכושר.",
    name: "אמא לילדה בת 10",
  },
  {
    text: "סוף סוף מקום שבו הילד לא מתחרה עם אף אחד חוץ מעצמו. ההתקדמות מורגשת גם בבית.",
    name: "הורה למתאמן בן 13",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h2 className="mb-10 text-center text-3xl font-black sm:text-4xl">
        הורים כותבים
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-panel2 p-6"
          >
            <blockquote className="text-white/80">&ldquo;{q.text}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-lime">
              {q.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-white/30">
        * ציטוטים לדוגמה — יוחלפו בהמלצות אמיתיות
      </p>
    </section>
  );
}
