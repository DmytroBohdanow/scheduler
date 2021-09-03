import React, { useState } from 'react'
import EditIcon from 'edit.svg'
import { GroupsEdit } from './edit'

export const GroupItem = props => {

    const [edit, setEdit] = useState(false)

    return (
        <>
        <div className={(props.index + 1) % 2 === 0 ? 'group-item-box-even' : 'group-item-box-odd'}>
            <div className="group-item-name">{props.index + 1}. <span style={{color: props.color}}>{props.name}</span></div>
            <div className="group-item-color" style={{color: props.color}}>{props.color}</div>
            <div className="group-item-action-box">
                <div className="group-item-delete-btn-box">
                    <span className="group-item-delete-btn" onClick={() => {
                    props.deleteGroup(props.id)
                    }}>&#10006;</span>
                </div>
                <div className="group-item-edit-btn-box">
                    <span className="group-item-edit-btn" onClick={() => {
                        setEdit(!edit)
                    }}><EditIcon/></span>
                </div>
            </div>
        </div>
        { edit ? <GroupsEdit 
            key={props.id} 
            id={props.id} 
            index={props.index} 
            color={props.color}
            name={props.name}
            groups={props.groups}
            setEdit={setEdit}
        /> 
        : null }
        </>
    )
}