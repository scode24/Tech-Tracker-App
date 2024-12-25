import { BarChart } from "lucide-react";
import React from "react";
import { useTechDataState } from "../states/TechDataState";
import ChartViewer from "./ChartViewer";
import GraphPlotter from "./GraphPlotter";

const BarChartViewer = () => {
  const { yearTechData } = useTechDataState();

  return (
    <ChartViewer
      config={{
        icon: <BarChart strokeWidth={1} />,
        title: "Bar Chart Viewer",
        content: <GraphPlotter type="ColumnChart" data={yearTechData} />,
      }}
    />
  );
};

export default BarChartViewer;
