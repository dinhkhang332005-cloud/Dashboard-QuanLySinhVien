import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 '>
        {/* SEARCH  */}
      <div className='hidden md:flex border rounded-2xl border-gray-400 items-center gap-2 px-2 py-1'>
        <Image src="/search.webp" alt='' height={14} width={14} className=' '/>
        <input type="text" placeholder='Search...' className='outline-none' />
      </div>
      {/* ICON $ USER */}
      <div className='flex items-center justify-end p-4 gap-4 w-full'>
        <div className=' bg-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>
            <Image src="/message.webp" alt='' width={20} height={20}  />
        </div>
        <div className=' bg-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer relative'>
            <Image src="/announcement.webp" alt='' width={20} height={20}/>
            <div className='absolute text-white bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center -top-3 -right-3 text-xl '>1</div>
        </div>
        <div className='flex flex-col'>
            <span className='font-boild text-[16px] '>Jone Doe</span>
            <span className='text-gray-700 font-light text-[10px] text-right'>Admin</span>
        </div>
        <div >
            <Image src="/avatar.webp" alt='' width={36} height={36} className='rounded-full '/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
