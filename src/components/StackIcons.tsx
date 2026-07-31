import type { StackIcon } from "../data/experience";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import html5 from "../assets/icons/html5.png";
import css3 from "../assets/icons/css3.png";
import javascript from "../assets/icons/javascript.png";
import typescript from "../assets/icons/typescript.png";
import react from "../assets/icons/react.png";
import angular from "../assets/icons/angular.png";

const ICONS: Record<StackIcon, { src: string; label: string }> = {
  html5: { src: html5, label: "HTML5" },
  css3: { src: css3, label: "CSS3" },
  javascript: { src: javascript, label: "JavaScript" },
  typescript: { src: typescript, label: "TypeScript" },
  react: { src: react, label: "React" },
  angular: { src: angular, label: "Angular" },
};

interface StackIconsProps {
  stack: StackIcon[];
}

export default function StackIcons({ stack }: StackIconsProps) {
  return (
    <div className="mb-4 flex justify-center gap-4">
      {stack.map((icon) => {
        const { src, label } = ICONS[icon];
        return (
          <Tooltip key={icon}>
            <TooltipTrigger asChild>
              <img
                src={src}
                alt={label}
                tabIndex={0}
                className="h-[60px] w-[60px] rounded-sm drop-shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
