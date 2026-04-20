"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  const t = useTranslations();
  const localizedTestimonials = testimonials.map((item) => ({
    quote: t(item.quoteKey),
    name: t(item.nameKey),
    title: t(item.titleKey),
    image_profil: item.image_profil,
  }));

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">{t("testimonials.title")}</h1>

      <div className="flex flex-col items-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <div className="min-h-[40vh] h-fit rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={localizedTestimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] gap-1 sm:gap-2">
                <Image
                  src={company.img}
                  alt={t(company.nameKey)}
                  width={100}
                  height={100}
                  className="w-12 sm:w-14 md:w-16 lg:w-20"
                />

                {/* <Image
          src={company.nameImg}
          alt={company.name}
          width={company.id === 4 || company.id === 5 ? 100 : 150}
          height={50}
          className="w-16 sm:w-20 md:w-24 lg:w-32"
        /> */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
