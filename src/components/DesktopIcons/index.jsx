import { useEffect, useRef, useState } from "react";
import { computer, folder, song, music, closeIcon } from "../../assets"; // Make sure song is correctly imported
import Draggable from "react-draggable";
import { IconsContainer, Icon, AudioPlayer } from "./styles";

function DesktopIcons({
  openModal,
  setType,
  selectedIcon,
  setSelectedIcon,
  showMusicPlayer = false,
  setShowMusicPlayer,
}) {
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const iconRef3 = useRef(null);
  const audioRef = useRef(null);
  const [localMusicPlayer, setLocalMusicPlayer] = useState(false);

  const shouldShowMusicPlayer = setShowMusicPlayer
    ? showMusicPlayer
    : localMusicPlayer;
  const setMusicPlayerVisible = setShowMusicPlayer ?? setLocalMusicPlayer;

  const handleClick = (type) => {
    event.stopPropagation();
    setSelectedIcon(type);
    setType(type);

    if (type === "myMusic") {
      setMusicPlayerVisible(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (selectedIcon) {
      const newSelectedIcons = { myComputer: false, myProjects: false, myMusic: false };
      newSelectedIcons[selectedIcon] = true;
    }
  }, [selectedIcon]);

  return (
    <IconsContainer>
      <Draggable nodeRef={iconRef1}>
        <Icon
          ref={iconRef1}
          onDoubleClick={() => openModal()}
          isselected={`${selectedIcon === "myComputer"}`}
          onClick={() => handleClick("myComputer")}
        >
          <img src={computer} alt="My Computer" />
          <span>My Computer</span>
        </Icon>
      </Draggable>

      <Draggable nodeRef={iconRef2}>
        <Icon
          ref={iconRef2}
          onDoubleClick={() => openModal()}
          isselected={`${selectedIcon === "myProjects"}`}
          onClick={() => handleClick("myProjects")}
        >
          <img src={folder} alt="My Projects" />
          <span>My Projects</span>
        </Icon>
      </Draggable>

      <Draggable nodeRef={iconRef3}>
        <Icon
          ref={iconRef3}
          isselected={`${selectedIcon === "myMusic"}`}
          onClick={() => handleClick("myMusic")}
        >
          <img className="image" src={music} alt="My Music" />
          <span className="song">My Favorite Song</span>
        </Icon>
      </Draggable>

      {shouldShowMusicPlayer && 
        <Draggable>
          <AudioPlayer>
            This will be windows xp player
          <div onClick={() => setMusicPlayerVisible(false)}>
            <img src={closeIcon} alt="" />
          </div>
            <audio ref={audioRef} controls>
              <source src={song} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </AudioPlayer>
        </Draggable>
      }
    </IconsContainer>
  );
}

export default DesktopIcons;
