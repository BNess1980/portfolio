import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { experience } from "../data/experience";
import JobCard from "./JobCard";
import StackIcons from "./StackIcons";
import TimelineNavVertical from "./TimelineNavVertical";

interface TimelineProps {
  headerHeight: number;
  onActiveChange: (index: number) => void;
  onSelect: (index: number) => void;
}

export default function Timeline({ headerHeight, onActiveChange, onSelect }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      experience.length - 1,
      Math.max(0, Math.floor(value * experience.length)),
    );
    setActiveIndex(index);
    onActiveChange(index);
  });

  return (
    <div
      ref={containerRef}
      id="career-timeline"
      role="region"
      aria-label="Career experience timeline"
      className="relative"
      style={{ height: `${experience.length * 100}vh` }}
    >
      <div
        className="sticky flex items-stretch justify-center gap-2 overflow-x-hidden overflow-y-auto px-6 pt-5 sm:items-start"
        style={{ top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }}
      >
        <TimelineNavVertical activeIndex={activeIndex} onSelect={onSelect} />
        <div className="relative w-full flex-1">
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={shouldReduceMotion ? { opacity: 0 } : { y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { y: -60, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: "easeOut" }}
              className="absolute flex w-full flex-col items-center px-6"
            >
              <StackIcons stack={experience[activeIndex].stack} />
              <JobCard role={experience[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
