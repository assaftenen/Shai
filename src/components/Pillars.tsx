const pillars = [
  {
    emoji: "💪",
    title: "פיזי",
    text: "פיתוח כוח, כושר תפקודי והרגלים בריאים — תנועות טבעיות כמו קפיצה, ריצה, דחיפה, משיכה ושיווי משקל.",
  },
  {
    emoji: "💚",
    title: "רגשי",
    text: "בניית ביטחון עצמי, חוסן ותחושת מסוגלות — דרך יעדים אישיים והתקדמות הדרגתית שכל ילד חווה בעצמו.",
  },
  {
    emoji: "🤝",
    title: "חברתי",
    text: "יצירת חברויות אמיתיות, תחושת שייכות ועבודת צוות — מסגרת קבועה שהילדים מחכים לחזור אליה.",
  },
];

export default function Pillars() {
  return (
    <section id="method" className="bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">השיטה שלנו</h2>
          <p className="mt-3 text-white/60">
            כי מבחינתנו — האימון הוא הכלי. הילד הוא המטרה.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-panel2 p-7 transition hover:border-lime/40 hover:shadow-glow"
            >
              <div className="text-4xl">{p.emoji}</div>
              <h3 className="mt-4 text-xl font-bold text-lime">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
