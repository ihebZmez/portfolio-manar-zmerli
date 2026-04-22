import React from "react";
import { useTranslations } from "next-intl";

import {
  programmer_skills,
  framework_skills,
  database_skills,
  tools_on_skills,
  know_some_skills,
} from "@/data";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import siteConfig from "@/configs/base-config.exemple.json";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { bounce: 0, duration: 2500 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat().format(
          Math.floor(latest),
        );
      }
    });
  }, [springValue]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 flex items-center">
        <span ref={ref}>0</span>+
      </div>
      <div className="text-muted-foreground text-sm md:text-base font-semibold text-center uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const Skills = () => {
  const t = useTranslations();

  const commerceItems = framework_skills.map((item) => ({
    ...item,
    name: t(item.nameKey ?? item.name),
  }));
  const servicesItems = programmer_skills.map((item) => ({
    ...item,
    name: t(item.nameKey ?? item.name),
  }));
  const hospitalityItems = know_some_skills.map((item) => ({
    ...item,
    name: t(item.nameKey ?? item.name),
  }));
  const realEstateItems = database_skills.map((item) => ({
    ...item,
    name: t(item.nameKey ?? item.name),
  }));
  const industryItems = tools_on_skills.map((item) => ({
    ...item,
    name: t(item.nameKey ?? item.name),
  }));

  return (
    <section id="skills" className="py-10 md:py-20">
      <h1 className="heading text-2xl md:text-3xl lg:text-4xl mb-12">
        {t("expertise.title")}
      </h1>

      {siteConfig.about && (
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-16 px-4">
          <AnimatedCounter
            value={siteConfig.about.yearsExperience || 0}
            label={t("expertise.stats.yearsExperience")}
          />
          <AnimatedCounter
            value={siteConfig.about.clientsCount || 0}
            label={t("expertise.stats.clientsCount")}
          />
          <AnimatedCounter
            value={siteConfig.about.projectsCount || 0}
            label={t("expertise.stats.projectsCount")}
          />
        </div>
      )}

      <div className="flex flex-col items-center w-full">
        <div className="w-full min-h-[500px] md:min-h-[600px] px-4 md:px-6 rounded-md flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* Skills Categories Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Framework Skills */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t("expertise.categories.skill1")}
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={commerceItems} />
              </div>
            </div>

            {/* Programming Languages */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t("expertise.categories.skill2")}
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={servicesItems} />
              </div>
            </div>

            {/* Technologies */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t("expertise.categories.skill3")}
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={hospitalityItems} />
              </div>
            </div>

            {/* Databases */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t("expertise.categories.skill4")}
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={realEstateItems} />
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t("expertise.categories.skill5")}
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={industryItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
