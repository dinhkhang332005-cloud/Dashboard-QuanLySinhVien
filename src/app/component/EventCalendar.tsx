"use client"
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const events =[
  {
    id : 1,
    title:"lorem ipsum dolor",
    time :"12:00 PM - 02:00 PM",
    description :"Lorem ipsum dolor sit amet."
  },
  {
    id : 2,
    title:"lorem ipsum dolor",
    time :"12:00 PM - 02:00 PM",
    description :"Lorem ipsum dolor sit amet."
  },
  {
    id : 3,
    title:"lorem ipsum dolor",
    time :"12:00 PM - 02:00 PM",
    description :"Lorem ipsum dolor sit amet."
  }
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-md p-4">
      <Calendar onChange={onChange} value={value} />
      <div className='flex justify-between items-center mt-6 mb-4'>
                          <h1 className='font-medium text-2xl'>Events</h1>
                          <Image src="/moreDark.webp" alt="" height={20} width={20}/>
                        </div>
      <div className='flex flex-col gap-4 '>
        {events.map((event)=>(
          <div key={event.id} className='border border-gray-100 p-4 rounded odd:border-t-blue-200 odd:border-t-4 even:border-t-4 even:border-t-purple-200'>
            <div className='flex justify-between items-center '>
              <h1 className='font-semibold'>{event.title}</h1>
              <span className='text-xs text-gray-500'>{event.time}</span>
            </div>
            <div>
              <h2 className='text-[14px] text-gray-500'>{event.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default EventCalendar
