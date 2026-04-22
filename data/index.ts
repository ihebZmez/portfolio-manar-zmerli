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
    titleKey: "services.items.DataCleaning.title",
    descriptionKey: "services.items.DataCleaning.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.DataCleaning.metaDescription",
  },
  {
    id: 2,
    titleKey: "services.items.ExploratoryDataAnalysis.title",
    descriptionKey: "services.items.ExploratoryDataAnalysis.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey:
      "services.items.ExploratoryDataAnalysis.metaDescription",
  },
  {
    id: 3,
    titleKey: "services.items.DataVisualization.title",
    descriptionKey: "services.items.DataVisualization.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.DataVisualization.metaDescription",
  },
  {
    id: 4,
    titleKey: "services.items.StatisticalModeling.title",
    descriptionKey: "services.items.StatisticalModeling.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.StatisticalModeling.metaDescription",
  },
  {
    id: 5,
    titleKey: "services.items.BusinessIntelligence.title",
    descriptionKey: "services.items.BusinessIntelligence.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.BusinessIntelligence.metaDescription",
  },
  {
    id: 6,
    titleKey: "services.items.AutomatedReporting.title",
    descriptionKey: "services.items.AutomatedReporting.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.AutomatedReporting.metaDescription",
  },
  {
    id: 7,
    titleKey: "services.items.DataInsightsConsulting.title",
    descriptionKey: "services.items.DataInsightsConsulting.description",
    className: "",
    titleClassName: "text-center",
    headingLevel: "h1" as const,
    metaDescriptionKey: "services.items.DataInsightsConsulting.metaDescription",
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
    img: "/project_display/Sales-Performance-Dashboard.png",
    iconLists: [
      "/Tech/Power-BI.svg",
      "/Tech/SQL.svg",
      "/Tech/Excel.svg",
      "/Tech/Pie-Chart.svg",
    ],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },

  {
    id: 2,
    titleKey: "activities.items.customer_segmentation_title",
    desKey: "activities.items.customer_segmentation_description",
    img: "/project_display/Customer-Segmentation-Analysis.png",
    iconLists: [
      "/Tech/Python.svg",
      "/Tech/Pandas.svg",
      "/Tech/NumPy.svg",
      "/Tech/Seaborn.svg",
      "/Tech/Statistics.svg",
    ],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },

  {
    id: 3,
    titleKey: "activities.items.financial_analysis_title",
    desKey: "activities.items.financial_analysis_description",
    img: "/project_display/Financial-Data-Analysis.png",
    iconLists: [
      "/Tech/Excel.svg",
      "/Tech/Tableau.svg",
      "/Tech/SQL-Database-Generic.svg",
      "/Tech/Statistics.svg",
    ],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },

  {
    id: 4,
    titleKey: "activities.items.marketing_analytics_title",
    desKey: "activities.items.marketing_analytics_description",
    img: "/project_display/Marketing-Analytics-Campaign-Insights.png",
    iconLists: [
      "/Tech/Python.svg",
      "/Tech/Matplotlib.svg",
      "/Tech/Seaborn.svg",
      "/Tech/Jupyter.svg",
    ],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },

  {
    id: 5,
    titleKey: "activities.items.hr_analytics_title",
    desKey: "activities.items.hr_analytics_description",
    img: "/project_display/HR-Analytics-Dashboard.png",
    iconLists: [
      "/Tech/PostgreSQL.svg",
      "/Tech/Power-BI.svg",
      "/Tech/Clean-Database.svg",
      "/Tech/Data-Warehouse.svg",
    ],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },

  {
    id: 6,
    titleKey: "activities.items.predictive_modeling_title",
    desKey: "activities.items.predictive_modeling_description",
    img: "/project_display/Predictive-Modeling-Forecasting.png",
    iconLists: [
      "/Tech/Python.svg",
      "/Tech/R.svg",
      "/Tech/IBM-SPSS-Statistics.svg",
      "/Tech/SAS-svgrepo.svg",
      "/Tech/Apache-Spark.svg",
    ],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },

  {
    id: 7,
    titleKey: "activities.items.data_engineering_title",
    desKey: "activities.items.data_engineering_description",
    img: "/project_display/Data-Engineering-Pipeline.png",
    iconLists: [
      "/Tech/Apache-Airflow.svg",
      "/Tech/DBT.svg",
      "/Tech/Data-Warehouse.svg",
      "/Tech/Docker.svg",
      "/Tech/AWS.svg",
    ],
    linkNameKey: "activities.cta",
    linkProject: "#",
  },

  {
    id: 8,
    titleKey: "activities.items.database_management_title",
    desKey: "activities.items.database_management_description",
    img: "/project_display/Database-Management-Data-Architecture.png",
    iconLists: [
      "/Tech/Mysql.svg",
      "/Tech/Mongodb.svg",
      "/Tech/PostgreSQL.svg",
      "/Tech/Git.svg",
      "/Tech/GitHub.svg",
    ],
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
  {
    quoteKey: "testimonials.items.t3Quote",
    nameKey: "testimonials.items.t3Name",
    titleKey: "testimonials.items.t3Role",
    image_profil: "/profile.svg",
  },
  {
    quoteKey: "testimonials.items.t3Quote",
    nameKey: "testimonials.items.t3Name",
    titleKey: "testimonials.items.t3Role",
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
   CORE ANALYTICS SKILLS
========================= */

export const programmer_skills = [
  {
    id: 1,
    nameKey: "expertise.items.analytics.dataCleaning",
    name: "Data Cleaning & Preparation",
    designation: "",
    image: "/Tech/Clean-Database.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.analytics.eda",
    name: "Exploratory Data Analysis",
    designation: "",
    image: "/Tech/Pie-Chart.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.visualization.matplotlib",
    name: "Data Visualization",
    designation: "",
    image: "/Tech/Matplotlib.svg",
  },
  {
    id: 4,
    nameKey: "expertise.items.bi.powerbi",
    name: "Reporting & Dashboards",
    designation: "",
    image: "/Tech/Power-BI.svg",
  },
];

/* =========================
   ANALYTICS TOOLS & LANGUAGES
========================= */

export const framework_skills = [
  {
    id: 1,
    nameKey: "expertise.items.engineering.python",
    name: "Python",
    designation: "",
    image: "/Tech/Python.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.engineering.sql",
    name: "SQL",
    designation: "",
    image: "/Tech/SQL.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.engineering.pandas",
    name: "Pandas",
    designation: "",
    image: "/Tech/Pandas.svg",
  },
  {
    id: 4,
    nameKey: "expertise.items.engineering.numpy",
    name: "NumPy",
    designation: "",
    image: "/Tech/NumPy.svg",
  },
];

/* =========================
   DATA SCIENCE / MODELING
========================= */

export const database_skills = [
  {
    id: 1,
    nameKey: "expertise.items.statistics.statistics",
    name: "Statistical Analysis",
    designation: "",
    image: "/Tech/Statistics.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.datascience.machineLearning",
    name: "Machine Learning",
    designation: "",
    image: "/Tech/Seaborn.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.statistics.r",
    name: "R",
    designation: "",
    image: "/Tech/R.svg",
  },
  {
    id: 4,
    nameKey: "expertise.items.statistics.spss",
    name: "IBM SPSS",
    designation: "",
    image: "/Tech/IBM-SPSS-Statistics.svg",
  },
];

/* =========================
   DATA ENGINEERING / BI TOOLS
========================= */

export const tools_on_skills = [
  {
    id: 1,
    nameKey: "expertise.items.bi.tableau",
    name: "Tableau",
    designation: "",
    image: "/Tech/Tableau.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.bi.excel",
    name: "Excel",
    designation: "",
    image: "/Tech/Excel.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.engineering.jupyter",
    name: "Jupyter Notebook",
    designation: "",
    image: "/Tech/Jupyter.svg",
  },
];

/* =========================
   DATA PLATFORM / MODERN STACK
========================= */

export const know_some_skills = [
  {
    id: 1,
    nameKey: "expertise.items.engineering.airflow",
    name: "Apache Airflow",
    designation: "",
    image: "/Tech/Apache-Airflow.svg",
  },
  {
    id: 2,
    nameKey: "expertise.items.engineering.spark",
    name: "Apache Spark",
    designation: "",
    image: "/Tech/Apache-Spark.svg",
  },
  {
    id: 3,
    nameKey: "expertise.items.engineering.dbt",
    name: "dbt",
    designation: "",
    image: "/Tech/DBT.svg",
  },
  {
    id: 4,
    nameKey: "expertise.items.engineering.aws",
    name: "AWS",
    designation: "",
    image: "/Tech/AWS.svg",
  },
  {
    id: 5,
    nameKey: "expertise.items.engineering.docker",
    name: "Docker",
    designation: "",
    image: "/Tech/Docker.svg",
  },
  {
    id: 6,
    nameKey: "expertise.items.engineering.git",
    name: "Git",
    designation: "",
    image: "/Tech/Git.svg",
  },
  {
    id: 7,
    nameKey: "expertise.items.engineering.github",
    name: "GitHub",
    designation: "",
    image: "/Tech/GitHub.svg",
  },
];

export const companies = [
  {
    id: 1,
    nameKey: "services.items.commerce.title",
    designation: "",
    image: "/companies_display/adp.png",
    img: "/companies_display/adp.png",
    nameImg: "/companies_display/adpName.svg",
  },
  {
    id: 2,
    nameKey: "services.items.services.title",
    designation: "",
    image: "/companies_display/Club_Nautique.png",
    img: "/companies_display/Club_Nautique.png",
    nameImg: "/companies_display/Club_NautiqueName.svg",
  },
  {
    id: 3,
    nameKey: "services.items.hospitality.title",
    designation: "",
    image: "/companies_display/ISEC.png",
    img: "/companies_display/ISEC.png",
    nameImg: "/companies_display/ISECName.svg",
  },
  {
    id: 4,
    nameKey: "services.items.realEstate.title",
    designation: "",
    image: "/companies_display/Psychology.png",
    img: "/companies_display/Psychology.png",
    nameImg: "/companies_display/PsychologyName.svg",
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
