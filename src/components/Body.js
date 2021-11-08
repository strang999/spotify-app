import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import "./Body.scss";
import { useDataLayerValue } from "../core/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
export const Body = ({ spotify }) => {
  const [{ topTracks }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={topTracks?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{topTracks?.name}</h2>
          <p>{topTracks?.description}</p>
        </div>
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilled className="body__shuffle" />
            <Favorite fontSize="large" className="" />
            <MoreHoriz className="" />
          </div>
          {topTracks?.tracks.items.map((item) => (
            <SongRow  key={item.track.name} track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
};
