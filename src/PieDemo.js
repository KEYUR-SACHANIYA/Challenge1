import { useContext } from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { context } from './App';

const PieDemo = () => {
    const data = JSON.parse(useContext(context));
    const totalOppositionTeam = new Set(data.map((item) => item.opposition));
    const totalRunsAgainstOppositionTeam = [];

    totalOppositionTeam.forEach((item) => {
        let runs = 0;
        data.forEach((data) => {
            if (data.opposition == item) {
                if (!isNaN(parseInt(data.batting_score))) {
                    runs += parseInt(data.batting_score);
                }
            }
        })
        totalRunsAgainstOppositionTeam.push({
            team: item,
            runs: runs
        });
    });

    const COLORS = ["#71C7E2", "#F19195", "#EEC151", "#BFD2D6", "#815799", "#Ad5D8F", "#DF5970", "#508AB2", "#EF553C", "#95D4A3", "#3D4A81", "#CFA0BE", "#A4BF43", "#71B57D", "#B19C89"];

    return (
        <>
            <div className='mw-100 pb-3'>
                <h2 className='pt-4 pb-3 text-center' style={{ color: "#71C7E2" }}>Sachin Tendulkar's Total Runs Against Individual Team</h2>
                <div style={{ paddingLeft: "15rem" }}>
                    <PieChart width={1000} height={600}>
                        <Pie data={totalRunsAgainstOppositionTeam} dataKey="runs" nameKey="team" innerRadius={0} outerRadius={250} label={data => `${data.runs} runs`}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value, name, props) => [`${value} runs`, name]} />
                        <Legend align='right' wrapperStyle={{ fontSize: "1.2rem", paddingLeft: "7rem" }} layout='vertical' height={540} width={300} />
                    </PieChart>
                </div>
            </div>
        </>
    )
}

export default PieDemo