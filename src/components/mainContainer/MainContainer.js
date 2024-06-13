import React from "react";
import ButtonList from "./buttonList/ButtonList";
import VideoContainer from "./videoContainer/VideoContainer";
import SideBar from "../SideBar";

const MainContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-wrap overflow-auto bg-geen-900 ">
        <div className="overflow-x-auto m-auto">
          <ButtonList />
        </div>
        <div>
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
