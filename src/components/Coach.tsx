"use client";

import Image from "next/image";
import { useState } from "react";

export default function Coach() {
  const [showTeam, setShowTeam] = useState(true);

  return (
    <section id="coach" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="text-3xl font-black sm:text-4xl">
          מי מאמן את הילדים שלכם
        </h2>
        <label className="flex cursor-pointer items-center gap-3 text-sm text-white/60">
          <span>הצגת כל צוות המאמנים</span>
          <span
            role="switch"
            aria-checked={showTeam}
            onClick={() => setShowTeam((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setShowTeam((v) => !v);
              }
            }}
            tabIndex={0}
            className={`relative h-6 w-11 rounded-full transition ${
              showTeam ? "bg-lime" : "bg-white/20"
            }`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-ink transition-all ${
                showTeam ? "right-0.5" : "right-[22px]"
              }`}
            />
          </span>
        </label>
      </div>

      <div
        className={`grid gap-8 ${showTeam ? "md:grid-cols-2" : "md:grid-cols-1"}`}
      >
        <div className="flex gap-6 rounded-2xl border border-white/10 bg-panel2 p-6">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-lime sm:h-36 sm:w-36">
            <Image
              src="/images/coach-shai.jpg"
              alt="שי פרץ, מייסד UPGRADE"
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">שי פרץ</h3>
            <p className="text-sm text-lime">מייסד UPGRADE ומאמן ראשי</p>
            <p className="mt-3 text-white/70">
              כשהקמתי את UPGRADE, החזון שלי היה ברור: ליצור סטודיו שהוא הרבה
              מעבר למקום שבו ילדים ובני נוער מתאמנים. למעלה מעשור של ניסיון
              באימון ילדים ונוער, ומאות מתאמנים שליוויתי בדרך לגרסה חזקה
              ובטוחה יותר של עצמם.
            </p>
          </div>
        </div>

        {showTeam && (
          <div className="flex gap-6 rounded-2xl border border-white/10 bg-panel2 p-6">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-teal sm:h-36 sm:w-36">
              <Image
                src="/images/athlete-1.jpg"
                alt="הדר, מאמנת ב-UPGRADE"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">הדר</h3>
              <p className="text-sm text-teal">מאמנת ב-UPGRADE</p>
              <p className="mt-3 text-white/70">
                כל ילד צריך מאמן שיעודד אותו. הדר מביאה אנרגיה, סבלנות
                ועידוד אישי לכל מתאמן ומתאמנת — ועוזרת לכל ילד למצוא את
                הקצב והביטחון שלו.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
