"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const curXRef = useRef(0);
  const curYRef = useRef(0);

  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    if (!interactiveRef.current) {
      return;
    }

    curXRef.current += (tgX - curXRef.current) / 20;
    curYRef.current += (tgY - curYRef.current) / 20;
    interactiveRef.current.style.transform = `translate(${Math.round(
      curXRef.current,
    )}px, ${Math.round(curYRef.current)}px)`;
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "absolute left-0 top-0 h-full w-full overflow-hidden bg-surface-panel",
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]",
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--primary-rgb),_0.9)_0,_rgba(var(--primary-rgb),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:hard-light] h-4/5 w-4/5 top-[10%] left-[10%]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--secondary-rgb),_0.8)_0,_rgba(var(--secondary-rgb),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:hard-light] h-4/5 w-4/5 top-[10%] left-[10%]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--accent-rgb),_0.8)_0,_rgba(var(--accent-rgb),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:hard-light] h-4/5 w-4/5 top-[10%] left-[10%]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--primary-400-rgb),_0.8)_0,_rgba(var(--primary-400-rgb),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:hard-light] h-4/5 w-4/5 top-[10%] left-[10%]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--primary-700-rgb),_0.8)_0,_rgba(var(--primary-700-rgb),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:hard-light] h-4/5 w-4/5 top-[10%] left-[10%]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`,
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--accent-rgb),_0.8)_0,_rgba(var(--accent-rgb),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:hard-light] -left-1/2 -top-1/2 h-full w-full`,
              `opacity-70`,
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
