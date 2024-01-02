import { Component } from "react";

class Wallpaper extends Component {
  render() {
    const { activeItems } = this.props;
    return (
      <div className="wallpaper">
        <h2>Wallpaper Select</h2>
        <ul>
          {["Wallpaper 1", "Wallpaper 2", "Wallpaper 3"].map(
            (element, index) => {
              return activeItems === index ? (
                <li key={index} className="active theme-li">
                  {element}
                </li>
              ) : (
                <li className="theme-li" key={index}>
                  {element}{" "}
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}
export default Wallpaper;
