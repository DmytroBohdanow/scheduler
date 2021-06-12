import React, { useState } from 'react'
import { StatusItem } from './item'
import { nanoid } from 'nanoid'
import { DateTime } from 'luxon'

export const StatusList = props => {

    const [btnDisabled, setBtnDisabled] = useState(true);

    const ifEmptyCheck = () => {
        document.getElementById("new-status-name").value.length <= 0 ?
        setBtnDisabled(true) :
        setBtnDisabled(false)
    }

    const handleKey = event => {
        if(document.getElementById("new-status-name").value.length > 0) {
            setBtnDisabled(false)
            if(event.key === 'Enter') {
                createNewStatus()
            }
        } 
    }

    const createNewStatus = () => {
        setBtnDisabled(true)
        let status = {
            id: nanoid(),
            name: document.getElementById("new-status-name").value,
            createdAt: DateTime.local().toISO(),
        }
        document.getElementById("new-status-name").value = ''
        window.electron.saveStatus(status)
    }

    return (
        <div className="status-list-box">
            <div className="status-list-title">Status list</div>
            <div className="new-status-form">
                <input name="new-status-name" id="new-status-name" placeholder="Name of a new status" onChange={ifEmptyCheck} onKeyPress={handleKey} className="new-status-name" />
                <button disabled={btnDisabled} className="new-status-add-btn" onClick={createNewStatus}>Add</button>
            </div>
            <div className="status-list">
            {props.statuses && props.statuses.length > 0 ? props.statuses && props.statuses.map((status, index) => {
                return <StatusItem key={status.id} id={status.id} name={status.name} index={index}/>
            }) :
            <div className='no-statuses'>Can't find anything. Should we add a status?</div>
            }
            </div>
        </div>
    )
}