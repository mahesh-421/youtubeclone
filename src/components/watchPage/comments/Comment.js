import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="my-3 bg-gray-100 flex items-center rounded-lg">
      <img
        className="h-10"
        alt="Profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnth5-wQ3awrdVlDxI3cZO1tewLa37xD-MjQ&usqp=CAU"
      />
      <div className="pl-2">
        <p className="font-bold">{name}</p>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Comment;
