import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";
import RoomWrapper from "./RoomWrapper";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/join" Component={RoomJoinPage} />
          <Route path="/create" Component={CreateRoomPage} />
          <Route path="/room/:roomCode" Component={RoomWrapper} />
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
