import { createPortal } from "react-dom";
import { closeIcon, computer, folder, music } from "../../assets";
import {
  PropertiesOverlay,
  PropertiesDialog,
  PropertiesHeader,
  TitleBarButtons,
  TitleButton,
  PropertiesClient,
  TabControl,
  TabStrip,
  TabButton,
  TabPanel,
  IconGeneralLayout,
  IconLarge,
  IconFields,
  PropertiesRow,
  PropertiesDivider,
  CheckboxRow,
  PropertiesActions,
} from "./propertiesStyles";

const ICON_ASSETS = {
  myComputer: computer,
  myProjects: folder,
  myMusic: music,
};

function IconPropertiesDialog({ target, onClose }) {
  const iconSrc = ICON_ASSETS[target.target] ?? computer;

  return createPortal(
    <PropertiesOverlay onMouseDown={onClose}>
      <PropertiesDialog onMouseDown={(e) => e.stopPropagation()}>
        <PropertiesHeader>
          <img className="title-icon" src={iconSrc} alt="" />
          <span>{target.name} Properties</span>
          <TitleBarButtons>
            <TitleButton type="button" aria-label="Close" onClick={onClose}>
              <img src={closeIcon} alt="" />
            </TitleButton>
          </TitleBarButtons>
        </PropertiesHeader>
        <PropertiesClient>
          <TabControl>
            <TabStrip>
              <TabButton type="button" $active>
                General
              </TabButton>
              <TabButton type="button" disabled>
                Sharing
              </TabButton>
              <TabButton type="button" disabled>
                Customize
              </TabButton>
            </TabStrip>
            <TabPanel $minHeight="168px">
              <IconGeneralLayout>
                <IconLarge src={iconSrc} alt="" />
                <IconFields>
                  <PropertiesRow>
                    <span />
                    <span style={{ fontWeight: "normal" }}>{target.name}</span>
                  </PropertiesRow>
                  <PropertiesRow>
                    <span>Type of item:</span>
                    <span>{target.type}</span>
                  </PropertiesRow>
                  <PropertiesRow>
                    <span>Location:</span>
                    <span>{target.location}</span>
                  </PropertiesRow>
                  <PropertiesDivider />
                  <CheckboxRow>
                    <input type="checkbox" disabled />
                    Read-only
                  </CheckboxRow>
                  <CheckboxRow>
                    <input type="checkbox" disabled />
                    Hidden
                  </CheckboxRow>
                </IconFields>
              </IconGeneralLayout>
            </TabPanel>
          </TabControl>
          <PropertiesActions>
            <button type="button" onClick={onClose}>
              OK
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" disabled>
              Apply
            </button>
          </PropertiesActions>
        </PropertiesClient>
      </PropertiesDialog>
    </PropertiesOverlay>,
    document.body
  );
}

export default IconPropertiesDialog;
