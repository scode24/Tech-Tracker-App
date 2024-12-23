import React from "react";

const CardInfo = (props) => {
  const { icon, title, description, fontColor, backColor, tag } = props.config;

  return (
    <div
      className={`flex flex-col justify-between ${
        backColor !== undefined ? backColor : ""
      } ${fontColor !== undefined ? fontColor : ""} ${
        tag === "leftInfo" ? "rounded-l-md" : "rounded-r-md"
      } p-3 h-full md:p-5`}
    >
      <div className="flex flex-row">
        <div className="centered mr-2">{icon}</div>
        <div className="font-medium centered">{title}</div>
      </div>

      <div className="flex flex-col items-end">{description}</div>
    </div>
  );
};

export default CardInfo;
