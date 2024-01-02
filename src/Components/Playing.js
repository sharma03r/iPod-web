import { Component } from "react";
import "../css/Playing.css";

class Playing extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
    };
    this.intervalId = "";
  }
  componentDidMount() {
    const { audio } = this.props;
    this.setState({
      currentTime: audio.currentTime,
    });
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: audio.currentTime,
      });
    }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { songImageUrl, audio, songUrl, playing, songIndex, songNameItems } =
      this.props;
    var currentTimeRender =
      Math.floor(this.state.currentTime / 60) +
      ":" +
      Math.floor(this.state.currentTime % 60);

    var durationRender =
      Math.floor(audio.duration / 60) + ":" + Math.floor(audio.duration % 60);
    const percentageRender = {
      width: (this.state.currentTime / audio.duration) * 100 + "%",
    };
    if (durationRender === "NaN:NaN") durationRender = "0:00";
    return (
      <div className="song-playing-container">
        <div className="song-details">
          <img src={songImageUrl} alt="song image" />
          <div>
            <h6>
              {songNameItems}
              {songIndex}
            </h6>
            {playing && <h4 className="play-pause-nav">Playing</h4>}
            {!playing && <h4 className="play-pause-nav">Paused</h4>}
          </div>
        </div>
        <div className="status">
          {currentTimeRender}
          <div style={percentageRender} id="progress-bar"></div>
          {durationRender}
        </div>
      </div>
    );
  }
}
export default Playing;
