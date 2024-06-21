import "./graph.scss";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", total: 6300 },
    { name: "Feb", total: 6000 },
    { name: "Mar", total: 4100 },
    { name: "Apr", total: 1100 },
    { name: "May", total: 2400 },
    { name: "Jun", total: 6000 },
    { name: "Jul", total: 2500 },
    { name: "Aug", total: 3300 },
    { name: "Sep", total: 6300 },
    { name: "Oct", total: 6000 },
    { name: "Nov", total: 2300 },
    { name: "Dec", total: 5100 },
];

const Graph = () => {
    return (
        <div className="graph">
            <div className="title">Last Year Revenue</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <YAxis stroke="gray" />
                    <CartesianGrid
                        strokeDasharray="3 3"
                        className=".chartGrid"
                    />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graph;
