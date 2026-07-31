import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import { TooltipProvider } from "./components/ui/tooltip";
import { experience } from "./data/experience";

function App() {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const updateHeight = () => setHeaderHeight(node.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleSelect = useCallback((index: number) => {
    const container = document.getElementById("career-timeline");
    if (!container) return;

    const containerTop = window.scrollY + container.getBoundingClientRect().top;
    const scrollable = container.offsetHeight - window.innerHeight;
    const progress = (index + 0.5) / experience.length;

    window.scrollTo({
      top: containerTop + progress * scrollable,
      behavior: "smooth",
    });
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen font-sans text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header ref={headerRef} activeIndex={activeIndex} onSelect={handleSelect} />
        <main id="main-content" tabIndex={-1}>
          <Timeline
            headerHeight={headerHeight}
            onActiveChange={setActiveIndex}
            onSelect={handleSelect}
          />
          <Education />
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
