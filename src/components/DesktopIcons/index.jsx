import { useEffect, useRef, useState } from "react";
import { computer, folder, song, music, closeIcon } from "../../assets"; // Make sure song is correctly imported
import Draggable from "react-draggable";
import { IconsContainer, Icon, AudioPlayer } from "./styles";

// eslint-disable-next-line react/prop-types
function DesktopIcons({ openModal, setType, selectedIcon, setSelectedIcon }) {
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const iconRef3 = useRef(null);
  const audioRef = useRef(null); // Ref for the <audio> tag itself
  const [shouldShowMusicPlayer, setShouldShowMusicPlayer] = useState(false);

  const handleClick = (type) => {
    event.stopPropagation();
    setSelectedIcon(type);
    setType(type);

    if (type === "myMusic") {
      setShouldShowMusicPlayer(true); // Show the music player
      if (audioRef.current) {
        audioRef.current.play(); // Play the music directly
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
          <span onClick={()=>setShouldShowMusicPlayer(false)}> <img src={closeIcon} alt="" /> </span>
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
