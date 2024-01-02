import { Component } from "react";

class Song extends Component {
  render() {
    const { activeItems, songNameItems } = this.props;
    return (
      <div className="song">
        <h2>Song</h2>
        {songNameItems.map((element, index) => {
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
export default Song;
