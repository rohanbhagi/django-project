import React, { Component } from "react";
import { createRoot } from "react-dom/client";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}

const appDiv = document.getElementById("app");
if (appDiv) {
  const root = createRoot(appDiv);
  root.render(<App name="hello world" />);
} else {
  console.log("Element not found");
}
