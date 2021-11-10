import React, { useEffect } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./core/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Layout from "./components/Layout";
import { useDataLayerValue } from "./core/DataLayer";
import {
  Switch,
  BrowserRouter,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import TopTracks from "./components/TopTracks";
import Loader from "./components/Loader";
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, searchInput, searchResults, topTracks }, dispatch] =
    useDataLayerValue();
  const history = useHistory();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    if (hash.access_token) {
      localStorage.setItem("token", JSON.stringify(hash.access_token));
    }
    let _token = JSON.parse(localStorage.getItem("token"));
    if (!_token) {
      _token = hash.access_token;
    }
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log(_token);
    
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getMyCurrentPlaybackState().then((response) => {
        console.log(response)
        if (response) {
          dispatch({
            type: "SET_PLAYBACK_STATE",
            playState: {
              device_id: response.device?.id,
              volume_percent: response.device?.volume_percent,
              shuffle_state: response.shuffle_state,
              repeat_state: response.repeat_state,
              album: response.item.album,
              name: response.item.name,
              artists: response.item.artists,
            },
          });
        }
        
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify
        .getPlaylist("37i9dQZEVXbLiRSasKsNU9")
        .then((response) => {
          dispatch({
            type: "SET_TOP_TRACKS",
            topTracks: response,
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
        });
    }
  }, []);

  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/search" exact>
                <SearchPage />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/library" exact>
                <TopTracks />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
}

export default App;
