import React from 'react'
import EditIcon from 'edit.svg'

export const UsersItem = ({name}) => {
    return (
        <div className="users-item-box">
            <div className="users-item-name">{name}</div>
            <div className="users-item-action-box">
                <div className="users-item-edit-btn"><EditIcon/></div>
                <div className="users-item-delete-btn">&#10006;</div>
            </div>
        </div>
    )
}