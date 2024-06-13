import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-gray-300 rounded-lg p-2 m-2">{title}</button>
    </div>
  );
};

export default Button;
