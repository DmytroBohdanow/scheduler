import React, { useState } from 'react'
import { TitlebarHandlers } from '../helpers/titlebarHandlers'
import { SchedulerMenu } from './schedulerMenu'
import { NewSchedule } from './newSchedule'
import { LoadSchedule } from './loadSchedule'
import { SchedulerSlider } from './schedulerSlider'

export const SchedulerApp = props => {

    const [newSchedule, setNewSchedule] = useState(false)
    const [loadSchedule, setLoadSchedule] = useState(false)
    const [slider, setSlider] = useState(false)
    const [role, setRole] = useState('')
    const [status, setStatus] = useState('')

    return (
        <>
            <TitlebarHandlers />
            {!newSchedule && !loadSchedule ? <SchedulerMenu
                newSchedule={newSchedule}
                setNewSchedule={setNewSchedule}
                loadSchedule={loadSchedule}
                setLoadSchedule={setLoadSchedule}
            /> : null}
            <SchedulerSlider
                roles={props.data.roles}
                users={props.data.users}
                groups={props.data.groups}
                statuses={props.data.statuses}
                slider={slider}
                setSlider={setSlider} 
                role={role}
                setRole={setRole}
                status={status}
                setStatus={setStatus}
            />

            <div className="calendar-box" id="calendar-box">
                {newSchedule ? <NewSchedule /> : null}
                {loadSchedule ? <LoadSchedule /> : null}
            </div>

        </>
    )
}