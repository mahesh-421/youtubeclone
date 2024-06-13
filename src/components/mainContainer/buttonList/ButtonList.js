import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Cricket",
  "favourite",
  "Movies",
  "Music",
  "Socer",
  "Golf",
  "Comedy",
  "Thriller",
  "Horror",
  "Netflix",
  "Python",
  "JAVA",
];

const ButtonList = () => {
  return (
    <div className="flex py-4 mx-20">
      {list.map((title) => (
        <Button key={title} title={title} />
      ))}
    </div>
  );
};

export default ButtonList;
