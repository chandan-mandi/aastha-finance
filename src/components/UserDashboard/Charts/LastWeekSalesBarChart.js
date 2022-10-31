import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const data = [
    {
        name: 'Page A',
        uv: 4000,
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
];

const LastWeekSalesBarChart = () => {

    const getPath = (x, y, width, height, radius) => {
        const [tl, tr, bl, br] = radius;
       return `M${x},${y + tl}
		a${tl},${tl} 0 0 1 ${tl},${-tl}
		h${width - tl - tr}
		a${tr},${tr} 0 0 1 ${tr},${tr}
		v${height - tr - br}
		a${br},${br} 0 0 1 ${-br},${br}
		h${bl + (br - width)}
		a${bl},${bl} 0 0 1 ${-bl},${-bl}
		z`;
}

    const TriangleBar = (props) => {
        console.log('trianglebar', props);
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height, [6,6,6,6])} stroke="none" fill={fill} />;
    };

    TriangleBar.propTypes = {
        fill: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        width: 50,
        height: PropTypes.number,
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="pv" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="pv" shape={<TriangleBar />} fill="#FCC2F4" />
                <Bar dataKey="uv" shape={<TriangleBar />} fill="#767ac8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default LastWeekSalesBarChart;