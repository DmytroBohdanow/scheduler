import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { DateTime } from 'luxon'

export const NewUser = props => {

    const [btnDisabled, setBtnDisabled] = useState(true);

    const ifEmptyCheck = () => {
        document.getElementById("new-user-name").value.length <= 0 ?
        setBtnDisabled(true) :
        setBtnDisabled(false)
    }

    const handleKey = event => {
        if(document.getElementById("new-user-name").value.length > 0) {
            setBtnDisabled(false)
            if(event.key === 'Enter') {
                createNewUser()
            }
        } 
    }

    const createNewUser = () => {
        setBtnDisabled(true)
        const user = {
            id: nanoid(),
            name: document.getElementById("new-user-name").value,
            group: document.getElementById("new-user-group") === null ? 
                   'none' :
                    document.getElementById("new-user-group").value,
            createdAt: DateTime.local().toISO(),
        }
        document.getElementById("new-user-name").value = ''
        window.electron.saveUser(user)
    }
    return (
        <div className="new-user-box">
            <div className="new-user-title">Shall we add a new user?</div>
            <div>
            <label htmlFor="new-user-name" className="user-name-label">User name: </label>
            <input placeholder="Name of a new user" name="new-user-name" onKeyPress={handleKey} onChange={ifEmptyCheck} type="text" id="new-user-name" className="new-user-name" />
            </div><br/>
            {
                props.groups && props.groups.length > 0 ? 
                <div>
                    <label htmlFor="new-user-group" className="user-group-label">User's group: </label>
                    <select className="new-user-group" id="new-user-group" name="new-user-group">
                        {props.groups && props.groups.map((group) => {
                            return <option key={group.id} value={group.id}>{group.name}</option>
                        })}
                    </select>
                </div> 
                : <div className="no-groups">no groups</div>
            }
            <button disabled={btnDisabled} onClick={createNewUser} className="add-new-user-btn">Add</button>
        </div>
    )
}