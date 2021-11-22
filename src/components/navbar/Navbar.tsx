import React from "react";
import { Wrapper } from "./Navbar-style";

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <ul id="nav">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
