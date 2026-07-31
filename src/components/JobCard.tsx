import { useId, useLayoutEffect, useRef, useState } from "react";
import type { Role } from "../data/experience";

interface JobCardProps {
  role: Role;
}

export default function JobCard({ role }: JobCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionId = useId();
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = descriptionRef.current;
    if (!el) return;
    setIsTruncated(el.scrollHeight > el.clientHeight + 1);
  }, []);

  return (
    <article className="relative w-full max-w-2xl rounded-2xl border-t-4 border-brand-gold bg-cream/95 p-6 pb-12 font-google-sans shadow-lg shadow-ink/5 backdrop-blur-sm sm:p-8 sm:pb-14">

      <div className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="text-xl font-semibold text-ink sm:text-2xl">
          {role.company}
          <span className="hidden sm:inline">
            {" "}
            —{" "}
          </span>
          <span className="block text-base font-medium text-slate sm:inline sm:text-xl">
            {role.title}
          </span>
        </h2>
        <span className="whitespace-nowrap text-sm font-medium text-slate sm:text-right">
          {role.period}
        </span>
      </div>

      {role.location && (
        <p className="mt-3 text-xs uppercase tracking-wide text-slate">
          {role.location}
        </p>
      )}

      <p
        ref={descriptionRef}
        id={descriptionId}
        className={`mt-4 text-sm leading-relaxed text-ink/80 sm:text-base ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {role.description}
      </p>

      {isTruncated && !expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-controls={descriptionId}
          aria-label="Show more"
          className="absolute bottom-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-slate transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true" focusable="false">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      )}
    </article>
  );
}
