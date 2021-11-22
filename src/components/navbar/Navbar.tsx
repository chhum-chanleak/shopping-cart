import React from "react";
import { Wrapper } from "./Navbar-style";

const Navbar = () => {
  //s
  return (
    <Wrapper>
      <div>
        <ul id="nav">
          <li>
            <a href="/shopping-cart">Home</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
