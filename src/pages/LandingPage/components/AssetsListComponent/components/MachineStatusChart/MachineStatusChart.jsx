import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function MachineStatusChart(props) {
  const options = {
    title: {
      text: "Machine Status",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Timestamp",
      },
    },
    yAxis: {
      title: {
        text: "Machine Status",
      },
      categories: ["off", "inAlert", "inOperation"],
    },
    series: [
      {
        name: "Machine Status",
        data: props.data.map((item) => [
          new Date(item.timestamp).getTime(),
          item.status === "off" ? 0 : item.status === "inAlert" ? 1 : 2,
        ]),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default MachineStatusChart;
