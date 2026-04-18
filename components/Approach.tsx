"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  const t = useTranslations();
  return (
    <section className="w-full py-section">
      <h1 className="heading">
        {t("approach.title")}
      </h1>
      <div className="my-section flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title={t("approach.card1Title")}
          icon={<AceternityIcon order={t("approach.step1")} />}
          des={t("approach.card1Desc")}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="overflow-hidden rounded-[var(--radius-panel)] bg-primary/10"
            colorTokens={["primary", "secondary"]}
          />
        </Card>
        <Card
          title={t("approach.card2Title")}
          icon={<AceternityIcon order={t("approach.step2")} />}
          des={t("approach.card2Desc")}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="overflow-hidden rounded-[var(--radius-panel)] bg-secondary/10"
            colorTokens={["primary-400", "primary-700"]}
            dotSize={2}
          />
        </Card>
        <Card
          title={t("approach.card3Title")}
          icon={<AceternityIcon order={t("approach.step3")} />}
          des={t("approach.card3Desc")}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="overflow-hidden rounded-[var(--radius-panel)] bg-accent/15"
            colorTokens={["accent", "primary-200"]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card surface-panel relative mx-auto flex w-full max-w-sm items-center justify-center p-4 lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-10 w-10 text-muted-foreground/40" />
      <Icon className="absolute -bottom-3 -left-3 h-10 w-10 text-muted-foreground/40" />
      <Icon className="absolute -right-3 -top-3 h-10 w-10 text-muted-foreground/40" />
      <Icon className="absolute -bottom-3 -right-3 h-10 w-10 text-muted-foreground/40" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="text-foreground text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4  font-bold group-hover/canvas-card:text-foreground 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-base opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-foreground/70 text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-spin-slow bg-brand-ring"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-card px-5 py-2 text-primary backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
