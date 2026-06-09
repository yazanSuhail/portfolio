import { useRef } from "react";
import { computer, folder, song, music, closeIcon, pdfIcon } from "../../assets";
import Draggable from "react-draggable";
import DraggableDesktopIcon from "./DraggableDesktopIcon";
import {
  IconsContainer,
  Icon,
  AudioPlayer,
  MobileIconsGrid,
  MobileIconButton,
} from "./styles";
import { DESKTOP_ICON_META } from "../../Mocks/DesktopContextMenuMock";
import { useIsMobile } from "../../hooks/useIsMobile";
import { MOBILE_TASKBAR_HEIGHT } from "../../constants/breakpoints";

function DesktopIcons({
  openModal,
  onOpenResume,
  setType,
  selectedIcon,
  setSelectedIcon,
  showMusicPlayer = false,
  setShowMusicPlayer,
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
  const audioRef = useRef(null);
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
      setShowMusicPlayer?.(true);
      audioRef.current?.play();
    }
  };

  const handleOpen = (iconId) => {
    setType(iconId);
    if (iconId === "myMusic") {
      setShowMusicPlayer?.(true);
      audioRef.current?.play();
      return;
    }
    if (iconId === "myResume") {
      onOpenResume?.();
      return;
    }
    openModal(iconId);
  };

  const musicPlayer = showMusicPlayer && (
    <AudioPlayer $isMobile={isMobile}>
      This will be windows xp player
      <div onClick={() => setShowMusicPlayer(false)}>
        <img src={closeIcon} alt="" />
      </div>
      <audio ref={audioRef} controls>
        <source src={song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </AudioPlayer>
  );

  if (!showDesktopIcons) {
    return isMobile ? musicPlayer : <Draggable>{musicPlayer}</Draggable>;
  }

  if (isMobile) {
    return (
      <>
        <MobileIconsGrid $taskbarHeight={MOBILE_TASKBAR_HEIGHT}>
          {iconOrder.map((iconId) => {
            const meta = DESKTOP_ICON_META[iconId];
            const iconPx = getIconPx(iconId);

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
        {musicPlayer}
      </>
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

      {showMusicPlayer && <Draggable>{musicPlayer}</Draggable>}
    </IconsContainer>
  );
}

export default DesktopIcons;
