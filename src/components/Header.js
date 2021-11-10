import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Search, ExitToApp } from "@material-ui/icons";
import React, { useRef } from "react";
import { useDataLayerValue } from "../core/DataLayer";
import "./Header.scss";
function Header() {
  const [{ user, logoutHandler }, dispatch] = useDataLayerValue();
  const searchRef = useRef();
  const searchHandler = () => {
    const searchInput = searchRef.current.value;
    dispatch({
      type: "SEARCH_INPUT",
      searchInput: searchInput,
    });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          placeholder="Search for Artists, Songs..."
          type="text"
          onChange={searchHandler}
          ref={searchRef}
        />
      </div>
      <div className="header__right">
        <IconButton onClick={handleClickMenu} size="small" sx={{ ml: 2 }}>
          <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          onClick={handleCloseMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={logoutHandler}>
            <ListItemIcon>
              <ExitToApp fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>

        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
