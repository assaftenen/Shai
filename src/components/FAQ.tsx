const faqs = [
  {
    q: "מאיזה גיל אפשר להצטרף?",
    a: "מקבלים ילדים ובני נוער במגוון קבוצות גיל, עם תוכנית מותאמת לכל שלב התפתחותי. בפנייה בוואטסאפ נשבץ לקבוצה המתאימה לגיל ולרמה.",
  },
  {
    q: "איך נראה אימון ניסיון?",
    a: "אימון מלא, בדיוק כמו שאר המתאמנים חווים — כדי שהילד/ה וההורים יבינו בדיוק למה מצפים, ללא עלות וללא התחייבות.",
  },
  {
    q: "כמה פעמים בשבוע מתאמנים?",
    a: "יש מסלולים בתדירויות שונות בהתאם לגיל וליעדים. נתאים יחד את התדירות הנכונה בשיחה אישית.",
  },
  {
    q: "מה צריך להביא לאימון?",
    a: "בגדי ספורט נוחים, נעלי ספורט סגורות ובקבוק מים. שאר הציוד נמצא בסטודיו.",
  },
  {
    q: "איפה הסטודיו נמצא?",
    a: "ברחוב אברהם אשטמקר ביבנה. כתובת וניווט מדויק נשלחים בוואטסאפ עם קביעת האימון.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h2 className="mb-10 text-center text-3xl font-black sm:text-4xl">
        שאלות נפוצות
      </h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-white/10 bg-panel2 p-5 open:border-lime/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-white">
              {f.q}
              <span className="ms-4 text-lime transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-white/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
