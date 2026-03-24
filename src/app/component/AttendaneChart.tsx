"use client"
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


// #region Sample data
const data = [
  {
    name: 'Mon',
    pv: 40,
    uv: 24,
  },
  {
    name: 'Tus',
    pv: 30,
    uv: 13,
  },
  {
    name: 'Web',
    pv: 20,
    uv: 98,
  },
  {
    name: 'Thur',
    pv: 27,
    uv: 39,
  },
  {
    name: 'Fri',
    pv: 18,
    uv: 48,
  },
];

// #endregion


const AttendaneChart = () => {
  return (
    <div className='bg-white p-4 h-full w-full rounded'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-semibold text-lg'>Attendenct</h1>
        <Image src="/moreDark.webp" alt="" height={20} width={20}/>
      </div>
      <div className='flex gap-4 my-6'>
        <div className='flex gap-2'>
          <div className='bg-blue-300 rounded-full w-4 h-4'></div>
          <h1 className='text-blue-300 text-xs'>prensent</h1>
        </div>
        <div className='flex gap-2'>
          <div className='bg-yellow-300 rounded-full w-4 h-4'></div>
          <h1 className='text-yellow-300 text-xs'>absent</h1>
        </div>
      </div>
      <div>
        <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      width={500}
      height={300}
      barSize={20}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
      <XAxis dataKey="name"  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
      <YAxis width="auto" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
      <Tooltip />
      <Bar dataKey="pv" fill="#93C5FD" activeBar={{ fill: 'pink', stroke: 'green' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="uv" fill="#FFF3B0" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
    </BarChart>
      </div>
    </div>
  )
}

export default AttendaneChart
