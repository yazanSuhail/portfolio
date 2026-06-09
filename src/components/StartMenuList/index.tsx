import { useEffect, useMemo, useRef, useState } from "react";
import { duck, chess } from "../../assets";
import { useIsMobile } from "../../hooks/useIsMobile";
import {
  ALL_PROGRAMS,
  FOOTER_ACTIONS,
  PINNED_PROGRAMS,
  SYSTEM_PLACES,
  StartMenuActionId,
  StartMenuItem,
} from "../../Mocks/StartMenuMock";
import {
  AllProgramsButton,
  AllProgramsRow,
  FlyoutPanel,
  FooterButton,
  MenuBody,
  MenuFooter,
  MenuItemButton,
  MenuSeparator,
  PlacesColumn,
  ProgramsColumn,
  RunDialog,
  RunDialogActions,
  RunDialogBody,
  RunDialogHeader,
  RunDialogOverlay,
  SearchBox,
  StartMenuPanel,
  UserHeader,
} from "./styles";
import { Go, search } from "../../assets";

export type StartMenuHandlers = {
  onClose: () => void;
  onAction: (action: StartMenuActionId) => void;
};

type StartMenuListProps = {
  account?: string;
  handlers: StartMenuHandlers;
};

function StartMenuList({ account = "Main", handlers }: StartMenuListProps) {
  const isMobile = useIsMobile();
  const panelRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const [showRunDialog, setShowRunDialog] = useState(false);
  const [runCommand, setRunCommand] = useState("");

  const userName = account === "Guest" ? "Guest" : "Yazan";
  const userAvatar = account === "Guest" ? chess : duck;

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        handlers.onClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [handlers]);

  const filterItems = (items: StartMenuItem[]) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.label.toLowerCase().includes(q));
  };

  const filteredPlaces = useMemo(
    () => filterItems(SYSTEM_PLACES),
    [searchQuery],
  );

  const handleItemClick = (item: StartMenuItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      handlers.onClose();
      return;
    }

    if (item.action === "run") {
      setShowRunDialog(true);
      return;
    }

    if (item.action) {
      handlers.onAction(item.action);
      handlers.onClose();
    }
  };

  const handleRunSubmit = () => {
    const cmd = runCommand.trim().toLowerCase();
    if (cmd === "projects" || cmd === "myprojects") {
      handlers.onAction("myProjects");
    } else if (cmd === "computer" || cmd === "mycomputer") {
      handlers.onAction("myComputer");
    } else if (cmd === "music") {
      handlers.onAction("myMusic");
    } else if (cmd.startsWith("http")) {
      window.open(runCommand.trim(), "_blank", "noopener,noreferrer");
    }
    setShowRunDialog(false);
    setRunCommand("");
    handlers.onClose();
  };

  return (
    <>
      <StartMenuPanel ref={panelRef} onMouseDown={(e) => e.stopPropagation()}>
        <UserHeader>
          <img src={userAvatar} alt="" />
          <span>{userName}</span>
        </UserHeader>

        <MenuBody>
          <ProgramsColumn>
            {filterItems(PINNED_PROGRAMS).map((item) => (
              <div key={item.id}>
                {item.separatorBefore && <MenuSeparator />}
                <MenuItemButton
                  type="button"
                  $large
                  onClick={() => handleItemClick(item)}
                >
                  <img src={item.icon} alt="" />
                  <span>{item.label}</span>
                </MenuItemButton>
              </div>
            ))}

            <AllProgramsRow
              onMouseEnter={() => {
                if (!isMobile) setShowAllPrograms(true);
              }}
              onMouseLeave={() => {
                if (!isMobile) setShowAllPrograms(false);
              }}
            >
              <AllProgramsButton
                type="button"
                $large
                onClick={() => {
                  if (isMobile) setShowAllPrograms((prev) => !prev);
                }}
              >
                <img src={Go} alt="" />
                <span>All Programs</span>
                <span className="arrow">
                  {isMobile && showAllPrograms ? "▼" : "▶"}
                </span>
              </AllProgramsButton>
              {showAllPrograms && (
                <FlyoutPanel
                  onMouseEnter={() => {
                    if (!isMobile) setShowAllPrograms(true);
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) setShowAllPrograms(false);
                  }}
                >
                  {ALL_PROGRAMS.map((item) => (
                    <MenuItemButton
                      key={item.id}
                      type="button"
                      onClick={() => handleItemClick(item)}
                    >
                      <img src={item.icon} alt="" />
                      <span>{item.label}</span>
                    </MenuItemButton>
                  ))}
                </FlyoutPanel>
              )}
            </AllProgramsRow>
          </ProgramsColumn>

          <PlacesColumn>
            <SearchBox>
              <img src={search} alt="" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBox>

            {filteredPlaces.map((item) => (
              <div key={item.id}>
                {item.separatorBefore && <MenuSeparator $onBlue />}
                <MenuItemButton
                  type="button"
                  onClick={() => handleItemClick(item)}
                >
                  <img src={item.icon} alt="" />
                  <span>{item.label}</span>
                </MenuItemButton>
              </div>
            ))}
          </PlacesColumn>
        </MenuBody>

        <MenuFooter>
          <FooterButton
            type="button"
            onClick={() => {
              handlers.onAction(FOOTER_ACTIONS.logOff.action);
              handlers.onClose();
            }}
          >
            <img src={FOOTER_ACTIONS.logOff.icon} alt="" />
            {FOOTER_ACTIONS.logOff.label}
          </FooterButton>
          <FooterButton
            type="button"
            onClick={() => {
              handlers.onAction(FOOTER_ACTIONS.turnOff.action);
              handlers.onClose();
            }}
          >
            <img src={FOOTER_ACTIONS.turnOff.icon} alt="" />
            {FOOTER_ACTIONS.turnOff.label}
          </FooterButton>
        </MenuFooter>
      </StartMenuPanel>

      {showRunDialog && (
        <RunDialogOverlay onMouseDown={() => setShowRunDialog(false)}>
          <RunDialog onMouseDown={(e) => e.stopPropagation()}>
            <RunDialogHeader>
              <span>Run</span>
              <button type="button" onClick={() => setShowRunDialog(false)}>
                ×
              </button>
            </RunDialogHeader>
            <RunDialogBody>
              <img src={Go} alt="" />
              <div>
                <label htmlFor="run-cmd">
                  Type the name of a program, folder, document, or Internet
                  resource, and Windows will open it for you.
                </label>
                <input
                  id="run-cmd"
                  value={runCommand}
                  onChange={(e) => setRunCommand(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRunSubmit()}
                  autoFocus
                />
              </div>
            </RunDialogBody>
            <RunDialogActions>
              <button type="button" onClick={handleRunSubmit}>
                OK
              </button>
              <button type="button" onClick={() => setShowRunDialog(false)}>
                Cancel
              </button>
            </RunDialogActions>
          </RunDialog>
        </RunDialogOverlay>
      )}
    </>
  );
}

export { StartMenuList };
