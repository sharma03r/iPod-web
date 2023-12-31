import { Component } from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import "../css/Case.css";

class Case extends Component {
  render() {
    const {
      songIndex,
      activeItems,
      menuItems,
      musicItems,
      songNameItems,
      currentMenu,
      playing,
      theme,
      audio,
      songUrl,
      songImageUrl,
      wheelColor,
      wallpaper,
      wallpaperItems,
      noty,
      notifyText,
      changeMenuBackward,
      changeMenuForward,
      updateActiveMenu,
      togglePlayPause,
      seekForwardSong,
      seekReverseSong,
      setNoty,
    } = this.props;
    return (
      <div className="case-container">
        <div style={{ backgroundColor: theme }} className="case">
          <Display
            songIndex={songIndex}
            playing={playing}
            activeItems={activeItems}
            musicItems={musicItems}
            menuItems={menuItems}
            currentMenu={currentMenu}
            songNameItems={songNameItems}
            audio={audio}
            songUrl={songUrl}
            songImageUrl={songImageUrl}
            wallpaper={wallpaper}
            wallpaperItems={wallpaperItems}
            noty={noty}
            notifyText={notifyText}
            setNoty={setNoty}
          />
          <Wheel
            theme={theme}
            activeItems={activeItems}
            menuItems={menuItems}
            currentMenu={currentMenu}
            changeMenuForward={changeMenuForward}
            changeMenuBackward={changeMenuBackward}
            togglePlayPause={togglePlayPause}
            seekForwardSong={seekForwardSong}
            seekReverseSong={seekReverseSong}
            wheelColor={wheelColor}
          />
        </div>
      </div>
    );
  }
}
export default Case;
