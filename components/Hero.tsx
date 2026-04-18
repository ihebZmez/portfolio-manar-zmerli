import { FaLocationArrow } from "react-icons/fa6";
import { useTranslations } from "next-intl";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const t = useTranslations();
  return (
    <div className="pb-section pt-hero-offset">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="var(--primary)"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="var(--secondary)"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="var(--accent)"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full bg-background bg-grid-foreground/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 my-section flex justify-center">
        <div className="flex max-w-hero flex-col items-center justify-center">
          <p className="max-w-3xl text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t("hero.eyebrow")}
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <h1 className="hero-title mb-4 text-center">
            <TextGenerateEffect
              words={t("hero.title")}
              className="text-center"
            />
          </h1>

          <p className="mb-4 text-center text-sm text-foreground md:text-lg md:tracking-wider lg:text-3xl">
            {t("hero.subtitle")}
          </p>
          <p className="mb-4 pt-14 text-center text-sm text-muted-foreground md:text-lg md:tracking-wider lg:text-2xl">
            <span dir="auto">{t("hero.description")}</span>
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
            <a href="#contact" className="w-full md:w-auto">
              <MagicButton
                title={t("hero.ctaContact")}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#services" className="w-full md:w-auto">
              <MagicButton
                title={t("hero.ctaServices")}
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="!bg-secondary !text-secondary-foreground"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
