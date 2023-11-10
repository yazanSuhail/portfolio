import { ReactNode } from "react";
import { ModalProvider } from "../contexts/use-modal";
const AppProvider = ({ children }) => <ModalProvider>{children}</ModalProvider>;

export { AppProvider };
