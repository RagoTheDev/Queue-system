import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function CalendarDesign() {
    return (
      <div className='calendar'>
        <h2>Appointmensts Calendar</h2>
        <Calendar 
           className='calendar--fix'
        />
      </div>  
    )
}

export default CalendarDesign;