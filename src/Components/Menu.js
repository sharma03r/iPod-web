import { Component } from "react";
import game from "../static/game.jpg";
import music from "../static/music.jpg";
import setting from "../static/settings.png";
import "../css/Menu.css";

class Menu extends Component {
  render() {
    const { activeItems, menuItems, songImageUrl } = this.props;
    return (
      <div className="menu-container">
        <div className="menu">
          <ul>
            {menuItems.map((element, index) => {
              return activeItems === index ? (
                <li key={index}>&nbsp;{element}</li>
              ) : (
                <li key={index}>&nbsp;{element}</li>
              );
            })}
          </ul>
        </div>
        <div className="leaf">
          {activeItems == 0 && (
            <img src={songImageUrl} className="leaf-image" />
          )}
          {activeItems == 1 && <img src={music} className="leaf-image" />}
          {activeItems == 2 && <img src={game} className="leaf-image" />}
          {activeItems == 3 && <img src={setting} className="leaf-image" />}
        </div>
      </div>
    );
  }
}
export default Menu;
