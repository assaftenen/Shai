export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} UPGRADE — אימונים פונקציונליים לילדים ונוער, יבנה</p>
        <p>בהדרכת שי פרץ</p>
      </div>
    </footer>
  );
}
