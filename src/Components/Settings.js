import { Component } from "react";
import "../css/Settings.css";

class Settings extends Component {
  render() {
    const { activeItems } = this.props;
    return (
      <div className="settings">
        <h2>Settings</h2>
        <ul>
          {activeItems === 0 ? (
            <li className="active">Themes</li>
          ) : (
            <li>Themes</li>
          )}
          {activeItems === 1 ? (
            <li className="active">WheelColor</li>
          ) : (
            <li>WheelColor</li>
          )}
          {activeItems === 2 ? (
            <li className="active">Wallpaper</li>
          ) : (
            <li>Wallpaper</li>
          )}
        </ul>
      </div>
    );
  }
}
export default Settings;
