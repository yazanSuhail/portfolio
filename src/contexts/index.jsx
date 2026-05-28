import { ModalProvider } from "../contexts/use-modal";
import { ShowPreviewContextProvider } from "../contexts/useBoolean";
import { TaskbarWindowsProvider } from "../contexts/taskbar-windows";

const AppProvider = ({ children }) => (
  <ModalProvider>
    <TaskbarWindowsProvider>
      <ShowPreviewContextProvider>{children}</ShowPreviewContextProvider>
    </TaskbarWindowsProvider>
  </ModalProvider>
);

export { AppProvider };
