import React, { useState } from 'react'
import { RoleItem } from './item'
import { nanoid } from 'nanoid'
import { DateTime } from 'luxon'

export const RoleList = props => {

    const [btnDisabled, setBtnDisabled] = useState(true);

    const ifEmptyCheck = () => {
        document.getElementById("new-role-name").value.length <= 0 ?
        setBtnDisabled(true) :
        setBtnDisabled(false)
    }

    const handleKey = event => {
        if(document.getElementById("new-role-name").value.length > 0) {
            setBtnDisabled(false)
            if(event.key === 'Enter') {
                createNewRole()
            }
        } 
    }

    const createNewRole = () => {
        setBtnDisabled(true)
        let role = {
            id: nanoid(),
            name: document.getElementById("new-role-name").value,
            createdAt: DateTime.local().toISO(),
        }
        document.getElementById("new-role-name").value = ''
        window.electron.saveRole(role)
    }

    return (
        <div className="role-list-box">
            <div className="role-list-title">Role list</div>
            <div className="new-role-form">
                <input name="new-role-name" id="new-role-name" placeholder="Name of a new role" onChange={ifEmptyCheck} onKeyPress={handleKey} className="new-role-name" />
                <button disabled={btnDisabled} className="new-role-add-btn" onClick={createNewRole}>Add</button>
            </div>
            <div className="role-list">
            {props.roles && props.roles.length > 0 ? props.roles && props.roles.map((role, index) => {
                return <RoleItem key={role.id} id={role.id} name={role.name} index={index}/>
            }) :
            <div className='no-roles'>Can't find anything. Should we add a role?</div>
            }
            </div>
        </div>
    )
}