import { Component } from "react";
import "../css/Theme.css";

class WheelColor extends Component {
  render() {
    const { activeItems } = this.props;
    return (
      <div className="wheel-color">
        <h2>Select Wheel Color</h2>
        <ul>
          {["Black", "White", "Brown"].map((element, index) => {
            return activeItems === index ? (
              <li key={index} className="active theme-li">
                &nbsp; {element}
              </li>
            ) : (
              <li key={index} className="theme-li">
                &nbsp; {element}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default WheelColor;
