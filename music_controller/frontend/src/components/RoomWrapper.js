import React from "react";
import { useParams } from "react-router-dom";
import Room from "./Room";

function RoomWrapper() {
  const params = useParams();
  return <Room roomCode={params.roomCode} />;
}

export default RoomWrapper;
