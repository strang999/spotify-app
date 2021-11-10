import React from "react";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";

import "./Footer.scss";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistPlay, VolumeDown } from "@material-ui/icons";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../core/DataLayer";
import SongRow from "./SongRow";
export const Footer = () => {
  const spotify = new SpotifyWebApi();
  const [value, setValue] = React.useState(50);
  const [{ playState }, dispatch] = useDataLayerValue();

  const volumeHandler = (event, newValue) => {
    setValue(newValue);
    spotify.setVolume(value).catch((error) => {
      console.error(error);
    });
  };

  const nextTrack = () => {
    spotify.skipToNext().catch((error) => {
      console.error(error);
    });
  };

  const prevTrack = () => {
    spotify.skipToNext().catch((error) => {
      console.error(error);
    });
  };
  const repeatTrack = () => {
    spotify.setRepeat().catch((error) => {
      console.error(error);
    });
  };
  const shuffleMode = () => {
    spotify.setShuffle().catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__songInfo">
          <SongRow track={playState} />
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" onClick={shuffleMode} />
        <SkipPreviousIcon className="footer__icon" onClick={prevTrack} />
        <PlayCircleFilledIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" onClick={nextTrack} />
        <RepeatIcon className="footer__green" onClick={repeatTrack} />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={value} onChange={volumeHandler} step={20} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
