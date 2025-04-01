import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./homepage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/">
            This is the home page
          </Route>
          <Route path="/join" Component={RoomJoinPage} />
          <Route path="/create" Component={CreateRoomPage} />
        </Routes>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
if (appDiv) {
  const root = createRoot(appDiv);
  root.render(<App />);
} else {
  console.log("Element not found");
}
