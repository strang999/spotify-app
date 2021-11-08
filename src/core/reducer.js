export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   remove
  token:
    "BQChr0cwNM_uVtrp4VvxKaG_-_zXLKy-QVKC8nyFNtbuqEL6GSTKatmBjnXg9tCmWsUgVPkTeZR8iTC-39dHKKyRjloq-QLVbotamw3MWDIcMtB-VqHqFFlifqrjGXARXh-WRlEyers2qqzZHjTODY-1bhmKkOHwXIEQTLKlatQuU9Lul",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_TOP_TRACKS":
      return {
        ...state,
        topTracks: action.topTracks,
      };
    default:
      return state;
  }
};

export default reducer;
