"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={cn(
        "group/pin relative z-10 cursor-pointer w-full h-full",
        containerClassName,
      )}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* =========================
          MAIN CARD (NO 3D TRANSFORM)
      ========================= */}
      <div className="relative w-full h-full flex items-stretch justify-stretch">
        <div
          className={cn(
            "relative w-full h-full overflow-hidden",
            "rounded-[var(--radius-panel)]",
            "border border-border/60",
            "bg-surface-overlay",
            "shadow-floating",
            "transition-all duration-300",
            "group-hover/pin:border-primary/30 group-hover/pin:shadow-panel",
          )}
        >
          <div className={cn("relative z-10 h-full w-full p-4", className)}>
            {children}
          </div>
        </div>
      </div>

      {/* =========================
          FLOATING TITLE (HOVER ONLY)
      ========================= */}
      <motion.div className="pointer-events-none absolute inset-0 flex items-start justify-center opacity-0 transition-opacity duration-300 group-hover/pin:opacity-100">
        <div className="mt-4">
          <a
            href={href}
            target="_blank"
            className="
              flex items-center space-x-2
              rounded-full
              border border-border/70
              bg-card
              px-4 py-1
              shadow-soft
              text-foreground
            "
          >
            <span className="text-xs font-semibold">{title}</span>

            <span className="absolute bottom-0 left-0 h-px w-full bg-primary/40" />
          </a>
        </div>
      </motion.div>

      {/* =========================
          SOFT GLOW EFFECT (SAFE)
      ========================= */}
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-500">
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
      </motion.div>
    </div>
  );
};
