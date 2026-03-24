"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import {  calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const ReactBigSchedule = () => {
   const [view,setView] = useState<View>(Views.WORK_WEEK);

   const handelOnChangeView =(selectView:View)=>{
      setView(selectView);
   }
  return (
    <div>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week","day"]}
      view={view}
      onView={handelOnChangeView}
      defaultDate={new Date(2026, 0, 12)}
      style={{ height: "1000px" }}
      min={new Date(2026, 0, 12, 8, 0, 0)}
      max={new Date(2026, 0, 12, 18, 0, 0)}
      
    />
  </div>
  )
}

export default ReactBigSchedule
