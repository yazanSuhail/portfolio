import React, { createContext, useContext, useState } from "react";

const ShowPreviewContext = createContext();

export const ShowPreviewContextProvider = ({ children }) => {
  const [showPreview, setShowPreview] = useState(undefined);

  const togglePreview = () => {
    setShowPreview((prevShowPreview) => !prevShowPreview);
  };

  const contextValue = {
    showPreview,
    togglePreview,
  };

  return (
    <ShowPreviewContext.Provider value={contextValue}>
      {children}
    </ShowPreviewContext.Provider>
  );
};

export const useShowPreviewContext = () => {
  return useContext(ShowPreviewContext);
};
