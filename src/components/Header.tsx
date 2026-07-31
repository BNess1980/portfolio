import { forwardRef } from "react";
import headshot from "../assets/headshot.jpg";
import TimelineNav from "./TimelineNav";
import DustParticles from "./DustParticles";

const LINKEDIN_URL = "https://www.linkedin.com/in/bruce-ness-87863417/";

interface HeaderProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ activeIndex, onSelect }, ref) => {
  return (
    <header
      ref={ref}
      className="bg-header-glow sticky top-0 z-20 flex flex-col items-center gap-4 border-b border-header-glow-top/20 px-6 pb-6 pt-10 sm:pb-8 sm:pt-14"
    >
      <DustParticles />

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="View Bruce Ness's LinkedIn profile"
      >
        <img
          src={headshot}
          alt=""
          className="h-24 w-24 rounded-full border-2 border-brand-orange object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
        />
        <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-cream shadow-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true" focusable="false">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
        </span>
      </a>

      <h1 className="max-w-2xl text-center font-google-sans text-3xl font-semibold tracking-tight text-[#f5f5f5] sm:text-4xl">
        Bruce Ness — Career Timeline
      </h1>

      <p className="font-serif text-lg italic text-[#f5f5f5] sm:text-xl">
        Seasoned Front End Engineer with core expertise in Javascript Frameworks and CSS
      </p>

      <TimelineNav activeIndex={activeIndex} onSelect={onSelect} />
    </header>
  );
});

Header.displayName = "Header";

export default Header;
