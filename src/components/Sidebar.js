import React from "react";
import "./Sidebar.scss";
import logo from "../assets/Spotify_Logo_RGB_White.png";
import SidebarOption from "./SidebarOption";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "../core/DataLayer";

export const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="" />
      <SidebarOption Icon={HomeOutlinedIcon} title="Home" to="/" />
      <SidebarOption Icon={SearchIcon} title="Search"  to="search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"  to="library"/>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
};
