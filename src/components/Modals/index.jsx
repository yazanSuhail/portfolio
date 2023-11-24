import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import ModalStaticContent from "../Modals/StaticContent";

const WindowsXPModal = ({
  title,
  menus,
  isVisible,
  icone,
  closeModal,
  type,
}) => {
  const modalRef = React.createRef();
  const [isFullWidth, setIsFullWidth] = useState(false);

  return (
    <>
      {isVisible && (
        <>
          {isFullWidth ? (
            <ModalStaticContent
              isFullWidth={isFullWidth}
              setIsFullWidth={setIsFullWidth}
              icone={icone}
              type={type}
              title={title}
              menus={menus}
              content={[]}
              isVisible={isVisible}
              closeModal={closeModal}
            />
          ) : (
            <Draggable nodeRef={modalRef}>
              <div ref={modalRef}>
                <ModalStaticContent
                  isFullWidth={isFullWidth}
                  setIsFullWidth={setIsFullWidth}
                  icone={icone}
                  title={title}
                  type={type}
                  menus={menus}
                  content={[]}
                  isVisible={isVisible}
                  closeModal={closeModal}
                />
              </div>
            </Draggable>
          )}
        </>
      )}
    </>
  );
};

export default WindowsXPModal;
