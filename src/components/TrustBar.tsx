const stats = [
  { value: "10+", label: "שנות ניסיון באימון ילדים ונוער" },
  { value: "450+", label: "ילדים ונערים שהצטרפו לדרך" },
  { value: "100%", label: "אימון ראשון ללא עלות וללא התחייבות" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-panel">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-black text-lime sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
