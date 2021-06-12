import React from 'react'
import EditIcon from 'edit.svg'

export const StatusItem = (props) => {

    const deleteStatus = () => {
        console.log(props.id)
        window.electron.deleteStatus(props.id)
    }

    return (
        <div className="status-item-box">
            <div className="status-item-name">{props.index + 1}. {props.name}</div>
            <div className="status-item-action-box">
                <div className="status-item-edit-btn"><EditIcon/></div>
                <div className="status-item-delete-btn" onClick={deleteStatus}>&#10006;</div>
            </div>
        </div>
    )
}