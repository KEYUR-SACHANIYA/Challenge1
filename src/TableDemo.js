import React, { useContext } from "react";
import { context } from "./App";
const TableDemo = () => {
  const data = JSON.parse(useContext(context));

  return (
    <>
      <div className="mw-100 pb-3">
        <h2 className="pt-5 pb-3 text-center" style={{ color: "#71C7E2" }}>
          Sachin Tendulkar's Runs Per Match
        </h2>
        <div className="overflow-auto container" style={{ maxHeight: "75vh" }}>
          <table className="table table-dark text-center">
            <thead className="sticky-top">
              <tr>
                <th scope="col">Match</th>
                <th scope="col">Date</th>
                <th scope="col">Innings</th>
                <th scope="col">Runs</th>
                <th scope="col">Opposition</th>
                <th scope="col">Ground</th>
                <th scope="col">Match Result</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.date}</td>
                  <td>{data.batting_innings}</td>
                  <td>{data.batting_score}</td>
                  <td>{data.opposition}</td>
                  <td>{data.ground}</td>
                  <td>{data.match_result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableDemo;
