import React, { useState } from 'react'
import { GroupItem } from './item'
import { nanoid } from 'nanoid'
import { DateTime } from 'luxon'

export const GroupList = props => {
    
    const [btnDisabled, setBtnDisabled] = useState(true);

    const ifEmptyCheck = () => {
        document.getElementById("new-group-name").value.length <= 0 ?
        setBtnDisabled(true) :
        setBtnDisabled(false)
    }

    const deleteGroup = id => {
        window.electron.deleteGroup(id)
    }

    const handleKey = event => {
        if(document.getElementById("new-group-name").value.length > 0) {
            setBtnDisabled(false)
            if(event.key === 'Enter') {
                createNewGroup()
            }
        } 
    }

    const createNewGroup = () => {
        setBtnDisabled(true)
        let group = {
            id: nanoid(),
            name: document.getElementById("new-group-name").value,
            color: document.getElementById("new-group-color").value,
            createdAt: DateTime.local().toISO(),
        }
        document.getElementById("new-group-name").value = ''
        window.electron.saveGroup(group)
    }

    return (
        <div className="group-list-box">
            <div className="group-list-title">Group list</div>
            <div className="new-group-form">
                <input name="new-group-name" id="new-group-name" placeholder="Name of a new group" onChange={ifEmptyCheck} onKeyPress={handleKey} className="new-group-name" />
                <input name="new-group-color" type="color" id="new-group-color" defaultValue="#ffffff" className="new-group-color" />
                <button disabled={btnDisabled} className="new-group-add-btn" id="new-group-add-btn" onClick={createNewGroup}>Add</button>
            </div>
            <div className='group-list-legend'>
                <div>#. group</div>
                <div>color</div>
                <div>actions</div>
            </div>
            <div className="group-list">
            {props.groups && props.groups.length > 0 ? props.groups && props.groups.map((group, index) => {
                return <GroupItem key={group.id} id={group.id} color={group.color} deleteGroup={deleteGroup} name={group.name} groups={props.groups} index={index}/>
            }) :
            <div className='no-groups'>Can't find anything. Should we add a group?</div>
            }
            </div>
        </div>
    )
}