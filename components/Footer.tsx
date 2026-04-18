import { FaLocationArrow, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";

import Image from "next/image";
import MagicButton from "./MagicButton";
import { useTranslations } from "next-intl";
import siteConfig from "@/configs/base-config.exemple.json";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: <FaFacebook size={20} />,
  instagram: <FaInstagram size={20} />,
  linkedin: <FaLinkedin size={20} />,
  tiktok: <FaTiktok size={20} />,
  youtube: <FaYoutube size={20} />,
};

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1920}
          height={1080}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t("footer.title")}
        </h1>
        <p className="text-muted-foreground md:mt-10 my-5 text-center">
          {t("footer.subtitle")}
        </p>
        <div className="text-center text-muted-foreground space-y-2">
          {siteConfig.contact?.address && <p>{siteConfig.contact.address}</p>}
          {siteConfig.contact?.phone && <p>{siteConfig.contact.phone}</p>}
          {siteConfig.contact?.email && <p>{siteConfig.contact.email}</p>}
          {siteConfig.contact?.workingHours && <p>{siteConfig.contact.workingHours}</p>}
          {(siteConfig.contact as any)?.website && (
            <a
              href={(siteConfig.contact as any)?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              {t("footer.website")}
            </a>
          )}
        </div>
        <a
          href={(siteConfig.contact as any)?.website || "mailto:" + siteConfig.contact?.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title={t("footer.cta")}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          {siteConfig.legal?.copyright ? siteConfig.legal.copyright : (
            <>
              © {new Date().getFullYear()} <span className="text-primary">{siteConfig.brand?.name || "MY_COMPANY"}</span>
              . {t("footer.copyright")}
            </>
          )}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {siteConfig.social && Object.entries(siteConfig.social).map(([platform, link]) => {
            if (!link) return null;
            return (
              <div
                key={platform}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-card rounded-lg border border-border transition-all hover:bg-secondary/20 hover:scale-110"
              >
                <a href={link as string} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  {SOCIAL_ICONS[platform] || <span className="text-xs uppercase">{platform.substring(0, 2)}</span>}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
