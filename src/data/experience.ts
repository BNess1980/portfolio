export type StackIcon = "html5" | "css3" | "javascript" | "typescript" | "react" | "angular";

export interface Role {
  company: string;
  title: string;
  period: string;
  location?: string;
  description: string;
  stack: StackIcon[];
}

export function shortPeriod(period: string): string {
  const years = period.match(/\d{4}/g) ?? [];
  const start = years[0] ? `'${years[0].slice(2)}` : period;
  const end = /present/i.test(period) ? "Present" : years[1] ? `'${years[1].slice(2)}` : start;
  return `${start}–${end}`;
}

export function fullPeriod(period: string): string {
  const years = period.match(/\d{4}/g) ?? [];
  const start = years[0] ?? period;
  const end = /present/i.test(period) ? "Present" : years[1] ? years[1].slice(2) : start;
  return `${start}-${end}`;
}

export const experience: Role[] = [
  {
    company: "ClassLink",
    title: "Senior Developer / Team Lead",
    period: "Sept 2022 – Present",
    description:
      "Leads front-end development of React and Angular components for K-12 education software, blending traditional engineering with AI-assisted, agentic workflows. Builds internal Claude Code tooling that automates issue creation, app scaffolding, and test migration, while guiding two module-federation micro-frontend projects and mentoring the wider engineering team.",
    stack: ["angular", "react", "typescript"],
  },
  {
    company: "Santander (formerly Amherst Pierpont)",
    title: "Front-End UI Developer",
    period: "Nov 2020 – Sept 2022",
    description:
      "Built and maintained an internal trading-desk application in React and Angular, powering data tables and charts that track the U.S. bond market. Connected the interface to backend services and APIs to support Sales and Trading teams executing institutional bond transactions.",
    stack: ["angular", "react", "typescript"],
  },
  {
    company: "Genisys Software Ltd.",
    title: "Contract UI Developer (Client: KPMG)",
    period: "Apr 2019 – Jul 2020",
    location: "Montvale, NJ",
    description:
      "Delivered internal tools for KPMG's Global Tax Technology group, enhancing Angular and TypeScript applications with data visualizations built on DevExtreme and Ag-Grid. Contributed reusable firmwide components — sidebars, modals, and smart search inputs — used across multiple product teams.",
    stack: ["angular", "typescript"],
  },
  {
    company: "Edison Properties",
    title: "Front-End Developer",
    period: "Feb 2017 – Mar 2019",
    location: "Newark, NJ",
    description:
      "Developed Angular and TypeScript features for a real-estate, self-storage, and parking company within an ASP.NET environment. Built customer-facing landing pages and review features, plus an Angular/.NET Core tool that automated daily pricing updates for the Edison ParkFast business.",
    stack: ["angular", "typescript"],
  },
  {
    company: "Deloitte Digital",
    title: "Front-End Developer",
    period: "Jun 2015 – Feb 2017",
    location: "New York, NY",
    description:
      "Worked as a front-end consultant building custom portal applications for healthcare, insurance, and finance clients using AngularJS, Angular Material, and Salesforce Lightning. Partnered closely with American Express and Amtrak to integrate Lightning components into their CRM platforms.",
    stack: ["angular", "javascript", "css3"],
  },
  {
    company: "Global Association of Risk Professionals (GARP)",
    title: "Front-End Developer",
    period: "Feb 2014 – Jun 2015",
    location: "Jersey City, NJ",
    description:
      "Started as a contract developer and converted to full-time, building a new corporate site and exam-registrant portal with AngularJS, Bootstrap, and Salesforce. Also led the migration of email marketing assets from Informz to Pardot ahead of the portal's March 2015 launch.",
    stack: ["angular", "javascript", "css3"],
  },
  {
    company: "Fusionapps.com",
    title: "UX/UI Designer",
    period: "Nov 2012 – Feb 2014",
    location: "Secaucus, NJ",
    description:
      "Began as a contract designer and moved into a full-time role crafting wireframes and interactive HTML/JavaScript/jQuery prototypes for intranets and mobile apps. Designed responsive interfaces for healthcare, education, and e-commerce clients using Bootstrap and Foundation.",
    stack: ["html5", "javascript", "css3"],
  },
  {
    company: "Brandshop (formerly SureSource LLC)",
    title: "Web Designer / Front-End Developer",
    period: "Feb 2010 – Aug 2012",
    location: "Shelton, CT",
    description:
      "Designed and coded front-end experiences for e-commerce retail sites on ASP and Java platforms for brands like Coca-Cola, Caterpillar, and Crayola. Produced email marketing campaigns for 30+ retail partners and created Flash ActionScript banners for affiliate advertising.",
    stack: ["html5", "javascript", "css3"],
  },
];
