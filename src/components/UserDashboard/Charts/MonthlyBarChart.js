import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'March',
    uv: 4000,
    female: 2400,
    male: 6500,
  },
  {
    name: 'April',
    uv: 3000,
    female: 1398,
    male: 2210,
  },
  {
    name: 'May',
    uv: 2000,
    female: 9800,
    male: 2290,
  },
  {
    name: 'June',
    uv: 2780,
    female: 3908,
    male: 2000,
  },
  {
    name: 'July',
    uv: 1890,
    female: 4800,
    male: 2181,
  },
  {
    name: 'Aug',
    uv: 2390,
    female: 3800,
    male: 2500,
  },
  {
    name: 'Sep',
    uv: 3490,
    female: 4300,
    male: 2100,
  },
];

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 10},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const SingleLineBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

SingleLineBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

const MonthlyBarChart = () => {
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

    return <path d={getPath(x, y, width, height, [6, 6, 6, 6])} stroke="none" fill={fill} />;
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
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Bar dataKey="male" fill="#CBCAC9" shape={<SingleLineBar />} stackId="a" barSize={10} >

        </Bar>
        <Bar dataKey="female" barSize={10} shape={<TriangleBar />} stackId="a" fill="#FCC2F4" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyBarChart;