import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { closeIcon, max, minimize, song, wf60 } from "../../assets";
import {
  WMP_NAV_ITEMS,
  WMP_PLAYLIST,
  WMP_TRACK,
} from "../../Mocks/wmpTrackData";
import { useTaskbarWindows } from "../../contexts/taskbar-windows";
import { Icons, WindowControls } from "../Modals/styles";
import ResizableDraggableWindow from "../ResizableWindow/ResizableDraggableWindow";
import BatteryVisualization from "./BatteryVisualization";
import {
  HiddenAudio,
  WmpAlbumArt,
  WmpBody,
  WmpControlBtn,
  WmpControlRow,
  WmpControls,
  WmpMain,
  WmpMenuBar,
  WmpNavItem,
  WmpPlaylist,
  WmpPlaylistHeader,
  WmpPortal,
  WmpSeekBar,
  WmpShell,
  WmpSidebar,
  WmpStatusBar,
  WmpTitleBar,
  WmpTrackHeader,
  WmpTrackList,
  WmpVolume,
  WmpVizArea,
  WmpVizBar,
} from "./styles";

const WMP_DEFAULT_SIZE = { width: 900, height: 620 };

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function WindowsMediaPlayer({ windowId, onClose, onMinimize, onFocus }) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(WMP_TRACK.duration);
  const [volume, setVolume] = useState(0.75);
  const [activeNav, setActiveNav] = useState("Now Playing");
  const audioRef = useRef(null);
  const { getWindowZIndex } = useTaskbarWindows();

  const zIndex = getWindowZIndex(windowId);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, pause, play]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  useEffect(() => {
    play();
  }, [play]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => {
      if (Number.isFinite(audio.duration)) setDuration(audio.duration);
    };
    const onEnded = () => setIsPlaying(false);

    audio.volume = volume;
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, [volume]);

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width)
    );
    audio.currentTime = ratio * duration;
    setCurrentTime(audio.currentTime);
  };

  const handleVolume = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width)
    );
    setVolume(ratio);
    if (audioRef.current) audioRef.current.volume = ratio;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return createPortal(
    <WmpPortal
      style={{ zIndex }}
      onMouseDownCapture={(e) => {
        e.stopPropagation();
        onFocus?.();
      }}
    >
      <ResizableDraggableWindow
        isMaximized={isMaximized}
        onToggleMaximize={() => setIsMaximized((prev) => !prev)}
        defaultSize={WMP_DEFAULT_SIZE}
        defaultPosition={{ x: 72, y: 28 }}
        minWidth={640}
        minHeight={480}
      >
        {({ toggleMaximize }) => (
          <WmpShell $maximized={isMaximized}>
            <WmpTitleBar className="modal-drag-handle">
              <img className="title-icon" src={wf60} alt="" />
              <span className="title-text">Windows Media Player</span>
              <WindowControls>
                <Icons
                  src={minimize}
                  alt="Minimize"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMinimize?.();
                  }}
                />
                <Icons
                  src={max}
                  alt="Maximize"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMaximize();
                  }}
                />
                <Icons
                  src={closeIcon}
                  alt="Close"
                  onClick={(e) => {
                    e.stopPropagation();
                    stop();
                    onClose?.();
                  }}
                />
              </WindowControls>
            </WmpTitleBar>

            <WmpMenuBar>
              {["File", "View", "Play", "Tools", "Help"].map((item) => (
                <button key={item} type="button">
                  {item}
                </button>
              ))}
            </WmpMenuBar>

            <WmpBody>
              <WmpSidebar>
                {WMP_NAV_ITEMS.map((item) => (
                  <WmpNavItem
                    key={item}
                    type="button"
                    $active={activeNav === item}
                    onClick={() => setActiveNav(item)}
                  >
                    {item}
                  </WmpNavItem>
                ))}
              </WmpSidebar>

              <WmpMain>
                <WmpTrackHeader>
                  <div className="composer">{WMP_TRACK.composer}</div>
                  <div className="title">&quot;{WMP_TRACK.title}&quot;</div>
                </WmpTrackHeader>

                <WmpVizArea>
                  <BatteryVisualization
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                  />
                  <WmpVizBar>
                    <span className="viz-btns">⏮ ◼</span>
                    <span className="viz-name">{WMP_TRACK.visualization}</span>
                    <span className="viz-btns">⚙ ⛶</span>
                  </WmpVizBar>
                </WmpVizArea>

                <WmpStatusBar>
                  <div className="album">
                    <span>{isPlaying ? "▶" : "⏸"}</span>
                    <span>Album: {WMP_TRACK.album}</span>
                  </div>
                  <div className="time">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </WmpStatusBar>
              </WmpMain>

              <WmpPlaylist>
                <WmpPlaylistHeader>Now Playing ▾</WmpPlaylistHeader>
                <WmpAlbumArt>
                  <a href="#album">Find Album Info</a>
                  <div className="art-placeholder">♪</div>
                  <div className="album-name">{WMP_TRACK.album}</div>
                </WmpAlbumArt>
                <WmpTrackList>
                  {WMP_PLAYLIST.map((track) => (
                    <li
                      key={track.id}
                      className={track.active ? "active" : undefined}
                    >
                      <span>{track.title}</span>
                      <span>{track.duration}</span>
                    </li>
                  ))}
                </WmpTrackList>
              </WmpPlaylist>
            </WmpBody>

            <WmpControls>
              <WmpSeekBar onClick={handleSeek} role="presentation">
                <div className="fill" style={{ width: `${progress}%` }} />
                <div className="thumb" style={{ left: `${progress}%` }} />
              </WmpSeekBar>

              <WmpControlRow>
                <WmpControlBtn
                  type="button"
                  $large
                  $primary
                  onClick={togglePlay}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? "❚❚" : "▶"}
                </WmpControlBtn>
                <WmpControlBtn type="button" onClick={stop} title="Stop">
                  ■
                </WmpControlBtn>
                <WmpControlBtn type="button" disabled title="Previous">
                  ⏮
                </WmpControlBtn>
                <WmpControlBtn type="button" disabled title="Next">
                  ⏭
                </WmpControlBtn>

                <WmpVolume>
                  <span title="Mute">🔊</span>
                  <div
                    className="vol-track"
                    onClick={handleVolume}
                    role="presentation"
                  >
                    <div
                      className="vol-fill"
                      style={{ width: `${volume * 100}%` }}
                    />
                    <div
                      className="vol-thumb"
                      style={{ left: `${volume * 100}%` }}
                    />
                  </div>
                </WmpVolume>
              </WmpControlRow>
            </WmpControls>

            <HiddenAudio ref={audioRef} src={song} preload="auto" />
          </WmpShell>
        )}
      </ResizableDraggableWindow>
    </WmpPortal>,
    document.body
  );
}

export default WindowsMediaPlayer;
