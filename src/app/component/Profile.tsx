import Image from 'next/image'

const Profile = () => {
  return (
    <div className='flex flex-1 p-4 bg-blue-300 rounded  gap-8 '>
      <div className='w-1/3' >
        <Image src="/pexels-photo-91227.webp" alt='' width={144} height={144} className='rounded-full w-36 h-36 object-cover'/>   
      </div>
      <div className='flex flex-col gap-2 w-2/3'>
        <div className='flex gap-4 items-center '>
            <h1 className='font-semibold text-xl'>Allan Grace</h1>
            <Image src="/update.webp" alt='' width={14} height={14}/>
        </div>
        <p className='text-xs font-semibold text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='flex flex-col gap-2 text-sm font-medium text-black-600'>
             <div className='flex items-center gap-2 '>
                <Image src="/blood.webp" alt='' width={14} height={14}/>
                <span className='text-xs font-black'>A+</span>
             </div>
             <div className='flex items-center gap-2'>
                <Image src="/date.webp" alt='' width={14} height={14}/>
                <span className='text-xs font-black'>January 2024</span>
             </div>
             <div className='flex items-center gap-2'>
                <Image src="/mail.webp" alt='' width={14} height={14}/>
                <span className='text-xs font-black'>Teacher@lms.com</span>
             </div>
             <div className='flex items-center gap-2'>
                <Image src="/phone.png" alt='' width={14} height={14}/>
                <span className='text-xs font-black'>+19 923 58578</span>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
