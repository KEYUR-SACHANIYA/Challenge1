import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { context } from "./App";

const BarDemo = () => {
  const data = JSON.parse(useContext(context));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-light text-primary rounded">
          <p>{`Date : ${label}`}</p>
          <p>{`Runs : ${payload[0].value}`}</p>
          <p>{`Opposition : ${payload[0].payload.opposition}`}</p>
          <p>{`Ground : ${payload[0].payload.ground}`}</p>
          <p>{`Match Result : ${payload[0].payload.match_result}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="mw-100 pb-3">
        <h2 className="pt-5 pb-3 text-center" style={{ color: "#71C7E2" }}>
          Sachin Tendulkar's Runs Per Match
        </h2>
        <div style={{ paddingLeft: "1.2rem" }}>
          <BarChart width={1270} height={550} data={data} barGap={16}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              label={{
                value: "Runs",
                angle: -90,
                position: "insideLeft",
                stroke: "#8884d8",
                strokeWidth: 1,
                fontSize: "1rem",
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              formatter={(value, name, props) => ["Date of Match"]}
              wrapperStyle={{ fontWeight: "bold", fontSize: "1.05rem" }}
            />
            <Bar dataKey="batting_score" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default BarDemo;
