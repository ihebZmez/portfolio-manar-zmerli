import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Add this import
import { useTranslations } from "next-intl";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const t = useTranslations();

  const openPDF = () => {
    window.open("https://tn.linkedin.com/in/manar-zmerli-3961931a3", "_blank");
  };

  return (
    <div className="w-full py-section">
      <h1 className="heading">{t("milestones.title")}</h1>
      <p className="text-center pt-14 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        {t("milestones.ctaPrefix")}{" "}
        <motion.span
          className="text-primary cursor-pointer"
          onClick={openPDF}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: ["0%", "-25%", "0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {t("milestones.ctaLink")}
        </motion.span>
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-foreground border-border bg-card"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={500}
                height={500}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {t(card.titleKey)}
                </h1>
                <p className="text-start text-muted-foreground md:text-lg mt-3 font-semibold">
                  {t(card.descKey)}
                </p>
                <p className="text-start text-primary md:text-base mt-3 font-semibold">
                  {t(card.tasks_descKey)
                    .split(" | ")
                    .map((task, index, array) => (
                      <React.Fragment key={index}>
                        {task}
                        {index < array.length - 1 && (
                          <span className="text-foreground"> | </span>
                        )}
                      </React.Fragment>
                    ))}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
