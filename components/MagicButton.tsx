import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-[var(--radius-panel)] p-px focus:outline-none md:mt-10 md:w-60"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-spin-slow bg-brand-ring" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-[calc(var(--radius-panel)-1px)] bg-card px-7 text-sm font-medium text-foreground shadow-soft backdrop-blur-3xl ${otherClasses ?? ""}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
