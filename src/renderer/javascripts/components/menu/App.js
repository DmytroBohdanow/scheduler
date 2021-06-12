import React from 'react'
import { MainMenu } from './mainMenu'
import { TitlebarHandlers } from '../helpers/titlebarHandlers'

export const App = () => {
    return (
        <>
        <TitlebarHandlers />
        <MainMenu />
        </>
    )
}