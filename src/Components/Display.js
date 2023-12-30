import { Component } from "react";
import Navbar from "./Navbar";
import LockScreen from "./LockScreen";
import "../css/Display.css";

class Display extends Component {
  render() {
    return (
      <>
        <div className="display">
          <Navbar />
          <LockScreen />
        </div>
      </>
    );
  }
}
export default Display;
