import React, { useState } from 'react'
import { UsersItem } from './item'
import { orderBy } from 'lodash'

export const UsersList = props => {
    const [users, setUsers] = useState(props.users)
    console.log(users)

    const deleteUser = id => {
        const updatedUsers = props.users.filter(el => {
            return el.id !== id
        })
        findUser(updatedUsers)
        window.electron.deleteUser(id)
    }

    const findUser = data => {
        setUsers(data)
        if (document.getElementById('users-search-field').value.length > 0) {
            const usersFiltred = data.filter(user => {
                return user.name.includes(document.getElementById('users-search-field').value)
            })
            setUsers(usersFiltred)
        } else {
            setUsers(data)
        }
    }

    return (
        <div className='users-list-box'>
            <div className="users-search-field-box">
            <textarea placeholder="...lost someone?" id="users-search-field" onChange={()=> {findUser(props.users)}} className="users-search-field"></textarea>
            </div>
            <div className='users-list-legend'>
                <div>#. name</div>
                <div>group</div>
                <div>actions</div>
            </div>
            {users && users.length > 0 ? users && users.map((user, index) => {
                const group = props.groups.filter(el => {
                  return  el.id === user.group 
                })
                
                return (
                    
                    <UsersItem 
                        key={user.id} 
                        id={user.id} 
                        index={index} 
                        group={group.length > 0 ? group[0].name : 'none'} 
                        name={user.name}
                        findUser={findUser}
                        deleteUser={deleteUser}
                        users={props.users}
                    />
                )
            }) :
            <div className='no-users'>Can't find anyone. Should we add a person?</div>
            }
        </div>
    )
}