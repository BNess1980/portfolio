import { experience, fullPeriod, shortPeriod } from "../data/experience";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface TimelineNavProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function TimelineNav({ activeIndex, onSelect }: TimelineNavProps) {
  return (
    <nav
      aria-label="Career timeline"
      className="relative mt-2 hidden w-full max-w-3xl items-center py-[30px] sm:flex"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-header-glow-top/40"
      />
      <ol className="relative flex w-full items-center justify-between">
        {experience.map((role, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={role.company} className="flex flex-col items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => onSelect(index)}
                    aria-label={`${role.company}, ${shortPeriod(role.period)}`}
                    aria-current={isActive}
                    className="group flex cursor-pointer flex-col items-center gap-2 rounded-full p-1.5"
                  >
                    <span
                      className={`whitespace-nowrap text-sm font-bold transition-opacity duration-300 ${
                        isActive ? "text-brand-gold" : "text-brand-gold/75"
                      }`}
                      style={{ transform: "translateY(-10px) rotate(-10deg)" }}
                    >
                      {fullPeriod(role.period)}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-2.5 w-2.5 rounded-full ring-2 ring-header-glow-top/20 transition-all duration-300 group-hover:scale-125 ${
                        isActive ? "bg-brand-gold" : "bg-brand-gold/75"
                      }`}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p className="font-medium">{role.company}</p>
                  <p className="text-[0.7rem] opacity-80">{shortPeriod(role.period)}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
