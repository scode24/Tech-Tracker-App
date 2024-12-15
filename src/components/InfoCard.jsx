import React from "react";

const InfoCard = (props) => {
  const { description, icon } = props.config;

  return (
    <div className="flex flex-row mb-2 text-sm">
      <div className="centered mr-2">{icon}</div>
      <div className="centered">{description}</div>
    </div>
  );
};

export default InfoCard;
