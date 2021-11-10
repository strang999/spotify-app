import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { useHistory } from "react-router-dom";

export const DataLayerContext = createContext();

export const DataLayer = ({ reducer, children }) => {
  const history = useHistory();
  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    history.replace("/login");
  }, []);
  const initialState = {
    user: null,
    playlists: [],
    playing: false,
    topTracks: [],
    searchInput: "",
    searchResults: [],
    loading: true,
    logoutHandler: logoutHandler,
    //   remove
    // token:     "BQChr0cwNM_uVtrp4VvxKaG_-_zXLKy-QVKC8nyFNtbuqEL6GSTKatmBjnXg9tCmWsUgVPkTeZR8iTC-39dHKKyRjloq-QLVbotamw3MWDIcMtB-VqHqFFlifqrjGXARXh-WRlEyers2qqzZHjTODY-1bhmKkOHwXIEQTLKlatQuU9Lul",
  };
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
