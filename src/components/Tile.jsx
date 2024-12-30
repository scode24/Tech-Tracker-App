import { CodeXml } from "lucide-react";
import React from "react";

const Tile = (props) => {
  const { name, usage } = props.config;
  return (
    <div className="card flex flex-col bg-green-300 p-3 m-2 w-[150px] dark:text-black">
      <div className="flex flex-row">
        <div className="vertical-centered mr-2">
          <CodeXml strokeWidth={1} />
        </div>
        <div className="vertical-centered">
          <span className="font-medium">{name}</span>
        </div>
      </div>
      <div className="flex flex-col mt-5 items-end">
        <span className="text-xs">Codes (in Bytes)</span>
        <span className="text-2xl font-medium">{usage}</span>
      </div>
    </div>
  );
};

export default Tile;
