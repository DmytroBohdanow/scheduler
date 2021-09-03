import React from 'react'

export const SchedulerMenu = props => {

    const showNewScheduler = () => {
        props.setLoadSchedule(false)
        props.setNewSchedule(!props.newSchedule)
    }

    const showLoadScheduler = () => {
        props.setNewSchedule(false)
        props.setLoadSchedule(!props.loadSchedule)
    }

    return (
        <div className="schedule-menu">
            <div className="schedule-menu-item" onClick={showNewScheduler}>New schedule</div>
            <div className="schedule-menu-item" onClick={showLoadScheduler}>Load schedule from the file</div>
        </div>
    )
}