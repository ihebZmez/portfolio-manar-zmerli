import { gridItems } from "@/data";
import { useTranslations } from "next-intl";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  const t = useTranslations();
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={t(item.titleKey)}
            description={t(item.descriptionKey)}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
