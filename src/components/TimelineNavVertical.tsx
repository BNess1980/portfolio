import { experience, shortPeriod } from "../data/experience";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface TimelineNavVerticalProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function TimelineNavVertical({ activeIndex, onSelect }: TimelineNavVerticalProps) {
  return (
    <nav aria-label="Career timeline" className="relative flex h-full shrink-0 sm:hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-2 top-2 w-px -translate-x-1/2 bg-header-glow-top/40"
        style={{ left: "5.75rem" }}
      />
      <ol className="relative flex h-full flex-col items-center justify-between py-2">
        {experience.map((role, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={role.company} className="flex items-center gap-2">
              <span
                className={`w-[4.5rem] shrink-0 whitespace-nowrap text-right text-[0.65rem] font-bold transition-opacity duration-300 ${
                  isActive ? "text-brand-gold" : "text-brand-gold/75"
                }`}
              >
                {shortPeriod(role.period)}
              </span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => onSelect(index)}
                    aria-label={`${role.company}, ${shortPeriod(role.period)}`}
                    aria-current={isActive}
                    className="group flex cursor-pointer items-center justify-center rounded-full p-2"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2.5 w-2.5 rounded-full ring-2 ring-header-glow-top/20 transition-all duration-300 group-hover:scale-125 ${
                        isActive ? "bg-brand-gold" : "bg-brand-gold/75"
                      }`}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p className="font-medium">{role.company}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
