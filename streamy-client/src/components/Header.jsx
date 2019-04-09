import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link className="item" to="/">
        Streamer
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
