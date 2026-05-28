import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StartMenu from "../../components/MainStartMenu";
import WindowsXPModal from "../../components/Modals";
import { computer, folder } from "../../assets";
import {
  fileMenu,
  editMenu,
  viewMenu,
  toolsMenu,
  helpMenu,
  favorites,
} from "../../Mocks/DesktopMenuMock";
import {
  EXPLORER_WINDOW_ID,
  useTaskbarWindows,
} from "../../contexts/taskbar-windows";
import DesktopIcons from "../../components/DesktopIcons";
import NotepadViewer from "../../components/ProjectsExplorer/NotepadViewer";
import { DesktopContainer } from "./styles";
import Mobile from "../Mobile";

function MainPage() {
  const navigate = useNavigate();
  const menus = [fileMenu, editMenu, viewMenu, toolsMenu, helpMenu, favorites];
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const {
    explorerWindow,
    isExplorerVisible,
    visibleGifWindows,
    openExplorer,
    closeWindow,
    minimizeWindow,
    focusWindow,
  } = useTaskbarWindows();
  const [type, setType] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const explorerType = explorerWindow?.explorerType ?? type;

  useEffect(() => {
    const handleDocumentClick = () => {
      setSelectedIcon(null);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenExplorer = (modalType) => {
    setType(modalType);
    openExplorer(modalType);
  };

  const handleStartMenuAction = useCallback(
    (action) => {
      switch (action) {
        case "myComputer":
        case "controlPanel":
        case "help":
        case "search":
          setType("myComputer");
          openExplorer("myComputer");
          break;
        case "myProjects":
        case "myDocuments":
        case "myPictures":
          setType("myProjects");
          openExplorer("myProjects");
          break;
        case "myMusic":
        case "mediaPlayer":
          setShowMusicPlayer(true);
          break;
        case "internet":
          window.open("https://github.com/yazanSuhail", "_blank", "noopener,noreferrer");
          break;
        case "email":
        case "linkedin":
          window.open(
            "https://www.linkedin.com/in/yazan-alzubi-023603204/",
            "_blank",
            "noopener,noreferrer"
          );
          break;
        case "github":
          window.open("https://github.com/yazanSuhail", "_blank", "noopener,noreferrer");
          break;
        case "logOff":
        case "turnOff":
          navigate("/");
          break;
        default:
          break;
      }
    },
    [navigate, openExplorer]
  );

  return (
    <>
      {screenWidth <= 720 ? (
        <Mobile />
      ) : (
        <DesktopContainer>
          <DesktopIcons
            openModal={() => handleOpenExplorer(type)}
            setType={setType}
            selectedIcon={selectedIcon}
            setSelectedIcon={setSelectedIcon}
            showMusicPlayer={showMusicPlayer}
            setShowMusicPlayer={setShowMusicPlayer}
          />
          {isExplorerVisible && (
            <WindowsXPModal
              windowId={EXPLORER_WINDOW_ID}
              icone={explorerType === "myProjects" ? folder : computer}
              title={
                explorerType === "myProjects" ? "My Projects" : "My Computer"
              }
              menus={menus}
              content={[]}
              isVisible
              closeModal={() => closeWindow(EXPLORER_WINDOW_ID)}
              onMinimize={() => minimizeWindow(EXPLORER_WINDOW_ID)}
              onFocus={() => focusWindow(EXPLORER_WINDOW_ID)}
              type={explorerType}
            />
          )}
          {visibleGifWindows.map((gifWindow) => (
            <NotepadViewer
              key={gifWindow.id}
              windowId={gifWindow.id}
              file={gifWindow.gifProject}
              onClose={() => closeWindow(gifWindow.id)}
              onMinimize={() => minimizeWindow(gifWindow.id)}
              onFocus={() => focusWindow(gifWindow.id)}
            />
          ))}
          <StartMenu onStartMenuAction={handleStartMenuAction} />
        </DesktopContainer>
      )}
    </>
  );
}

export default MainPage;
