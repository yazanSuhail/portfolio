import { folder } from "../../assets";
import { useTaskbarWindows } from "../../contexts/taskbar-windows";
import {
  PROJECT_COMPANIES,
  getProjectsForCompany,
  getProject,
  getProjectFileName,
} from "../../Mocks/projectsData";
import { ExplorerGrid, ExplorerIconButton } from "./styles";

function ProjectsExplorer({ projectsPath, setProjectsPath }) {
  const { openGif } = useTaskbarWindows();

  const openCompany = (companyId) => {
    setProjectsPath({ companyId });
  };

  const openProjectFolder = (projectId) => {
    setProjectsPath({
      companyId: projectsPath.companyId,
      projectId,
    });
  };

  const openTextFile = (project) => {
    openGif(project);
  };

  if (!projectsPath) {
    return (
      <ExplorerGrid>
        {PROJECT_COMPANIES.map((company) => (
          <ExplorerIconButton
            key={company.id}
            type="button"
            onClick={() => openCompany(company.id)}
            title={`Open ${company.label}`}
          >
            <img src={folder} alt="" />
            <span>{company.label}</span>
          </ExplorerIconButton>
        ))}
      </ExplorerGrid>
    );
  }

  if (!projectsPath.projectId) {
    const projects = getProjectsForCompany(projectsPath.companyId);

    return (
      <ExplorerGrid>
        {projects.map((project) => (
          <ExplorerIconButton
            key={project.id}
            type="button"
            onClick={() => openProjectFolder(project.id)}
            title={`Open ${project.folderName}`}
          >
            <img src={folder} alt="" />
            <span>{project.folderName}</span>
          </ExplorerIconButton>
        ))}
      </ExplorerGrid>
    );
  }

  const project = getProject(projectsPath.companyId, projectsPath.projectId);

  if (!project) {
    return null;
  }

  return (
    <ExplorerGrid>
      <ExplorerIconButton
        type="button"
        className="gif-preview"
        onClick={() => openTextFile(project)}
        title={`Open ${getProjectFileName(project)}`}
      >
        <img src={project.image} alt="" />
        <span>{getProjectFileName(project)}</span>
      </ExplorerIconButton>
    </ExplorerGrid>
  );
}

export default ProjectsExplorer;
