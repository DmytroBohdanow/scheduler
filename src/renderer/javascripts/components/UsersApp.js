import React from 'react'
import { UsersMenu } from './usersMenu'
import { TitlebarHandlers } from './titlebarHandlers'
import { UsersSearchField } from './usersSearchField'
import { UsersList } from './usersList'

export const UsersApp = () => {
    return (
        <>
        <TitlebarHandlers />
        <UsersMenu />
        <UsersSearchField />
        <UsersList />
        </>
    )
}