import React from 'react'
import EditIcon from 'edit.svg'

export const GroupItem = props => {
    
    const deleteGroup = () => {
        window.electron.deleteGroup(props.id)
    }

    return (
        <div className="group-item-box">
            <div className="group-item-name">{props.index + 1}. {props.name}</div>
            <div className="group-item-action-box">
                <div className="group-item-edit-btn"><EditIcon /></div>
                <div className="group-item-delete-btn" onClick={deleteGroup}>&#10006;</div>
            </div>
        </div>
    )
}