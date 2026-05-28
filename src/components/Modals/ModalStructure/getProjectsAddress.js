import { computer, folder } from "../../../assets";
import { getCompanyLabel, getProject } from "../../../Mocks/projectsData";

export function getProjectsWindowTitle(projectsPath) {
  if (!projectsPath) {
    return "My Projects";
  }

  const company = getCompanyLabel(projectsPath.companyId);

  if (!projectsPath.projectId) {
    return company;
  }

  const project = getProject(projectsPath.companyId, projectsPath.projectId);
  return project?.folderName ?? company;
}

export function getProjectsAddress(type, projectsPath) {
  if (type !== "myProjects") {
    return { icon: computer, label: "My Computer" };
  }

  if (!projectsPath) {
    return { icon: folder, label: "My Projects" };
  }

  const company = getCompanyLabel(projectsPath.companyId);
  const project = projectsPath.projectId
    ? getProject(projectsPath.companyId, projectsPath.projectId)
    : null;

  if (project) {
    return {
      icon: folder,
      label: `My Projects\\${company}\\${project.folderName}`,
    };
  }

  return { icon: folder, label: `My Projects\\${company}` };
}
