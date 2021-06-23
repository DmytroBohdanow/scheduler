import React from 'react'

export const UsersEdit = props => {

    const editUser = () => {

        const users = props.users
        const usersId = users.findIndex(el => {
          return el.id === props.id
        })

        const group = document.getElementById(`users-edit-group-${props.index}`).value
        const name = document.getElementById(`users-edit-name-${props.index}`).value
    
        users[usersId] = { id: props.id, name, group }

        props.setEdit(false)
        props.findUser(users)
        window.electron.rewriteUser(users)
    }

    return (
        <div className="users-edit-box">
            <div className="users-edit-name-box">
                {props.index + 1}. <input className="users-edit-name" id={`users-edit-name-${props.index}`} placeholder="New name" defaultValue={props.name}></input>
            </div>
            {
                props.groups && props.groups.length > 0 ? 
                <div className="users-edit-group-box">
                    <label htmlFor="users-edit-group" className="users-edit-group-label">User's group: </label>
                    <select className="users-edit-group" id={`users-edit-group-${props.index}`} name="users-edit-group" defaultValue={props.group === 'none' ? 'none' : props.groupId}>
                        <option value="none">none</option>
                        {props.groups && props.groups.map((group) => {
                            return <option key={group.id} value={group.id}>{group.name}</option>
                        })}
                    </select>
                </div> 
                : <div className="no-groups">no groups</div>
            }
            <div className="users-edit-action-box"><button className="save-user-btn" id="save-user-btn" onClick={editUser}>Save</button></div>
        </div>
    )
}