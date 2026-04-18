"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import siteConfig from "@/configs/base-config.exemple.json";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-2 rounded-2xl border border-border/70 bg-background/85 px-4 py-3 shadow-lg shadow-primary/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 md:min-w-[70vw] md:px-6 lg:min-w-fit",
          className
        )}
      >
        <div className="mr-2 flex items-center gap-2 border-r border-border/60 pr-3 md:mr-4 md:pr-4">
          {siteConfig.brand?.logo && (
            <Image
              src={siteConfig.brand.logo}
              alt={siteConfig.brand?.name || "Logo"}
              width={32}
              height={32}
            />
          )}
          {siteConfig.brand?.name && (
            <span className="text-sm font-semibold text-foreground">
              {siteConfig.brand.name}
            </span>
          )}
        </div>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "group relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
            )}
          >
            {navItem.icon && (
              <span className="text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                {navItem.icon}
              </span>
            )}
            <span className="cursor-pointer whitespace-nowrap text-sm">
              {navItem.name}
            </span>
          </Link>
        ))}

        {/* Language Switcher Component */}
        <LanguageSwitcher />

        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
