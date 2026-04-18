"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image_profil: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }

    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }

    setStart(items.length > 0);
  }, [direction, items.length, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4 md:gap-16",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-border p-5 md:p-16 md:w-[60vw] bg-card"
            key={idx}
            aria-hidden={idx >= items.length}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* change text color, text-lg */}
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-foreground font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                {/* add this div for the profile img */}
                <div className="me-3">
                  <Image
                    src={item.image_profil}
                    width={50}
                    height={50}
                    alt="profile"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  {/* change text color, font-normal to font-bold, text-xl */}
                  <span className="text-xl font-bold leading-[1.6] text-foreground">
                    {item.name}
                  </span>
                  {/* change text color */}
                  <span className=" text-sm leading-[1.6] text-muted-foreground font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
