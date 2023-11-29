import { ReactNode } from "react";
import { ModalProvider } from "../contexts/use-modal";
import { ShowPreviewContextProvider } from "../contexts/useBoolean";

const AppProvider = ({ children }) => (
  <ModalProvider>
    <ShowPreviewContextProvider>{children}</ShowPreviewContextProvider>
  </ModalProvider>
);

export { AppProvider };
