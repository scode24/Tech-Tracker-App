import React from "react";
import Tile from "./Tile";

const TileGrid = (props) => {
  const list = props.data;

  return (
    list !== undefined && (
      <div className="flex flex-wrap overflow-auto">
        {list.map((item, index) => {
          return (
            <Tile
              key={index}
              config={{
                name: item.name,
                usage: item.usage,
              }}
            />
          );
        })}
      </div>
    )
  );
};

export default TileGrid;
