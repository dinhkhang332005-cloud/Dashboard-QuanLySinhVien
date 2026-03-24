"use client"
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Jan',
    expense: 4000,
    income: 2400,
  },
  {
    name: 'Feb',
    expense: 3000,
    income: 1398,
  },
  {
    name: 'Mar',
    expense: 2000,
    income: 9800,
  },
  {
    name: 'Apr',
    expense: 1890,
    income: 3908,
  },
  {
    name: 'May',
    expense: 2780,
    income: 3908,
  },
  {
    name: 'Jun',
    expense: 1809,
    income: 4800,
  },
  {
    name: 'Jul',
    expense: 2390,
    income: 3800,
  },
  {
    name: 'Aug',
    expense: 2000,
    income: 4300,
  },{
    name: 'Sep',
    expense: 3400,
    income: 3060,
  },{
    name: 'Oct',
    expense: 3000,
    income: 4300,
  },{
    name: 'Nov',
    expense: 3600,
    income: 4100,
  },{
    name: 'Dev',
    expense: 1000,
    income: 2000,
  },
];
// #endregion

const Finance = () => {
  return (
    <div className='bg-white p-4 h-full w-full rounded'>
        <div>
            <div className='flex justify-between items-center mb-4'>
                    <h1 className='font-semibold text-lg'>Finance</h1>
                    <Image src="/moreDark.webp" alt="" height={20} width={20}/>
                  </div>
        </div>
        <div>
      <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '90%', maxHeight: '30vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="4 4" />
      <XAxis dataKey="name" axisLine={false} tickLine={false} tick ={{fill:"#d1d5db"}} tickMargin={10}/>
      <YAxis width="auto"  axisLine={false} tickLine={false} tick ={{fill:"#d1d5db"}} tickMargin={10}/>
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{paddingTop :"10px", paddingBottom:"30px"}} align='center'/>
      <Line  type="monotone" dataKey="expense" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={4} dot={{ strokeWidth: 2, r: 4 }}/>
      <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={4} dot={{ strokeWidth: 2, r: 4 }}/>
    </LineChart>
    </div>
    </div>
  )
}

export default Finance
