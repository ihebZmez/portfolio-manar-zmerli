export const buildNavItems = (t: (key: string) => string) => [
  { name: t("home"), link: "#" },
  { name: t("about"), link: "#about" },
  { name: t("services"), link: "#services" },
  { name: t("activities"), link: "#projects" },
  { name: t("expertise"), link: "#skills" },
  { name: t("testimonials"), link: "#testimonials" },
  { name: t("contact"), link: "#contact" },
];

export const gridServicesItems = [
  {
    id: 1,
    titleKey: "services.items.commerce.title",
    descriptionKey: "services.items.commerce.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.commerce.metaDescription",
  },
  {
    id: 2,
    titleKey: "services.items.services.title",
    descriptionKey: "services.items.services.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.services.metaDescription",
  },
  {
    id: 3,
    titleKey: "services.items.hospitality.title",
    descriptionKey: "services.items.hospitality.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.hospitality.metaDescription",
  },
  {
    id: 4,
    titleKey: "services.items.realEstate.title",
    descriptionKey: "services.items.realEstate.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.realEstate.metaDescription",
  },
  {
    id: 5,
    titleKey: "services.items.industry.title",
    descriptionKey: "services.items.industry.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.industry.metaDescription",
  },
  {
    id: 6,
    titleKey: "services.items.HotelAndTourisme.title",
    descriptionKey: "services.items.HotelAndTourisme.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.HotelAndTourisme.metaDescription",
  },
  {
    id: 7,
    titleKey: "services.items.PromotionImmobiliere.title",
    descriptionKey: "services.items.PromotionImmobiliere.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.PromotionImmobiliere.metaDescription",
  },
];

