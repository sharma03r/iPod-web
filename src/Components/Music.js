import { Component } from "react";
import "../css/Music.css";

class Music extends Component {
  render() {
    const { activeItems, musicItems } = this.props;
    return (
      <div className="music">
        {musicItems.map((element, index) => {
          return activeItems === index ? (
            <li key={index} className="active">
              &nbsp; {element}
            </li>
          ) : (
            <li key={index}>&nbsp; {element}</li>
          );
        })}
      </div>
    );
  }
}
export default Music;
