import { Component } from "react";
import Navbar from "./Navbar";
import LockScreen from "./LockScreen";
import "../css/Display.css";
import Settings from "./Settings";
import Music from "./Music";
import Menu from "./Menu";
import Song from "./Song";
import Playing from "./Playing";
import Themes from "./Themes";
import WheelColor from "./WheelColor";
import Wallpaper from "./Wallpaper";

class Display extends Component {
  render() {
    const {
      songIndex,
      playing,
      activeItems,
      musicItems,
      menuItems,
      currentMenu,
      songNameItems,
      audio,
      songUrl,
      songImageUrl,
      wallpaper,
      wallpaperItems,
      noty,
      notifyText,
      setNoty,
    } = this.props;
    return (
      <>
        <div
          className="display"
          style={{ className: `url(${wallpaperItems[wallpaper]})` }}
        >
          <Navbar setNoty={setNoty} playing={playing} notifyText={notifyText} />
          {currentMenu === -2 && <LockScreen />}
          {currentMenu === -1 && (
            <Menu
              songImageUrl={songImageUrl}
              menuItems={menuItems}
              activeItems={activeItems}
            />
          )}
          {currentMenu === 1 && (
            <Music musicItems={musicItems} activeItems={activeItems} />
          )}
          {currentMenu === 2 && (
            <div className="blank-div">
              <h1 className="empty-text">Games</h1>
            </div>
          )}
          {currentMenu === 3 && <Settings activeItems={activeItems} />}
          {currentMenu === 4 && (
            <Song songNameItems={songNameItems} activeItems={activeItems} />
          )}
          {currentMenu === 5 && (
            <div className="blank-div">
              <h1 className="empty-text">Artist</h1>
            </div>
          )}
          {currentMenu === 6 && (
            <div className="blank-div">
              <h1 className="empty-text">Albums</h1>
            </div>
          )}
          {(currentMenu === 0 || currentMenu === 7) && (
            <Playing
              songImageUrl={songImageUrl}
              audio={audio}
              songUrl={songUrl}
              playing={playing}
              songIndex={songIndex}
              songNameItems={songNameItems}
            />
          )}
          {currentMenu === 8 && <Themes activeItems={activeItems} />}
          {currentMenu === 9 && <WheelColor activeItems={activeItems} />}
          {currentMenu === 10 && <Wallpaper activeItems={activeItems} />}
        </div>
      </>
    );
  }
}
export default Display;
