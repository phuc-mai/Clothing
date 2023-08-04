import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Announcement from "./Announcement";

const Navbar = () => {
  return (
    <>
      <Announcement />
      <div className="navbar">
        <div className="left">
          <div className="language">EN</div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="center">
          <div className="logo">LAMA.</div>
        </div>
        <div className="right">
          <div className="account">REGISTER</div>
          <div className="account">LOGIN</div>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </>
  );
};

export default Navbar;
