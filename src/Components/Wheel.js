import { Component } from "react";
import { AiOutlineForward } from "react-icons/ai";
import { AiOutlineBackward } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { BiPause } from "react-icons/bi";
import "../css/wheel.css";

class Wheel extends Component {
  render() {
    return (
      <div className="wheel-container" id="wheel-container">
        <div className="wheel" id="wheel">
          <div className="control" id="menu">
            <div>MENU</div>
          </div>
          <div className="control" id="forward">
            <AiOutlineForward />
          </div>
          <div className="control" id="play-pause">
            <div>
              <BsFillPlayFill />
              <BiPause />
            </div>
          </div>
          <div className="control" id="reverse">
            <AiOutlineBackward />
          </div>
        </div>
        <div className="blank" id="blank"></div>
      </div>
    );
  }
}

export default Wheel;
