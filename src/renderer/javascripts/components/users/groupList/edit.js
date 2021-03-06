import React from 'react'

export const GroupsEdit = props => {

    const editRole = () => {

        const groups = props.groups
        const groupId = groups.findIndex(el => {
          return el.id === props.id
        })

        const name = document.getElementById(`group-edit-name-${props.index}`).value
        const color = document.getElementById(`group-edit-color-${props.index}`).value
        groups[groupId] = { id: props.id, name, color }

        props.setEdit(false)
        window.electron.rewriteGroup(groups)
    }

    return (
        <div className="group-edit-box">
            <div className="group-edit-name-box">
                {props.index + 1}. <input className="group-edit-name" id={`group-edit-name-${props.index}`} placeholder="New name" defaultValue={props.name}></input>
            </div>
            <div className="group-edit-color-box">
                <input className="group-edit-color" type="color" id={`group-edit-color-${props.index}`} defaultValue={props.color}></input>
            </div>
            <div className="group-edit-action-box"><button className="save-group-btn" id="save-group-btn" onClick={editRole}>Save</button></div>
        </div>
    )
}