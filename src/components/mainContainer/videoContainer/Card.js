import React from "react";

const Card = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="m-1 cursor-pointer w-80 ">
      <div>
        <img
          className="rounded-lg shadow-lg w-80 "
          src={thumbnails.medium.url}
          alt="thumbnails"
        />
      </div>
      <ul>
        <li className="font-bold pt-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} - views</li>
      </ul>
    </div>
  );
};

export default Card;
