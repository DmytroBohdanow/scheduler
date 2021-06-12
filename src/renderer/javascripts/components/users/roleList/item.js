import React from 'react'
import EditIcon from 'edit.svg'

export const RoleItem = (props) => {

    const deleteRole = () => {
        console.log(props.id)
        window.electron.deleteRole(props.id)
    }

    return (
        <div className="role-item-box">
            <div className="role-item-name">{props.index + 1}. {props.name}</div>
            <div className="role-item-action-box">
                <div className="role-item-edit-btn"><EditIcon/></div>
                <div className="role-item-delete-btn" onClick={deleteRole}>&#10006;</div>
            </div>
        </div>
    )
}