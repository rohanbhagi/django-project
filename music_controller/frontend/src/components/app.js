import React, { Component } from "react";
import { createRoot } from "react-dom/client";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>testing react code</h1>;
  }
}

const appDiv = document.getElementById("app");
if (appDiv) {
  console.log(appDiv);
  const root = createRoot(appDiv);
  root.render(<App />);
} else {
  console.log("Element not found");
}
