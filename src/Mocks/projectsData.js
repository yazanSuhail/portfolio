import {
  panelUolhostGif,
  UOLDrive,
  BOL,
  uolMail,
  PvUol,
  Carbon,
  ibmCom,
  events,
  ibmSpeed,
  starwood,
  wordpress,
} from "../assets";
import { GETSCALE_PROJECTS } from "./getscaleProjectsData";

export const PROJECT_COMPANIES = [
  { id: "uol", label: "UOL" },
  { id: "ibm", label: "IBM" },
  { id: "getscale", label: "Getscale" },
  { id: "freelance", label: "Freelance" },
];

export const COMPANY_PROJECTS = {
  uol: [
    {
      id: "uol-host",
      folderName: "Uol Host Domains",
      image: panelUolhostGif,
      description:
        "UOL Host Domains and emails manager — Single-SPA micro frontend.",
      pdfDescription: `UOL Host Domains & Email Manager

WHAT IT IS
UOL Host Professional Email lets businesses create email addresses on their own domain (e.g. you@yourcompany.com.br). Plans start at R$ 6,90/month with up to 50 GB per mailbox, antivirus/antispam, IMAP/POP3, webmail, logo customization, calendar, and optional Premium productivity tools (editors, spreadsheets, cloud storage).

WHAT I BUILT
Single-SPA micro-frontend admin panel for UOL Host customers to:
• Manage registered domains and DNS settings
• Create and configure professional mailboxes and email groups
• Customize logos and branding on outgoing email
• Control mailbox sizes, passwords, and account settings

STACK
Single-SPA, JavaScript, micro-frontend architecture

URL
https://uolhost.uol.com.br/e-mail`,
    },
    {
      id: "uol-drive",
      folderName: "UOLDrive Backup",
      image: UOLDrive,
      description: "UOLDrive E-mails backup manager — React.",
      pdfDescription: `UOL Drive — Email Backup Manager

WHAT IT IS
UOL Drive is UOL's cloud storage service (similar to Google Drive / OneDrive). It stores photos, documents, and files; schedules automatic email backup routines; recovers deleted messages; and syncs across desktop and mobile. Integrates with UOL Mail and UOL Host Professional Email plans.

WHAT I BUILT
React application for managing:
• Scheduled email backup and archiving routines
• Cloud storage allocation and file organization
• Recovery flows for accidentally deleted emails
• Admin views for account-level drive management

STACK
React, JavaScript

URL
Part of UOL email ecosystem (UOL Mail / UOL Host)`,
    },
    {
      id: "uol-bol",
      folderName: "BOL Sales Page",
      image: BOL,
      description: "BOL Mail & Drive sales page — React.",
      pdfDescription: `BOL Sales Page

WHAT IT IS
Marketing and subscription page for BOL Mail and BOL Drive. BOL is one of Brazil's oldest email brands (by UOL). Paid plans from ~R$ 13,40/month include 21 GB mailbox, calendar, 24h chat support, Clube UOL discounts, IMAP/POP3/SMTP, ad-free experience, and optional BOL Drive storage (up to 100 GB on Ultra). Free tier offers 200 MB with basic webmail.

WHAT I BUILT
React static sales page featuring:
• Plan comparison (BOL Completo, BOL Ultra, annual vs monthly)
• BOL Drive feature highlights and FAQ section
• Signup and subscription conversion flows
• Responsive layout for mobile and desktop

STACK
React, JavaScript

URL
https://produtos.uol.com.br/bol`,
    },
    {
      id: "uol-mail",
      folderName: "UOL Mail",
      image: uolMail,
      description: "Full webmail client — AngularJS + Ruby on Rails.",
      pdfDescription: `UOL Mail — Full Webmail Client

WHAT IT IS
UOL Mail is a pioneer Brazilian email service. The complete (paid) edition offers a Gmail-class experience: folders, filters, auto-reply, signatures, virtual business cards, external account integration (Gmail, Yahoo, etc. via IMAP), antispam quarantine, calendar, contacts, and mobile apps (iOS/Android). Accessible via webmail, Outlook, and IMAP.

WHAT I BUILT
Frontend for the paid UOL Mail webmail product:
• Inbox, compose, folder management, and search
• External account reading (up to 10 IMAP accounts)
• Message formatting, attachments, and signature editor
• Responsive webmail used by millions of @uol.com.br users

STACK
AngularJS, Ruby on Rails, JavaScript

URL
https://email.uol.com.br`,
    },
    {
      id: "uol-pv",
      folderName: "Email Welcome Page",
      image: PvUol,
      description: "UOL Mail welcome/onboarding page — Velocity.",
      pdfDescription: `UOL Mail Welcome Page

WHAT IT IS
Onboarding landing page for UOL Mail's complete (paid) edition. Introduces upgraded features that make daily email more practical — with the security and reliability expected from a professional email service.

WHAT I BUILT
Server-rendered welcome/onboarding page using Velocity templates:
• Feature highlights for the complete UOL Mail plan
• Conversion path from free/basic to paid edition
• Lightweight static page integrated with UOL Mail domain

STACK
Velocity (server-side templates)

URL
https://email.uol.com.br/bem-vindo`,
    },
  ],
  ibm: [
    {
      id: "ibm-carbon",
      folderName: "Carbon Design System",
      image: Carbon,
      description: "IBM Carbon Design System development.",
      pdfDescription: `Carbon Design System

WHAT IT IS
IBM's open-source design system for products and digital experiences. Built on the IBM Design Language, it includes React, Angular, Vue, Svelte, and Web Components; Figma/Sketch kits; accessibility guidelines; and a global contributor community.

WHAT I BUILT
Frontend development using Carbon components and patterns:
• Reusable UI components following IBM design standards
• Accessible, consistent interfaces across IBM products
• Integration with Carbon React component library

STACK
Carbon Design System, React

URL
https://carbondesignsystem.com`,
    },
    {
      id: "ibm-com",
      folderName: "IBM.com",
      image: ibmCom,
      description: "IBM.com Brazil frontend.",
      pdfDescription: `IBM.com — Brazil (Portuguese)

WHAT IT IS
IBM's regional corporate website covering AI agents, hybrid cloud, data & analytics, security, automation, quantum computing, training, support, and product announcements (IBM Bob, IBM Concert, IBM Sovereign Core, FlashSystem, watsonx).

WHAT I BUILT
Frontend development on the Brazil Portuguese locale:
• Product pages, news, and marketing content
• Responsive layouts using IBM's enterprise web platform
• Carbon Design System components and patterns

STACK
Carbon Design System, enterprise web platform

URL
https://www.ibm.com/br-pt`,
    },
    {
      id: "ibm-events",
      folderName: "IBM Events",
      image: events,
      description: "IBM Events platform frontend.",
      pdfDescription: `IBM Events

WHAT IT IS
IBM's global events hub listing conferences, webinars, and on-demand content. Includes Think on demand, Snowflake Summit, Databricks Data & AI Summit, AWS Summits, NY Tech Week, and filterable event directories by type, country, city, and organizer.

WHAT I BUILT
Frontend for the IBM Events experience:
• Event listing pages with search and filters
• Event detail and registration flows
• Webinar and on-demand replay sections

STACK
Carbon Design System, React

URL
https://www.ibm.com/events`,
    },
    {
      id: "ibm-speed",
      folderName: "IBM Partner Plus",
      image: ibmSpeed,
      description: "IBM Partner Plus portal — Brazil.",
      pdfDescription: `IBM Partner Plus

WHAT IT IS
IBM's unified partner program platform. Three partner types: Build (ISVs using IBM technology), Sell (resellers/distributors), and Service (system integrators). Includes partner benefits, success stories (e.g. watsonx Orchestrate + Planning Analytics), and a searchable partner directory.

WHAT I BUILT
Frontend for the Brazil Partner Plus portal:
• Partner program landing and benefits pages
• Partner stories and solution showcases
• Partner search and directory experience

STACK
Carbon Design System, enterprise web platform

      URL
https://www.ibm.com/br-pt/partnerplus`,
    },
  ],
  getscale: GETSCALE_PROJECTS,
  freelance: [
    {
      id: "freelance-starwood",
      folderName: "Starwood Shop",
      image: starwood,
      description: "Magento e-commerce — starwood-treppenshop.de",
      pdfDescription: `Starwood Treppen Shop

WHAT IT IS
German family-owned e-commerce store (3rd generation, Bechhofen) selling custom wood and steel stairs online. Features multiple stair configurators (wood, steel, space-saving, outdoor), instant fixed pricing, FSC/PEFC sustainable wood, B2B trade accounts (15% discount), custom measurement forms, and optional professional installation across Germany.

WHAT I BUILT
E-commerce storefront on Adobe Commerce (Magento):
• Product catalog and stair configurator integration
• Checkout, pricing, and order management flows
• B2B customer registration and trade pricing
• Performance and responsive design for German market

STACK
Adobe Commerce (Magento), PHP, JavaScript

URL
https://starwood-treppenshop.de/`,
    },
    {
      id: "freelance-wordpress",
      folderName: "WordPress Site",
      image: wordpress,
      description: "Custom WordPress client website.",
      pdfDescription: `WordPress Site

WHAT IT IS
Custom client website built on WordPress — content-driven site with tailored theme and CMS workflow.

WHAT I BUILT
• Custom WordPress theme development
• Content structure and page templates
• Plugin integration and site maintenance
• Responsive layout and cross-browser compatibility

STACK
WordPress, PHP, HTML, CSS, JavaScript`,
    },
  ],
};

export const getProjectFileName = (project) => `${project.folderName}.gif`;

export const getProjectPdfFileName = (project) => `${project.folderName}.pdf`;

export const getProjectPdfTitle = (project) =>
  `Adobe Acrobat Reader - ${getProjectPdfFileName(project)}`;

export const getProjectPdfDescription = (project) =>
  project.pdfDescription ?? project.description ?? "";

export const getCompanyLabel = (companyId) =>
  PROJECT_COMPANIES.find((c) => c.id === companyId)?.label ?? companyId;

export const getProject = (companyId, projectId) =>
  COMPANY_PROJECTS[companyId]?.find((p) => p.id === projectId);

export const getProjectsForCompany = (companyId) =>
  COMPANY_PROJECTS[companyId] ?? [];
