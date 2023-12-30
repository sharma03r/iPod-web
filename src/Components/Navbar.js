import { Component } from "react";
import batteryImage from "../static/battery.png";
import "../css/Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      time: this.getCurrentTime(),
    };
  }
  getCurrentTime() {
    const today = new Date();
    let time;
    if (today.getMinutes() <= 9) {
      time = today.getHours() + ":0" + today.getMinutes();
    } else {
      time = today.getHours() + ":" + today.getMinutes();
    }
    return time;
  }
  render() {
    const { time } = this.state;
    return (
      <>
        <div className="bar">
          {<h5 className="heading">ipod</h5>}
          <h3 className="time">{time}</h3>
          {
            <div className="right-container-nav">
              <img className="battery" src={batteryImage} />
            </div>
          }
        </div>
      </>
    );
  }
}
export default Navbar;
