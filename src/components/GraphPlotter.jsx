import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const GraphPlotter = (props) => {
  const list = props.data;
  const type = props.type;
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    if (list !== undefined) {
      setGraphData(transformData(list));
    }
  }, [list]);

  const transformData = (data) => {
    const transformedData = data.map((item) => [item.name, item.usage]);
    const headers = ["Tech stack", "Lines of code"];
    return [headers, ...transformedData];
  };

  return (
    graphData !== undefined && (
      <Chart
        chartType={type}
        data={graphData}
        options={{
          title: "Tech Stack vs Lines of Code",
          width: "100%",
          height: "100%",
        }}
      />
    )
  );
};

export default GraphPlotter;
