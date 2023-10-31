import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import {
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalDropDownMenu,
  DropBtn,
  DropdownFileContent,
  DropdownEditContent,
  DropdownViewContent,
  DropdownFavoritesContent,
  DropdownToolsContent,
  DropdownHelpContent,
} from "./styles";

import { windowsLogo, computer } from "../../assets";

const WindowsXPModal = ({ title, content }) => {
  const modalRef = React.createRef();
  const [openMenu, setOpenMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const toggleDropdown = (menuItem) => {
    setOpenMenu((prevMenu) => (prevMenu === menuItem ? null : menuItem));
  };

  return (
    <>
      {" "}
      {isVisible && (
        <Draggable nodeRef={modalRef}>
          <ModalContainer onMouseLeave={() => setOpenMenu(null)} ref={modalRef}>
            <ModalTitle>
              <div>
                <img src={computer} alt="computer" />
              </div>
              <div>{title}</div>
            </ModalTitle>
            <ModalDropDownMenu>
              <div>
                <DropBtn onClick={() => toggleDropdown("File")}>File</DropBtn>
                <DropBtn onClick={() => toggleDropdown("Edit")}>Edit</DropBtn>
                <DropBtn onClick={() => toggleDropdown("View")}>View</DropBtn>
                <DropBtn onClick={() => toggleDropdown("Favorites")}>
                  Favorites
                </DropBtn>
                <DropBtn onClick={() => toggleDropdown("Tools")}>Tools</DropBtn>
                <DropBtn onClick={() => toggleDropdown("Help")}>Help</DropBtn>
              </div>

              <div>
                <img src={windowsLogo} alt="windows Logo" width="50rem" />
              </div>
            </ModalDropDownMenu>

            <div>
              {openMenu === "File" && (
                <DropdownFileContent>
                  <span>Create shortcut</span>
                  <span>Delete file</span>
                  <span>Rename file</span>
                  <span>Properties</span>
                  <div>Close</div>
                </DropdownFileContent>
              )}
            </div>

            <div>
              {openMenu === "Edit" && (
                <DropdownEditContent>
                  <span>Undo</span>
                  <span>Cut</span>
                  <span>Copy</span>
                  <span>Paste</span>
                  <span>Paste Shortcut</span>
                  <div>Copy To Folder...</div>
                  <div>Move To Folder...</div>
                  <div>Select All</div>
                  <div>Invert Selection</div>
                </DropdownEditContent>
              )}
            </div>

            <div>
              {openMenu === "View" && (
                <DropdownViewContent>
                  <span>ToolBars</span>
                  <span>Status Bar</span>
                  <span>Explorer Bar</span>
                  <div>Thumbnails</div>
                  <span>Titles</span>
                  <div>Icons</div>
                  <div>List</div>
                  <div>Details</div>
                  <div>Arrange Icons By</div>
                  <div>Choose Details</div>
                  <div>Go to</div>
                  <div>Refresh</div>
                </DropdownViewContent>
              )}
            </div>

            <div>
              {openMenu === "Favorites" && (
                <DropdownFavoritesContent>
                  <span>Add to Favorites...</span>
                  <span>Organize Favorites...</span>
                  <span>Explorer Bar</span>
                  <div>Links</div>
                  <span>MSN.com</span>
                  <div>Radio Station Guide</div>
                </DropdownFavoritesContent>
              )}
            </div>
            <div>
              {openMenu === "Tools" && (
                <DropdownToolsContent>
                  <span>Map Network Drive...</span>
                  <span>Synchronize...</span>
                  <div>Folder Options...</div>
                </DropdownToolsContent>
              )}
            </div>

            <div>
              {openMenu === "Help" && (
                <DropdownHelpContent>
                  <span>Help and Support Center</span>
                  <div>Is this copy of Windows Legal?</div>
                  <div>About Windows</div>
                </DropdownHelpContent>
              )}
            </div>

            <ModalContent>{content}</ModalContent>
          </ModalContainer>
        </Draggable>
      )}
    </>
  );
};

export default WindowsXPModal;
