import React from 'react'

export const StatusesEdit = props => {

    const editStatus = () => {

        const statuses = props.statuses
        const statusId = statuses.findIndex(el => {
          return el.id === props.id
        })

        const name = document.getElementById(`status-edit-name-${props.index}`).value
        const color = document.getElementById(`status-edit-color-${props.index}`).value
        statuses[statusId] = { id: props.id, name, color }

        props.setEdit(false)
        window.electron.rewriteStatus(statuses)
    }

    return (
        <div className="status-edit-box">
            <div className="status-edit-name-box">
                {props.index + 1}. <input className="status-edit-name" id={`status-edit-name-${props.index}`} placeholder="New name" defaultValue={props.name}></input>
            </div>
            <div className="status-edit-color-box">
                {props.index + 1}. <input className="status-edit-color" type="color" id={`status-edit-color-${props.index}`} defaultValue={props.color}></input>
            </div>
            <div className="status-edit-action-box"><button className="save-status-btn" id="save-status-btn" onClick={editStatus}>Save</button></div>
        </div>
    )
}