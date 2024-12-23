import { LayoutGrid } from "lucide-react";
import React from "react";
import { useTechDataState } from "../states/TechDataState";
import ChartViewer from "./ChartViewer";
import TileGrid from "./TileGrid";

const TileMapViewer = () => {
  const { yearTechData } = useTechDataState();

  return (
    <ChartViewer
      config={{
        icon: <LayoutGrid strokeWidth={1} />,
        title: "Tile Map Viewer",
        content: <TileGrid data={yearTechData} />,
      }}
    />
  );
};

export default TileMapViewer;
