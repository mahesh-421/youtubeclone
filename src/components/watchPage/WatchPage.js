import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/redux/appSlice";

import VideoPlayer from "./VideoPlayer";
import Comments from "./comments/Comments";
import LiveChatContainer from "./liveChat/LiveChatContainer";
import SideBar from "../SideBar";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex w-full ">
        <div className="flex flex-col">
          <VideoPlayer />
          <Comments />
        </div>
        <LiveChatContainer />
      </div>
    </div>
  );
};

export default WatchPage;
