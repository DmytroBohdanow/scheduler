import React, { useState } from 'react'
import EditIcon from 'edit.svg'
import { RolesEdit } from './edit'

export const RoleItem = props => {

    const [edit, setEdit] = useState(false)

    return (
        <>
        <div  className={(props.index + 1) % 2 === 0 ? 'role-item-box-even' : 'role-item-box-odd'}>
            <div className="role-item-name">{props.index + 1}. {props.name}</div>
            <div className="role-item-action-box">
                <div className="role-item-delete-btn-box">
                    <span className="role-item-delete-btn" onClick={() => {
                    props.deleteRole(props.id)
                    }}>&#10006;</span>
                </div>
                <div className="role-item-edit-btn-box">
                    <span className="role-item-edit-btn" onClick={() => {
                        setEdit(!edit)
                    }}><EditIcon/></span>
                </div>
            </div>
        </div>
            { edit ? <RolesEdit 
                key={props.id} 
                id={props.id} 
                index={props.index} 
                name={props.name}
                roles={props.roles}
                setEdit={setEdit}
            /> 
            : null }
        </>
    )
}