import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return;
  return (
    <div className="w-48 px-5 py-5 ">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
    </div>
  );
};

export default SideBar;
