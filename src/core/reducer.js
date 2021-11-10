const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    case "SET_PLAYBACK_STATE":  
    return {
      ...state,
      playState: action.playState,
    };
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
    case "SET_TOP_UKRAINE":
      return {
        ...state,
        topTracksUkraine: action.topTracksUkraine,
      };
    case "SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.searchInput,
      };
    case "GET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.searchResults,
      };

    default:
      return state;
  }
};

export default reducer;
