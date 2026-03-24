import Announcements from '@/app/component/Announcements'
import Performance from '@/app/component/Performance'
import Profile from '@/app/component/Profile'
import ReactBigSchedule from '@/app/component/ReactBigSchedule'
import Image from 'next/image'  
import Link from 'next/link'


const ProfileTeacherPage = () => {
  return (
    <div className=' flex-1 p-4 gap-4  flex flex-col xl:flex-row'>
        {/* Left */}
      <div className='w-full xl:w-2/3 '>
      {/* Top */}
        <div className='flex flex-col gap-4 lg:flex-row '>
          <Profile/>
            {/* SmallCard */}
            <div className=' flex-1 grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Card */}
              <div className='bg-white rounded-md p-4 flex  gap-4'>
                <Image src="/singleAttendance.webp" alt='' width={24} height={24} className='w-6 h-6 ' />
                <div>
                  <h1 className='text-xl font-semibold'>90%</h1>
                  <span className='text-sm text-gray-400'>Attendance</span>
                </div>
              </div>
              {/* Card */}
              <div className='bg-white rounded-md p-4 flex  gap-4'>
                <Image src="/singleBranch.webp" alt='' width={24} height={24} className='w-6 h-6 ' />
                <div>
                  <h1 className='text-xl font-semibold'>2</h1>
                  <span className='text-sm text-gray-400'>Branches</span>
                </div>
              </div>
              {/* Card */}
              <div className='bg-white rounded-md p-4 flex  gap-4'>
                <Image src="/singleLesson.webp" alt='' width={24} height={24} className='w-6 h-6' />
                <div>
                  <h1 className='text-xl font-semibold'>9</h1>
                  <span className='text-sm text-gray-400'>Lesson</span>
                </div>
              </div>
              {/* Card */}
              <div className='bg-white rounded-md p-4 flex  gap-4'>
                <Image src="/singleClass.webp" alt='' width={24} height={24} className='w-6 h-6' />
                <div>
                  <h1 className='text-xl font-semibold'>5</h1>
                  <span className='text-sm text-gray-400'>Class</span>
                </div>
              </div>
            </div>
            
        </div>
        {/* bottom */}
        <div className='mt-4 bg-white rounded-md  p-4 h-[800px]'>
          <h1>Teacher Schedule</h1>
          <ReactBigSchedule/>
        </div>
      </div>
      {/* Right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-4'>
      <div className='bg-white rounded-xl p-4 '>
        <h1 className='text-xl font-black'>ShortCut</h1>
        <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-400'>
          <Link href="/" className='p-4 rounded-md bg-amber-300'>Teacher Classes</Link>
          <Link href="/" className='p-4 rounded-md bg-blue-300 '>Teacher Student</Link>
          <Link href="/" className='p-4 rounded-md bg-red-400 '>Teacher Lessons</Link>
          <Link href="/" className='p-4 rounded-md bg-orange-400 '>Teacher Exam</Link>
          <Link href="/" className='p-4 rounded-md bg-pink-400 '>Teacher Asigment</Link>
        </div>
      </div>
        {/* <Performance/> */}
        <Announcements/>
      </div>
    </div>
  )
}

export default ProfileTeacherPage
