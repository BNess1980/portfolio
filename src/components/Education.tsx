import { education } from "../data/education";

export default function Education() {
  return (
    <section
      aria-labelledby="education-heading"
      className="relative z-0 border-t border-line bg-ink px-6 py-16 text-cream sm:py-24"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="education-heading"
          className="text-sm font-semibold uppercase tracking-widest text-brand-gold"
        >
          Education
        </h2>
        <ul className="mt-6 flex flex-col gap-6">
          {education.map((entry) => (
            <li
              key={entry.school}
              className="flex flex-col gap-1 border-b border-white/10 pb-6 last:border-none last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="text-lg font-medium">{entry.school}</p>
                <p className="text-sm text-cream/70">{entry.program}</p>
              </div>
              <span className="text-sm text-cream/60">{entry.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
