import React from "react";
import { useSearchParams } from "react-router-dom";

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <iframe
        className="pl-10"
        width="1024"
        height="512"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
