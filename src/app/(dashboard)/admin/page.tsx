import Announcements from '@/app/component/Announcements'
import AttendaneChart from '@/app/component/AttendaneChart'
import CountChart from '@/app/component/CountChart'
import EventCalendar from '@/app/component/EventCalendar'
import Finance from '@/app/component/Finance'
import UserCard from '@/app/component/UserCard'


const AdminPage = () => {
  return (
    <div className='p-4 gap-4 flex flex-col md:flex-row'>
      {/* Left */}
      <div className='w-full lg:w-2/3 gap-8 flex flex-col'>
      <div className='flex gap-4 justify-between'>
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
      </div>
        {/* mid */}
      <div className='flex flex-col gap-4 lg:flex-row'>

          {/* count chart */}
      <div className='w-full lg:w-1/3 h-[450px]'>
          <CountChart/>
      </div >

        {/* attendent chart */}
      <div  className='w-full lg:w-2/3 h-[450px]'>
          <AttendaneChart/>
      </div>
      </div>
      {/* botoom */}
      <div className='w-full h-[306px]'>
        <Finance/>
      </div>
      </div>
      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
          <EventCalendar/>
          <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage
