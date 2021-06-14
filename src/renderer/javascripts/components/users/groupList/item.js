import React from 'react'
import EditIcon from 'edit.svg'

export const GroupItem = props => {

    return (
        <div className={(props.index + 1) % 2 === 0 ? 'group-item-box-even' : 'group-item-box-odd'}>
            <div className="group-item-name">{props.index + 1}. {props.name}</div>
            <div className="group-item-action-box">
                <div className="group-item-delete-btn-box">
                    <span className="group-item-delete-btn" onClick={() => {
                    props.deleteGroup(props.id)
                    }}>&#10006;</span>
                </div>
                <div className="group-item-edit-btn-box">
                    <span className="group-item-edit-btn"><EditIcon/></span>
                </div>
            </div>
        </div>
    )
}