import { useState } from "react";
import { createPortal } from "react-dom";
import { closeIcon, computer } from "../../assets";
import {
  XP_WALLPAPERS,
  WALLPAPER_POSITIONS,
  getWallpaperUrl,
} from "../../Mocks/xpWallpapers";
import { DESKTOP_ICON_SIZES } from "../../Mocks/desktopIconSizes";
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
  DisplayDesktopLayout,
  MonitorColumn,
  CrtBezel,
  CrtScreen,
  CrtStand,
  ControlsColumn,
  FieldRow,
  FieldLabel,
  XpSelect,
  XpButton,
  ColorRow,
  ColorSwatch,
  WallpaperList,
  WallpaperThumb,
  PlaceholderNote,
  PropertiesActions,
  AppearanceLayout,
  IconSizePreview,
} from "./propertiesStyles";

const DISPLAY_ICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="10" rx="1" fill="#ece9d8" stroke="#fff" stroke-width="0.5"/><rect x="2" y="3" width="12" height="8" fill="#004e98"/><rect x="5" y="12" width="6" height="2" fill="#c0c0c0"/></svg>`
  );

const TABS = [
  { id: "themes", label: "Themes" },
  { id: "desktop", label: "Desktop" },
  { id: "screensaver", label: "Screen Saver" },
  { id: "appearance", label: "Appearance" },
  { id: "settings", label: "Settings" },
];

function DisplayPropertiesDialog({
  wallpaperId: savedWallpaperId,
  position: savedPosition,
  iconSizeId: savedIconSizeId,
  onApply,
  onClose,
}) {
  const [activeTab, setActiveTab] = useState("desktop");
  const [pendingId, setPendingId] = useState(savedWallpaperId);
  const [pendingPosition, setPendingPosition] = useState(savedPosition);
  const [pendingIconSizeId, setPendingIconSizeId] = useState(savedIconSizeId);

  const previewUrl = getWallpaperUrl(
    XP_WALLPAPERS.find((w) => w.id === pendingId) ?? XP_WALLPAPERS[0]
  );

  const pendingIconSize =
    DESKTOP_ICON_SIZES.find((s) => s.id === pendingIconSizeId) ??
    DESKTOP_ICON_SIZES[1];

  const commitSettings = () => {
    onApply({
      wallpaperId: pendingId,
      position: pendingPosition,
      iconSizeId: pendingIconSizeId,
    });
  };

  const commit = () => {
    commitSettings();
    onClose();
  };

  const applyOnly = () => {
    commitSettings();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "desktop":
        return (
          <DisplayDesktopLayout>
            <MonitorColumn>
              <CrtBezel>
                <CrtScreen $url={previewUrl} $position={pendingPosition} />
              </CrtBezel>
              <CrtStand />
            </MonitorColumn>
            <ControlsColumn>
              <FieldRow>
                <FieldLabel>Wallpaper:</FieldLabel>
                <XpSelect
                  value={pendingId}
                  onChange={(e) => setPendingId(e.target.value)}
                >
                  {XP_WALLPAPERS.map((wp) => (
                    <option key={wp.id} value={wp.id}>
                      {wp.name}
                    </option>
                  ))}
                </XpSelect>
              </FieldRow>
              <FieldRow>
                <span />
                <XpButton type="button" disabled>
                  Browse...
                </XpButton>
              </FieldRow>
              <FieldRow>
                <FieldLabel>Position:</FieldLabel>
                <XpSelect
                  value={pendingPosition}
                  onChange={(e) => setPendingPosition(e.target.value)}
                >
                  {WALLPAPER_POSITIONS.map((pos) => (
                    <option key={pos.id} value={pos.id}>
                      {pos.label}
                    </option>
                  ))}
                </XpSelect>
              </FieldRow>
              <ColorRow>
                <FieldLabel>Color:</FieldLabel>
                <ColorSwatch $color="#004e98" />
                <XpButton type="button" disabled>
                  ...
                </XpButton>
              </ColorRow>
            </ControlsColumn>
            <WallpaperList>
              {XP_WALLPAPERS.map((wp) => (
                <WallpaperThumb
                  key={wp.id}
                  type="button"
                  $selected={pendingId === wp.id}
                  onClick={() => setPendingId(wp.id)}
                  onDoubleClick={commit}
                  title={wp.name}
                >
                  <img src={getWallpaperUrl(wp)} alt="" />
                  <span>{wp.name}</span>
                </WallpaperThumb>
              ))}
            </WallpaperList>
          </DisplayDesktopLayout>
        );
      case "appearance":
        return (
          <AppearanceLayout>
            <FieldRow>
              <FieldLabel>Icon size:</FieldLabel>
              <XpSelect
                value={pendingIconSizeId}
                onChange={(e) => setPendingIconSizeId(e.target.value)}
              >
                {DESKTOP_ICON_SIZES.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.label}
                  </option>
                ))}
              </XpSelect>
            </FieldRow>
            <IconSizePreview>
              <img
                src={computer}
                alt=""
                style={{
                  width: pendingIconSize.iconPx,
                  height: pendingIconSize.iconPx,
                }}
              />
              <span style={{ fontSize: pendingIconSize.fontSize }}>
                Sample Desktop Icon
              </span>
            </IconSizePreview>
            <PlaceholderNote>
              Windows and buttons: Windows XP style
              <br />
              Color scheme: Default (blue)
              <br />
              Font size: Normal
            </PlaceholderNote>
          </AppearanceLayout>
        );
      case "themes":
        return (
          <PlaceholderNote>
            Windows XP
            <br />
            <br />
            Visual style: Windows XP style
            <br />
            Color scheme: Default (blue)
          </PlaceholderNote>
        );
      case "screensaver":
        return (
          <PlaceholderNote>
            Screen saver: (None)
            <br />
            <br />
            Wait: 10 minutes
          </PlaceholderNote>
        );
      case "settings":
        return (
          <PlaceholderNote>
            Screen resolution: {window.innerWidth} by{" "}
            {window.innerHeight} pixels
            <br />
            Color quality: Highest (32 bit)
          </PlaceholderNote>
        );
      default:
        return null;
    }
  };

  return createPortal(
    <PropertiesOverlay onMouseDown={onClose}>
      <PropertiesDialog $wide onMouseDown={(e) => e.stopPropagation()}>
        <PropertiesHeader>
          <img className="title-icon" src={DISPLAY_ICON} alt="" />
          <span>Display Properties</span>
          <TitleBarButtons>
            <TitleButton type="button" className="help-btn" aria-label="Help">
              ?
            </TitleButton>
            <TitleButton type="button" aria-label="Close" onClick={onClose}>
              <img src={closeIcon} alt="" />
            </TitleButton>
          </TitleBarButtons>
        </PropertiesHeader>
        <PropertiesClient>
          <TabControl>
            <TabStrip>
              {TABS.map((tab) => (
                <TabButton
                  key={tab.id}
                  type="button"
                  $active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </TabButton>
              ))}
            </TabStrip>
            <TabPanel $minHeight="252px">{renderTabContent()}</TabPanel>
          </TabControl>
          <PropertiesActions>
            <button type="button" onClick={commit}>
              OK
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" onClick={applyOnly}>
              Apply
            </button>
          </PropertiesActions>
        </PropertiesClient>
      </PropertiesDialog>
    </PropertiesOverlay>,
    document.body
  );
}

export default DisplayPropertiesDialog;
