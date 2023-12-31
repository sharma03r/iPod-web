import { Component } from "react";
import Navbar from "./Navbar";
import LockScreen from "./LockScreen";
import "../css/Display.css";

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
        <div className="display">
          <Navbar />
          <LockScreen />
        </div>
      </>
    );
  }
}
export default Display;
