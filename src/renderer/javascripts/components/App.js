import React from 'react'
import { MainMenu } from './mainMenu'
import { TitlebarHandlers } from './titlebarHandlers'

export const App = () => {
    return (
        <>
        <TitlebarHandlers />
        <MainMenu />
        </>
    )
}