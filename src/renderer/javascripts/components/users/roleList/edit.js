import React from 'react'

export const RolesEdit = props => {

    const editRole = () => {

        const roles = props.roles
        const roleId = roles.findIndex(el => {
          return el.id === props.id
        })

        const name = document.getElementById(`role-edit-name-${props.index}`).value
        const color = document.getElementById(`role-edit-color-${props.index}`).value
        roles[roleId] = { id: props.id, name, color}

        props.setEdit(false)
        window.electron.rewriteRole(roles)
    }

    return (
        <div className="role-edit-box">
            <div className="role-edit-name-box">
                {props.index + 1}. <input className="role-edit-name" id={`role-edit-name-${props.index}`} placeholder="New name" defaultValue={props.name}></input>
            </div>
            <div className="role-edit-color-box">
                <input type="color" className="role-edit-color" id={`role-edit-color-${props.index}`} defaultValue={props.color}></input>
            </div>
            <div className="role-edit-action-box"><button className="save-role-btn" id="save-role-btn" onClick={editRole}>Save</button></div>
        </div>
    )
}