import React, { useState } from 'react'
import EditIcon from 'edit.svg'
import { StatusesEdit  } from './edit'

export const StatusItem = (props) => {

    const [edit, setEdit] = useState(false)

    return (
        <>
        <div className={(props.index + 1) % 2 === 0 ? 'status-item-box-even' : 'status-item-box-odd'}>
            <div className="status-item-name">{props.index + 1}. {props.name}</div>
            <div className="status-item-action-box">
                <div className="status-item-delete-btn-box">
                    <span className="status-item-delete-btn" onClick={() => {
                    props.deleteStatus(props.id)
                    }}>&#10006;</span>
                </div>
                <div className="status-item-edit-btn-box">
                    <span className="status-item-edit-btn" onClick={() => {
                        setEdit(!edit)
                    }}><EditIcon/></span>
                </div>
            </div>
        </div>
        { edit ? <StatusesEdit 
            key={props.id} 
            id={props.id} 
            index={props.index} 
            name={props.name}
            statuses={props.statuses}
            setEdit={setEdit}
        /> 
        : null }
    </>
    )
}