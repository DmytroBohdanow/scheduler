import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export const SchedulerCalendar = props => {

    return (
        <div className="scheduler-calendar-box">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: "title",
                    center: "dayGridMonth,timeGridWeek,timeGridDay",
                    right: "prev,next today"
                }}
                initialView="dayGridMonth"
                droppable={true}
                weekends={true}
                editable={true}
            />
        </div>
    )
}