"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useTranslations } from "next-intl";

const RecentProjects = () => {
  const t = useTranslations();

  return (
    <div id="projects" className="py-section">
      <h1 className="heading">{t("activities.title")}</h1>

      <div className="mx-auto mt-section grid w-full grid-cols-1 items-stretch justify-center gap-12 p-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <div key={item.id} className="flex h-[30rem] w-full max-w-panel">
            <PinContainer
              title={t(item.linkNameKey)}
              href={item.linkProject}
              className="flex h-full w-full"
            >
              {/* MAIN CARD LAYOUT */}
              <div className="flex h-full w-full flex-col">
                {/* IMAGE SECTION (fixed height) */}
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden rounded-xl">
                  <div className="absolute inset-0">
                    <Image
                      src="/bg.png"
                      width={1000}
                      height={1000}
                      alt="bgimg"
                      className="h-full w-full object-cover opacity-40"
                    />
                  </div>

                  <Image
                    src={item.img}
                    alt="blog thumbnail"
                    width={350}
                    height={350}
                    className="absolute inset-0 m-auto z-10 rounded-xl object-cover p-2"
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="flex flex-1 flex-col pt-4">
                  {/* TITLE */}
                  <h1 className="text-base font-bold md:text-xl line-clamp-2">
                    {t(item.titleKey)}
                  </h1>

                  {/* DESCRIPTION (allowed to grow but not break layout) */}
                  <p className="mt-3 text-sm font-light text-muted-foreground line-clamp-5">
                    {t(item.desKey)}
                  </p>

                  {/* PUSH FOOTER DOWN */}
                  <div className="mt-auto pt-4">
                    {/* FOOTER */}
                    <div className="flex items-center justify-between">
                      {/* ICONS */}
                      <div className="flex items-center -space-x-3">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated shadow-soft"
                          >
                            <Image
                              src={icon}
                              alt="icon"
                              width={500}
                              height={500}
                              className="p-1"
                            />
                          </div>
                        ))}
                      </div>

                      {/* BUTTON */}
                      <div className="flex items-center gap-2">
                        <a
                          href={item.linkProject}
                          target="_blank"
                          className="
                            flex items-center space-x-2
                            rounded-full bg-primary/15 px-5 py-1
                            ring-1 ring-primary/30
                            transition-all duration-300
                            hover:bg-primary hover:text-primary-foreground
                          "
                        >
                          <p className="text-sm text-primary md:text-xs lg:text-base">
                            {t(item.linkNameKey)}
                          </p>
                        </a>

                        <FaLocationArrow className="text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
