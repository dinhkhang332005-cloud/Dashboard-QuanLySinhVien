import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-xl odd:bg-amber-300 even:bg-blue-300 p-4 flex-1 min-w-[10px]'>
      <div className='flex justify-between items-center '>
        <span className='bg-white text-green-500 rounded-2xl text-[10px] px-2 py-1'>2024/25</span>
        <Image src="/more.webp" alt='' width={12} height={12} className=''/>
      </div>
      <div className='gap-2 py-2'>
        <h1 className='text-[24px] font-semibold  '>1234</h1>
        <h2 className='text-gray-500 font-medium text-[14px]'>{type}</h2>
      </div>
    </div>
  )
}

export default UserCard
