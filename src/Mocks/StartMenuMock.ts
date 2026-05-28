import {
  computer,
  folder,
  music,
  github,
  safari,
  contacts,
  DoJ,
  camera,
  wFjS,
  viewInfo,
  search,
  Go,
  ic2,
  wf60,
  turnoffwindows,
} from "../assets";

export type StartMenuActionId =
  | "internet"
  | "email"
  | "myProjects"
  | "myComputer"
  | "mediaPlayer"
  | "github"
  | "linkedin"
  | "myDocuments"
  | "myPictures"
  | "myMusic"
  | "controlPanel"
  | "help"
  | "search"
  | "run"
  | "logOff"
  | "turnOff";

export type StartMenuItem = {
  id: StartMenuActionId | string;
  label: string;
  icon: string;
  action?: StartMenuActionId;
  href?: string;
  separatorBefore?: boolean;
};

export const PINNED_PROGRAMS: StartMenuItem[] = [
  { id: "internet", label: "Internet", icon: safari, action: "internet" },
  { id: "email", label: "E-mail", icon: contacts, action: "email" },
  {
    id: "myProjects",
    label: "My Projects",
    icon: folder,
    action: "myProjects",
    separatorBefore: true,
  },
  {
    id: "myComputer",
    label: "My Computer",
    icon: computer,
    action: "myComputer",
  },
  {
    id: "mediaPlayer",
    label: "Windows Media Player",
    icon: music,
    action: "mediaPlayer",
  },
];

export const ALL_PROGRAMS: StartMenuItem[] = [
  { id: "github", label: "GitHub", icon: github, action: "github" },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: contacts,
    action: "linkedin",
    href: "https://www.linkedin.com/in/yazan-alzubi-023603204/",
  },
  { id: "accessories-calc", label: "Calculator", icon: ic2 },
  { id: "accessories-notepad", label: "Notepad", icon: Go },
];

export const SYSTEM_PLACES: StartMenuItem[] = [
  {
    id: "myDocuments",
    label: "My Documents",
    icon: DoJ,
    action: "myDocuments",
  },
  {
    id: "myPictures",
    label: "My Pictures",
    icon: camera,
    action: "myPictures",
  },
  { id: "myMusic", label: "My Music", icon: music, action: "myMusic" },
  {
    id: "myComputer-place",
    label: "My Computer",
    icon: computer,
    action: "myComputer",
    separatorBefore: true,
  },
  {
    id: "controlPanel",
    label: "Control Panel",
    icon: wFjS,
    action: "controlPanel",
    separatorBefore: true,
  },
  { id: "printers", label: "Printers and Faxes", icon: wf60 },
  {
    id: "help",
    label: "Help and Support",
    icon: viewInfo,
    action: "help",
    separatorBefore: true,
  },
  { id: "search", label: "Search", icon: search, action: "search" },
  { id: "run", label: "Run...", icon: Go, action: "run" },
];

export const FOOTER_ACTIONS = {
  logOff: { label: "Log Off", icon: turnoffwindows, action: "logOff" as const },
  turnOff: {
    label: "Turn Off Computer",
    icon: turnoffwindows,
    action: "turnOff" as const,
  },
};
