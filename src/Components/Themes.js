import { Component } from "react";
import "../css/Theme.css";

class Themes extends Component {
  render() {
    const { activeItems } = this.props;
    return (
      <div className="theme">
        <h2>Select theme</h2>
        <ul>
          {["Snow White", "Black", "USC Gold", "Space Gray", "Pearl"].map(
            (element, index) => {
              return activeItems === index ? (
                <li key={index} className="active theme-li">
                  &nbsp; {element}
                </li>
              ) : (
                <li key={index} className="theme-li">
                  &nbsp; {element}
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}
export default Themes;
