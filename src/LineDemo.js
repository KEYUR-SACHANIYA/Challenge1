import React, { useContext } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { context } from "./App";

const LineDemo = () => {
  const data = JSON.parse(useContext(context));
  const totalYears = new Set(
    data.map((item) => item.date.substr(item.date.length - 4))
  );
  const totalRunsYearWise = [];
  totalYears.forEach((item) => {
    let runs = 0;
    data.forEach((data) => {
      const { date } = data;
      if (date.substr(date.length - 4) == item) {
        if (!isNaN(parseInt(data.batting_score))) {
          runs += parseInt(data.batting_score);
        }
      }
    });
    totalRunsYearWise.push({
      year: item,
      runs: runs,
    });
  });

  return (
    <>
      <div className="mw-100 pb-3">
        <h2 className="pt-5 pb-3 text-center" style={{ color: "#71C7E2" }}>
          Sachin Tendulkar's Total Runs Each Year
        </h2>
        <div style={{ paddingLeft: "1.5rem" }}>
          <LineChart
            width={1464}
            height={450}
            data={totalRunsYearWise}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year"/>
            <YAxis label={{ value: 'Runs', angle: -90, position: 'insideLeft', stroke:"#8884d8", strokeWidth: 1, fontSize:"1rem" }} />
            <Tooltip formatter={(value, name, props) => [`${value} Runs`]} />
            <Legend formatter={(value, name, props) => ["Years"]} wrapperStyle={{ fontWeight: "bold", fontSize:"1.05rem"}}/>
            <Line type="monotone" dataKey="runs" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default LineDemo;
