import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset } from "./dataset";
import { LuLineChart } from "react-icons/lu";
import "./BarChart.css";
import { getOverPercentage } from "../../utils/util";

const chartSetting = {
  xAxis: [
    {
      data: [0, 50000, 100000, 150000, 200000],
    },
  ],

  height: 250,
};

const valueFormatter = (value: number | null) => `${value}$`;

export default function GridDemo({ budget }: { budget: any }) {
  console.log("projectData:: ", budget);

  const dataset = [
    {
      budget: budget?.orignal_estimate,
      label: "Original Estimate",
    },
    {
      budget: budget?.final_cost,
      label: "Final Cost",
    },
    {
      budget: budget?.difference,
      label: "Difference",
    },
  ];

  console.log("dataset::: ", dataset);
  return (
    <div>
      <BarChart
        dataset={dataset}
        yAxis={[
          {
            scaleType: "band",
            dataKey: "label",
          },
        ]}
        margin={{ left: 110 }}
        series={[{ dataKey: "budget", valueFormatter }]}
        layout="horizontal"
        grid={{ vertical: true }}
        sx={{
          //change left yAxis label styles
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
            strokeWidth: "0.4",
            fill: "#fff",
          },
          // change bottom label styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
            strokeWidth: "0.5",
            fill: "#fff",
          },
          // bottomAxis Line Styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
            stroke: "#fff",
            strokeWidth: 0.4,
          },
        }}
        {...chartSetting}
      />
      <div className="near-row">
        <LuLineChart
          style={{ alignSelf: "flex-end", alignItems: "flex-end" }}
          color="var(--accent-color)"
          size="30px"
        />
        <span className="yellow-text">
          Over {getOverPercentage(budget?.orignal_estimate, budget?.final_cost)}
          %
        </span>
      </div>
    </div>
  );
}
