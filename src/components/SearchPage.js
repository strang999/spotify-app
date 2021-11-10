import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React, { useEffect } from "react";
import "./Body.scss";
import { useDataLayerValue } from "../core/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi();
const SearchPage = () => {
  const [{ user, token, searchInput, searchResults }, dispatch] =
    useDataLayerValue();

  useEffect(() => {
    setTimeout(() => {
      if (searchInput.length > 3) {
        spotify.searchTracks(searchInput).then((response) => {
          dispatch({
            type: "GET_SEARCH_RESULTS",
            searchResults: response.tracks.items,
          });
        });
      }
    }, 2000);
   
  }, [searchInput]);
  console.log(searchResults);
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        {/* <img src={searchResults?.images[0].url} alt="" /> */}
        <div className="body__infoText">
          <strong>SEARCH SPOTIFY</strong>
          {/* <h2>{searchResults?.name}</h2>
          <p>{searchResults?.description}</p> */}
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" className="" />
          <MoreHoriz className="" />
        </div>
        {searchResults &&
          searchResults.map((track) => (
            <SongRow key={track.id} track={track} />
          ))}
      </div>
    </div>
  );
};
export default React.memo(SearchPage);
