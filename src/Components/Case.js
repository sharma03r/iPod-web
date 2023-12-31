import { Component } from "react";
import Display from "./Display";
import Wheel from "./Wheel";

class Case extends Component {
  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}
export default Case;
