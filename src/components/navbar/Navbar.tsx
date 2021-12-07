import React, { useState } from "react";
//  components
import avatar from "../../assets/icons/clothes-hanger.jpg";
import {
  Avatar,
  AppBar,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, Cancel } from "@material-ui/icons";
import { Wrapper } from "./Navbar-style";

const Navbar = () => {
  const [input, inputSet] = useState("");

  //  functions
  const handleInput = (e: any) => {
    inputSet(e.target.value);
  };

  const handleCancel = () => {
    inputSet("");
  };

  return (
    <AppBar position="fixed">
      <Wrapper>
        <Toolbar>
          <Avatar src={avatar} className="avatar" alt="clothes hanger" />
          <Typography className="logo-text" variant="h6">
            Online Shop
          </Typography>
        </Toolbar>
        <div className="search">
          <div className="search-icon">
            <Search />
          </div>
          <InputBase
            placeholder="Search..."
            value={input}
            onChange={handleInput}
          />
          {input !== "" && (
            <Cancel className="cancel-icon" onClick={handleCancel} />
          )}
        </div>
      </Wrapper>
    </AppBar>
  );
};

export default Navbar;