export const gridItems = [
  {
    id: 1,
    titleKey: "about.tile1Title",
    descriptionKey: "about.tile1Description",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    titleKey: "about.tile2Title",
    descriptionKey: "about.tile2Description",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    titleKey: "about.tileContactTitle",
    descriptionKey: "about.tileContactDescription",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    titleKey: "about.tile3Title",
    descriptionKey: "about.tile3Description",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "/Finances_Comptabilite_resized.svg",
  },
  {
    id: 5,
    titleKey: "about.tile4Title",
    descriptionKey: "about.tile4Description",
    className: "lg:col-span-3 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    titleKey: "about.tileVisionTitle",
    descriptionKey: "about.tileVisionDescription",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 7,
    titleKey: "about.tileValuesTitle",
    descriptionKey: "about.tileValuesDescription",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/Administration_Gestion.svg",
  },
  {
    id: 8,
    titleKey: "about.tileGovernanceTitle",
    descriptionKey: "about.tileGovernanceDescription",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 9,
    titleKey: "about.tileDiversificationTitle",
    descriptionKey: "about.tileDiversificationDescription",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 10,
    titleKey: "about.tileSinceTitle",
    descriptionKey: "about.tileSinceDescription",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 11,
    titleKey: "about.tilePartnershipTitle",
    descriptionKey: "about.tilePartnershipDescription",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 12,
    titleKey: "about.tileImpactTitle",
    descriptionKey: "about.tileImpactDescription",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

/* =========================
   ACTIVITIES → DATA ANALYST PROJECTS
========================= */

export const projects = [
  {
    id: 1,
    titleKey: "activities.items.sales_dashboard_title",
    desKey: "activities.items.sales_dashboard_description",
    img: "/project_display/data_sales_dashboard.jpg",
    iconLists: ["/Tech/python.svg", "/Tech/powerbi.svg", "/Tech/sql.svg"],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },
  {
    id: 2,
    titleKey: "activities.items.customer_segmentation_title",
    desKey: "activities.items.customer_segmentation_description",
    img: "/project_display/data_customer_segmentation.jpg",
    iconLists: ["/Tech/python.svg", "/Tech/pandas.svg", "/Tech/sklearn.svg"],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },
  {
    id: 3,
    titleKey: "activities.items.financial_analysis_title",
    desKey: "activities.items.financial_analysis_description",
    img: "/project_display/data_financial_analysis.jpg",
    iconLists: ["/Tech/excel.svg", "/Tech/sql.svg", "/Tech/powerbi.svg"],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },
  {
    id: 4,
    titleKey: "activities.items.marketing_analytics_title",
    desKey: "activities.items.marketing_analytics_description",
    img: "/project_display/data_marketing_analysis.jpg",
    iconLists: [
      "/Tech/python.svg",
      "/Tech/matplotlib.svg",
      "/Tech/seaborn.svg",
    ],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },
  {
    id: 5,
    titleKey: "activities.items.hr_analytics_title",
    desKey: "activities.items.hr_analytics_description",
    img: "/project_display/data_hr_analytics.jpg",
    iconLists: ["/Tech/sql.svg", "/Tech/powerbi.svg", "/Tech/excel.svg"],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },
  {
    id: 6,
    titleKey: "activities.items.predictive_modeling_title",
    desKey: "activities.items.predictive_modeling_description",
    img: "/project_display/data_predictive_model.jpg",
    iconLists: ["/Tech/python.svg", "/Tech/sklearn.svg", "/Tech/r.svg"],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },
];

/* =========================
   TESTIMONIALS
========================= */

export const testimonials = [
  {
    quoteKey: "testimonials.items.t1Quote",
    nameKey: "testimonials.items.t1Name",
    titleKey: "testimonials.items.t1Role",
    image_profil: "/profile.svg",
  },
  {
    quoteKey: "testimonials.items.t2Quote",
    nameKey: "testimonials.items.t2Name",
    titleKey: "testimonials.items.t2Role",
    image_profil: "/profile.svg",
  },
  {
    quoteKey: "testimonials.items.t3Quote",
    nameKey: "testimonials.items.t3Name",
    titleKey: "testimonials.items.t3Role",
    image_profil: "/profile.svg",
  },
];

/* =========================
   SKILLS (DATA ANALYST PROFILE)
========================= */

export const programmer_skills = [
  {
    id: 1,
    nameKey: "expertise.items.services.dataCleaning",
    name: "Data Cleaning & Preparation",
    designation: "",
    image: "/Administration_Gestion.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.services.eda",
    name: "Exploratory Data Analysis",
    designation: "",
    image: "/stream.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.services.visualization",
    name: "Data Visualization",
    designation: "",
    image: "/grid.svg",
  },
  {
    id: 4,
    nameKey: "expertise.items.services.reporting",
    name: "Reporting & Dashboards",
    designation: "",
    image: "/Finances_Comptabilite_resized.svg",
  },
];

export const framework_skills = [
  {
    id: 1,
    nameKey: "expertise.items.commerce.python",
    name: "Python (Pandas, NumPy)",
    designation: "",
    image: "/stream.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.commerce.sql",
    name: "SQL",
    designation: "",
    image: "/grid.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.commerce.powerbi",
    name: "Power BI",
    designation: "",
    image: "/Administration_Gestion.svg",
  },
  {
    id: 4,
    nameKey: "expertise.items.commerce.tableau",
    name: "Tableau",
    designation: "",
    image: "/Finances_Comptabilite_resized.svg",
  },
];

/* =========================
   DATABASE / ML SKILLS
========================= */

export const database_skills = [
  {
    id: 1,
    nameKey: "expertise.items.realEstate.statisticalModeling",
    name: "Statistical Modeling",
    designation: "",
    image: "/re.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.realEstate.dataMining",
    name: "Data Mining",
    designation: "",
    image: "/Finances_Comptabilite_resized.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.realEstate.ml",
    name: "Machine Learning",
    designation: "",
    image: "/grid.svg",
  },
  {
    id: 4,
    nameKey: "expertise.items.realEstate.insights",
    name: "Business Insights",
    designation: "",
    image: "/Administration_Gestion.svg",
  },
];

/* =========================
   OTHER SKILLS
========================= */

export const tools_on_skills = [
  {
    id: 1,
    nameKey: "expertise.items.industry.dataStorytelling",
    name: "Data Storytelling",
    designation: "",
    image: "/grid.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.industry.kpi",
    name: "KPI Tracking",
    designation: "",
    image: "/Administration_Gestion.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.industry.automation",
    name: "Automation (ETL)",
    designation: "",
    image: "/stream.svg",
  },
  {
    id: 4,
    nameKey: "expertise.items.industry.decision",
    name: "Decision Support",
    designation: "",
    image: "/Finances_Comptabilite_resized.svg",
  },
];

/* =========================
   COMPANIES (kept structure)
========================= */

export const companies = [
  {
    id: 1,
    nameKey: "services.items.commerce.title",
    designation: "",
    image: "/companies_display/steg.svg",
    img: "/companies_display/steg.svg",
    nameImg: "/companies_display/stegName.svg",
  },
  {
    id: 2,
    nameKey: "services.items.services.title",
    designation: "",
    image: "/companies_display/byly.svg",
    img: "/companies_display/byly.svg",
    nameImg: "/companies_display/bylyName.svg",
  },
  {
    id: 3,
    nameKey: "services.items.hospitality.title",
    designation: "",
    image: "/companies_display/nivea.svg",
    img: "/companies_display/nivea.svg",
    nameImg: "/companies_display/niveaName.svg",
  },
  {
    id: 4,
    nameKey: "services.items.realEstate.title",
    designation: "",
    image: "/companies_display/mp3.svg",
    img: "/companies_display/mp3.svg",
    nameImg: "/companies_display/mp3Name.svg",
  },
  {
    id: 5,
    nameKey: "services.items.realEstate.title",
    designation: "",
    image: "/companies_display/septona.svg",
    img: "/companies_display/septona.svg",
    nameImg: "/companies_display/septonaName.svg",
  },
];

/* =========================
   EXPERIENCE → DATA ANALYST
========================= */

export const workExperience = [
  {
    id: 1,
    titleKey: "milestones.items.data1Title",
    descKey: "milestones.items.data1Desc",
    tasks_descKey: "milestones.items.data1Tags",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    titleKey: "milestones.items.data2Title",
    descKey: "milestones.items.data2Desc",
    tasks_descKey: "milestones.items.data2Tags",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    titleKey: "milestones.items.data3Title",
    descKey: "milestones.items.data3Desc",
    tasks_descKey: "milestones.items.data3Tags",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    titleKey: "milestones.items.data4Title",
    descKey: "milestones.items.data4Desc",
    tasks_descKey: "milestones.items.data4Tags",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
  },
  {
    id: 5,
    titleKey: "milestones.items.data5Title",
    descKey: "milestones.items.data5Desc",
    tasks_descKey: "milestones.items.data5Tags",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
  },
  {
    id: 6,
    titleKey: "milestones.items.data6Title",
    descKey: "milestones.items.data6Desc",
    tasks_descKey: "milestones.items.data6Tags",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
  },
];

/* =========================
   SOCIAL MEDIA
========================= */

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/manarzmerli",
  },
  {
    id: 2,
    img: "/github.svg",
    link: "https://github.com/",
  },
];
