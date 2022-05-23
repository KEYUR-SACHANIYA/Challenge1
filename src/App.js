import { createContext } from "react";
import PieDemo from "./PieDemo";
import LineDemo from "./LineDemo";
import BarDemo from "./BarDemo";
import TableDemo from "./TableDemo";
import data from "./sachin.json";
export const context = createContext();

function App() {
  const records = JSON.stringify(data);
  return (
    <>
      <context.Provider value={records}>
        <div className="bg-dark">
          <h1 className="text-center pt-4 pb-5 text-dark" style={{backgroundColor: "#71C7E2" }}>The Records Of God Of Cricketer <u>(Sachin Ramesh Tendulkar)</u></h1>
          <PieDemo />
          <LineDemo />
          <BarDemo />
          <TableDemo />
        </div>
      </context.Provider>
    </>
  );
}

export default App;
