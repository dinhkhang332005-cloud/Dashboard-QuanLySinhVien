"use client"
import Image from 'next/image';
import { Pie, PieChart } from 'recharts';

// #region Sample data
const data = [
  { name: 'Group A', value: 92 , fill:'#ADD8E6' },
  { name: 'Group B', value: 8 , fill:'#FFFFE0'},
]

// #endregion
const Performance = () => {
  return (
    <div className='bg-white p-4 rounded-md h-80'>
        <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Performance</h1>
        <Image src="/moreDark.webp" alt="" width={16} height={16} />
      </div>
      <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="100%"
        innerRadius={40}
        fill="#8884d8"
      />
    </PieChart>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-3xl font-bold'>9.2</h1>
        <p className='text-xs text-gray-300'>of 10 max LTS</p>
      </div>
      <h2 className='font-medium absolute bottom-16 left-0 right-0 m-auto text-center'>9.2 of 10 max LTS 1st September - 2 september</h2>
    </div>
  )
}

export default Performance
