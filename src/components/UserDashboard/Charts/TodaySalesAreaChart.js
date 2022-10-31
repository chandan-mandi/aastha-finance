import React from 'react';
import {
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 1800,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 4490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 2490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 5180,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 4290,
        pv: 4300,
        amt: 2100,
    },
];

const TodaySalesAreaChart = () => {
    return (
        <ResponsiveContainer width="100%" height={150}>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorU" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FCC2F4" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#FCC2F4" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#000" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#000" stopOpacity={0} />
                    </linearGradient>
                </defs>
                {/* <XAxis dataKey="name" /> */}
                <YAxis axisLine={false} />
                <CartesianGrid strokeDasharray="1" vertical={false} />
                <Tooltip />
                <YAxis axisLine={false} />
                <Area type="monotone" dataKey="uv" stroke="#FCC2F4" fillOpacity={1} fill="url(#colorU)" />
                {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default TodaySalesAreaChart;