import { Component } from "react";
import "../css/LockScreen.css";
class LockScreen extends Component {
  render() {
    return (
      <>
        <div className="bottom-div-lock">
          <h3>Press center button to unlock</h3>
        </div>
      </>
    );
  }
}
export default LockScreen;
