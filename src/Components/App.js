import { Component } from "react";
import Wheel from "./Wheel";
import Display from "./Display";
import song1 from "../static/songs/Post Malone - White Iverson.mp3";
import song2 from "../static/songs/John Denver - Country Roads.mp3";
import song3 from "../static/songs/Sigrid - High Five.mp3";
import song4 from "../static/songs/Rick Astley - Never Gonna Give You Up.mp3";
import song5 from "../static/songs/Khalid - Young Dumb Broke.mp3";

import songImage1 from "../static/Post Malone - White Iverson.png";
import songImage2 from "../static/John Denver - Country Roads.jpg";
import songImage3 from "../static/Sigrid - High Five.png";
import songImage4 from "../static/Never Gonna Give You Up.png";
import songImage5 from "../static/Khalid - Young Dumb Broke.jpg";

import wallpaper1 from "../static/wallpaper1.jpg";
import wallpaper2 from "../static/wallpaper2.jpg";
import wallpaper3 from "../static/wallpaper3.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItems: 0,
      menuItems: ["Now Playing", "Music", "Games", "Settings"],
      musicItems: [song1, song2, song3, song4, song5],
      songImageItems: [
        songImage1,
        songImage2,
        songImage3,
        songImage4,
        songImage5,
      ],
      wallPaperItems: [wallpaper1, wallpaper2, wallpaper3],
      songNameItems: [
        "Post Malone - White Iverson",
        "John Denver - Country Roads",
        "Sigrid - High Five",
        "Rick Astley - Never Gonna Give You Up",
        "Khalid - Young Dumb Broke",
      ],
      songIndex: 0, //current song
      lengthMenuKey: { "-1": 3, 1: 2, 4: 4, 8: 4, 3: 2, 9: 3, 10: 2 },
      menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] }, //which menu can be rendered by clicking the menu
      currentMenu: -2, //Lock screen
      navigationStack: [],
      songUrl: song1,
      playing: false,
      theme: "rgb(210,210,210)",
      audio: new Audio(song1),
      songImageUrl: songImage1,
      wheelColor: "white",
      wallpaper: 0,
      noty: false,
      notifyText: "Wallpaper changed",
    };
  }
  //function to seek forward the song
  seekForwardSong = (e) => {
    if (this.state.currentMenu === -2 || !this.state.playing) {
      return;
    }
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === this.state.songImageUrl.length - 1) {
        songIndex = 0;
      } else {
        songIndex++;
      }
      const songImageUrl = this.state.songImageItems[songIndex];
      const songUrl = this.state.musicItems[songIndex];
      this.setState(
        {
          songIndex: songIndex,
          songImageUrl: songImageUrl,
          songUrl: songUrl,
          audio: new Audio(songUrl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState;
      });
    }
  };

  seekReverseSong = (e) => {
    if (this.state.currentMenu === -2 || !this.state.playing) {
      return;
    }
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === 0) {
        songIndex = this.state.musicItems.length - 1;
      } else {
        songIndex--;
      }
      const songImageUrl = this.state.songImageItems[songIndex];
      const songUrl = this.state.musicItems[songIndex];
      this.setState(
        {
          songIndex: songIndex,
          songImageUrl: songImageUrl,
          songUrl: songUrl,
          audio: new Audio(songUrl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime -= interval;
        return prevState;
      });
    }
  };

  //toggle song play and pause
  togglePlayPause = () => {
    if (this.state.currentMenu === -2) {
      return;
    }
    if (this.state.playing == true) {
      this.state.audio.pause();
      this.setState({
        playing: false,
      });
    } else {
      this.state.audio.play();
      this.setState({ playing: true });
    }
  };

  //function to update active menu when the wheel is scrolled
  updateActiveMenu = (direction, menu) => {
    if (![-1, 1, 4, 8, 9, 10].includes(menu)) {
      return;
    }
    let min = 0;
    let max = 0;
    max = this.state.lengthMenuKey[menu];
    if (direction == 1) {
      if (this.state.activeMenu >= max) {
        this.setState({
          activeMenu: min,
        });
      } else {
        this.setState({
          activeMenu: this.state.activeMenu + 1,
        });
      }
    } else {
      if (this.state.activeMenu <= min) {
        this.setState({
          activeMenu: max,
        });
      } else {
        this.setState({
          activeMenu: this.state.activeMenu - 1,
        });
      }
    }
  };

  setTheme = (id) => {
    let theme = "";
    switch (id) {
      case 0:
        theme = "#f0f0f0";
        break;
      case 1:
        theme = "#555d50";
        break;
      case 2:
        theme = "#d1cdda";
        break;
      case 3:
        theme = "#c4aead";
        break;
    }
    this.setState({
      theme: theme,
      noty: true,
      notifyText: "Theme Changed",
    });
    return;
  };

  setWallpaper = (id) => {
    this.setState({
      wallpaper: id,
      noty: true,
      notifyText: "Wallpaper Changed",
    });
    return;
  };

  setWheelColor = (id) => {
    let wheelColor = "";
    switch (id) {
      case 0:
        wheelColor = "#212121";
        break;
      case 1:
        wheelColor = "#white";
        break;
      case 2:
        wheelColor = "#3e2723";
        break;
      case 3:
        wheelColor = "#3d5afe";
        break;
    }
    this.setState({
      wheelColor: wheelColor,
      noty: true,
      notifyText: "Wheel colour changed",
    });
  };
  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}

export default App;
