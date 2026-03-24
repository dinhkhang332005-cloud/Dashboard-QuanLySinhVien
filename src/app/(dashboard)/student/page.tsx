import Announcements from '@/app/component/Announcements'
import EventCalendar from '@/app/component/EventCalendar'
import ReactBigSchedule from '@/app/component/ReactBigSchedule'
import React from 'react'

const StudentPage = () => {
  return (
    <div  className='p-4 gap-4 flex flex-col xl:flex-row'>
      {/* Left */}
     <div className='w-full xl:w-2/3 gap-8 flex flex-col'>
      <div className='bg-white p-4 h-full rounded'>
        <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
        <ReactBigSchedule/>
      </div>
     </div>
     {/* right */}
     <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <EventCalendar/>
      <Announcements/>
     </div>
    </div>
  )
}

export default StudentPage
