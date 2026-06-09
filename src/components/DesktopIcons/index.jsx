import { useRef } from "react";
import { computer, folder, music, pdfIcon } from "../../assets";
import DraggableDesktopIcon from "./DraggableDesktopIcon";
import {
  IconsContainer,
  Icon,
  MobileIconsGrid,
  MobileIconButton,
} from "./styles";
import { DESKTOP_ICON_META } from "../../Mocks/DesktopContextMenuMock";
import { useIsMobile } from "../../hooks/useIsMobile";
import { MOBILE_TASKBAR_HEIGHT } from "../../constants/breakpoints";

function DesktopIcons({
  openModal,
  onOpenResume,
  onOpenMusic,
  setType,
  selectedIcon,
  setSelectedIcon,
  showDesktopIcons = true,
  iconPositions,
  setIconPositions,
  iconOrder,
  alignToGrid,
  iconSize,
  onIconContextMenu,
}) {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const assets = {
    myComputer: computer,
    myProjects: folder,
    myResume: pdfIcon,
    myMusic: music,
  };
  const { iconPx, fontSize, labelMaxWidth, layout } = iconSize;
  const getIconPx = (iconId) =>
    iconId === "myMusic" ? Math.round(iconPx * 1.69) : iconPx;

  const handlePositionChange = (iconId, position) => {
    setIconPositions((prev) => ({
      ...prev,
      [iconId]: position,
    }));
  };

  const handleSelect = (iconId) => {
    setSelectedIcon(iconId);
    setType(iconId);
    if (iconId === "myMusic") {
      onOpenMusic?.();
    }
  };

  const handleOpen = (iconId) => {
    setType(iconId);
    if (iconId === "myMusic") {
      onOpenMusic?.();
      return;
    }
    if (iconId === "myResume") {
      onOpenResume?.();
      return;
    }
    openModal(iconId);
  };

  if (!showDesktopIcons) {
    return null;
  }

  if (isMobile) {
    return (
      <MobileIconsGrid $taskbarHeight={MOBILE_TASKBAR_HEIGHT}>
        {iconOrder.map((iconId) => {
          const meta = DESKTOP_ICON_META[iconId];
          const isMusic = iconId === "myMusic";
          const mobileIconPx = isMusic ? 56 : 48;

          return (
            <MobileIconButton
              key={iconId}
              type="button"
              $large={isMusic}
              $selected={selectedIcon === iconId}
              onClick={() => handleOpen(iconId)}
            >
              <img
                src={assets[iconId]}
                alt={meta.name}
                width={mobileIconPx}
                height={mobileIconPx}
                draggable={false}
              />
              <span>{meta.name}</span>
            </MobileIconButton>
          );
        })}
      </MobileIconsGrid>
    );
  }

  return (
    <IconsContainer ref={containerRef}>
      {iconOrder.map((iconId) => {
        const meta = DESKTOP_ICON_META[iconId];
        const position = iconPositions[iconId];

        return (
          <DraggableDesktopIcon
            key={iconId}
            iconId={iconId}
            position={position}
            alignToGrid={alignToGrid}
            containerRef={containerRef}
            iconLayout={layout}
            slotWidth={layout.slotWidth}
            slotHeight={layout.slotHeight}
            onPositionChange={handlePositionChange}
            isSelected={selectedIcon === iconId}
            onSelect={handleSelect}
            onOpen={handleOpen}
            onContextMenu={(e) => onIconContextMenu?.(iconId, e)}
          >
            <Icon
              className="desktop-icon"
              $iconPx={getIconPx(iconId)}
              $fontSize={fontSize}
              $labelMaxWidth={labelMaxWidth}
              $isMusic={iconId === "myMusic"}
              $labelPull={
                iconId === "myMusic"
                  ? Math.round(iconPx * 0.32)
                  : 0
              }
            >
              <img src={assets[iconId]} alt={meta.name} draggable={false} />
              <span>{meta.name}</span>
            </Icon>
          </DraggableDesktopIcon>
        );
      })}
    </IconsContainer>
  );
}

export default DesktopIcons;
