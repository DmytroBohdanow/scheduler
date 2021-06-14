import React from 'react'
import EditIcon from 'edit.svg'

export const StatusItem = (props) => {

    return (
        <div className={(props.index + 1) % 2 === 0 ? 'status-item-box-even' : 'status-item-box-odd'}>
            <div className="status-item-name">{props.index + 1}. {props.name}</div>
            <div className="status-item-action-box">
                <div className="status-item-delete-btn-box">
                    <span className="status-item-delete-btn" onClick={() => {
                    props.deleteStatus(props.id)
                    }}>&#10006;</span>
                </div>
                <div className="status-item-edit-btn-box">
                    <span className="status-item-edit-btn"><EditIcon/></span>
                </div>
            </div>
           
        </div>
    )
}