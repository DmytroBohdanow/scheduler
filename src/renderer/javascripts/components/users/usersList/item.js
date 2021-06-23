import React, { useState } from 'react'
import EditIcon from 'edit.svg'
import { UsersEdit } from './edit'

export const UsersItem = props => {

    const [edit, setEdit] = useState(false)
    
    return (
        <>
        <div className={(props.index + 1) % 2 === 0 ? 'users-item-box-even' : 'users-item-box-odd'}>
            <div className="users-item-name">{props.index + 1}. {props.name}</div>
            <div 
            className={
            props.group === 'none' ?
            'users-item-group-none' :
            'users-item-group'
            }
            >
              {props.group}
            </div>
            <div className="users-item-action-box">
                <div className="users-item-delete-btn-box">
                    <span className="users-item-delete-btn" onClick={() => {
                    props.deleteUser(props.id)
                    }}>&#10006;</span>
                </div>
                <div className="users-item-edit-btn-box">
                    <span className="users-item-edit-btn" onClick={() => {
                        setEdit(!edit)
                    }}><EditIcon/></span>
                </div>
            </div>
        </div>
            { edit ? <UsersEdit 
                        key={props.id} 
                        id={props.id} 
                        groupId={props.groupId}
                        index={props.index} 
                        group={props.group} 
                        groups={props.groups} 
                        name={props.name}
                        findUser={props.findUser}
                        users={props.users}
                        setEdit={setEdit}
                    /> 
                    : null }
        </>
    )
}