import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React, { useEffect } from "react";
import "./Body.scss";
import { useDataLayerValue } from "../core/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import SpotifyWebApi from "spotify-web-api-js";
import Loader from './Loader'
const TopTracks = () => {
  const [{ searchResults, topTracksUkraine, topTracks, token, }, dispatch] = useDataLayerValue();
  const spotify = new SpotifyWebApi();
  const playbackHandler = ()=> {
    spotify.play({"context_uri":"spotify:playlist:37i9dQZEVXbLiRSasKsNU9", "uri":"spotify:track:15HMh4yxdf4wyxSZSlOgGZ"})
    .catch((error) => {
      console.error(error)
    })
  }
  let loading = true;
  return (
  loading ? <Loader/> : <>
  <div className="body">
          <Header />
          <div className="body__info">
            <img src={topTracks.images[0].url} alt="" />
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>{topTracks.name}</h2>
              <p>{topTracks.description}</p>
            </div>
          </div>
          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilled className="body__shuffle" onClick={playbackHandler} />
              <Favorite fontSize="large" className="" />
              <MoreHoriz className="" />
            </div>
            {topTracks.tracks.items &&
              topTracks.tracks.items.filter(item => item.track !== null ).map((item) => <SongRow key={item.track.id} track={item.track} />
              )}
          </div>
        </div>
  </>
  );
}
export default React.memo(TopTracks);

