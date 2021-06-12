import React, { useState } from 'react'
import { UsersMenu } from './usersMenu'
import { TitlebarHandlers } from '../helpers/titlebarHandlers'
import { UsersList } from './usersList'
import { NewUser } from './newUser'
import { GroupList } from './groupList'
import { RoleList } from './roleList'
import { StatusList } from './statusList'

export const UsersApp = props => {
    const [usersListModal, setUsersListModal] = useState(true)
    const [usersNewModal, setUsersNewModal] = useState(false)
    const [groupModal, setGroupModal] = useState(false)
    const [roleModal, setRoleModal] = useState(false)
    const [statusModal, setStatusModal] = useState(false)

    return (
        <>
        <TitlebarHandlers />
        <UsersMenu
         setNewUserState={setUsersNewModal}
         setGroupListState={setGroupModal}
         setRoleListState={setRoleModal}
         setStatusListState={setStatusModal}
         setUsersListState={setUsersListModal}
         usersListState={usersListModal}
         newUserState={usersNewModal}
         groupListState={groupModal}
         roleListState={roleModal}
         statusListState={statusModal}
         />
        {usersListModal ? <UsersList users={props.users} groups={props.groups}/> : <></>}
        {usersNewModal ? <NewUser users={props.users} groups={props.groups}/> : <></>}
        {groupModal ? <GroupList groups={props.groups}/> : <></>}
        {roleModal ? <RoleList roles={props.roles}/> : <></>}
        {statusModal ? <StatusList statuses={props.statuses}/> : <></>}
        </>
    )
}