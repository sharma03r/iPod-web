import { Component } from "react";
import Wheel from "./Wheel";
import Display from "./Display";

class App extends Component {
  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}

export default App;
