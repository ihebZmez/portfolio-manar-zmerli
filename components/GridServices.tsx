import { gridServicesItems } from "@/data";
import { useTranslations } from "next-intl";
import { BentoGridService, BentoGridServiceItem } from "./ui/BentoGridService";
import siteConfig from "@/configs/base-config.exemple.json";

const GridServices = () => {
  const t = useTranslations();
  return (
    <section
      id="services"
      aria-label={`${siteConfig.brand?.name} services`}
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl pt-20 font-bold text-foreground mb-4">
            {t("services.sectionTitle")}
          </h2>
          <p className="text-lg pt-10 text-muted-foreground max-w-3xl mx-auto">
            {t("services.sectionDescription")}
          </p>
        </div>
        <BentoGridService className="w-full">
          {gridServicesItems.map((item, i) => (
            <BentoGridServiceItem
              id={item.id}
              key={i}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
              className="h-full"
              titleClassName="text-center"
              headingLevel={item.headingLevel}
              metaDescription={t(
                item.metaDescriptionKey,
              )}
              onClick={() => {
                // TODO: Add navigation to service detail page
                console.log(
                  `Navigate to service: ${t(item.titleKey)}`,
                );
              }}
            />
          ))}
        </BentoGridService>
      </div>
    </section>
  );
};

export default GridServices;
