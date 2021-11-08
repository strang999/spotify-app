import React from "react";
import { Body } from "./Body";
import { Footer } from "./Footer";
import "./Player.scss";
import { Sidebar } from "./Sidebar";
function Player({ spotify }) {
  return (
    <div>
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body spotify={spotify} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Player;
