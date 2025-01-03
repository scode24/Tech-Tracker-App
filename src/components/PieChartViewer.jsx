import { PieChart } from "lucide-react";
import React from "react";
import { useTechDataState } from "../states/TechDataState";
import ChartViewer from "./ChartViewer";
import GraphPlotter from "./GraphPlotter";

const PieChartViewer = () => {
  const { yearTechData } = useTechDataState();

  return (
    <ChartViewer
      config={{
        icon: <PieChart strokeWidth={1} />,
        title: "Pie Chart Viewer",
        content: <GraphPlotter type="PieChart" data={yearTechData} />,
      }}
    />
  );
};

export default PieChartViewer;
