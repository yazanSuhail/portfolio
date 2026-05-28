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

export const PROJECT_COMPANIES = [
  { id: "uol", label: "UOL" },
  { id: "ibm", label: "IBM" },
  { id: "freelance", label: "Freelance" },
];

export const COMPANY_PROJECTS = {
  uol: [
    {
      id: "uol-host",
      folderName: "Uol Host Domains",
      image: panelUolhostGif,
      description:
        "Uol Host Domains and emails manager - Created with single spa micro frontend. You can manage your domains, E-mails, and groups. creating Email boxes and updating logos, emails, and more!",
    },
    {
      id: "uol-drive",
      folderName: "UOLDrive Backup",
      image: UOLDrive,
      description: "UOLDrive E-mails backup manager - Created with Reactjs",
    },
    {
      id: "uol-bol",
      folderName: "BOL Sales Page",
      image: BOL,
      description:
        "https://produtos.uol.com.br/bol - static page - Created with ReactJs",
    },
    {
      id: "uol-mail",
      folderName: "UOL Mail",
      image: uolMail,
      description:
        "E-mail, exactly like Gmail - Created with Angularjs, Ruby on rails. This is the paid version.",
    },
    {
      id: "uol-pv",
      folderName: "Email Welcome Page",
      image: PvUol,
      description:
        "https://email.uol.com.br/bem-vindo - static page - Created with velocity",
    },
  ],
  ibm: [
    {
      id: "ibm-carbon",
      folderName: "Carbon Design System",
      image: Carbon,
      description: "Carbon design system",
    },
    {
      id: "ibm-com",
      folderName: "IBM.com",
      image: ibmCom,
      description: "https://www.ibm.com/br-pt",
    },
    {
      id: "ibm-events",
      folderName: "IBM Events",
      image: events,
      description: "https://www.ibm.com/events",
    },
    {
      id: "ibm-speed",
      folderName: "IBM Partner Plus",
      image: ibmSpeed,
      description: "https://www.ibm.com/br-pt/partnerplus",
    },
  ],
  freelance: [
    {
      id: "freelance-starwood",
      folderName: "Starwood Shop",
      image: starwood,
      description:
        "https://starwood-treppenshop.de/ - Created with Integrate Adobe Commerce - Magento",
    },
    {
      id: "freelance-wordpress",
      folderName: "WordPress Site",
      image: wordpress,
      description: "Created with Wordpress",
    },
  ],
};

export const getProjectFileName = (project) => `${project.folderName}.gif`;

export const getCompanyLabel = (companyId) =>
  PROJECT_COMPANIES.find((c) => c.id === companyId)?.label ?? companyId;

export const getProject = (companyId, projectId) =>
  COMPANY_PROJECTS[companyId]?.find((p) => p.id === projectId);

export const getProjectsForCompany = (companyId) =>
  COMPANY_PROJECTS[companyId] ?? [];
