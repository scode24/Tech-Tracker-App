import { PieChart } from "lucide-react";
import React from "react";
import ChartViewer from "./ChartViewer";

const PieChartViewer = () => {
  return (
    <ChartViewer
      config={{
        icon: <PieChart strokeWidth={1} />,
        title: "Pie Chart Viewer",
        content: "A tile viewer component that displays various charts.",
      }}
    />
  );
};

export default PieChartViewer;
