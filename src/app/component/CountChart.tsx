"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#C3EBFA',
  },
];

const CountChart = () => {
  return (
    <div className='bg-white p-4 w-full h-full rounded-xl'>
      {/* top */}
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-lg'>Students</h1>
        <Image src="/moreDark.webp" alt='' width={20} height={20} className='cursor-pointer'/>
      </div>

      {/* chart */}
      {/* relative: QUAN TRỌNG ĐỂ CĂN GIỮA */}
      <div className='relative w-full h-[75%]'>
        
        {/* Bọc bằng ResponsiveContainer để biểu đồ full khung */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* ẢNH CĂN GIỮA */}
        <Image 
          src="/maleFemale.webp" 
          alt="" 
          width={50} 
          height={50} 
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      
      {/* bottom */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='rounded-full h-5 w-5 bg-[#C3EBFA]'></div>
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-500'>Boys (45%)</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='rounded-full h-5 w-5 bg-[#FAE27C]'></div>
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-500'>Girls (45%)</h2>
        </div>
      </div>
    </div>
  )
}

export default CountChart
