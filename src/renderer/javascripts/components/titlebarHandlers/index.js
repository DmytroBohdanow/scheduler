import React from 'react'

export const TitlebarHandlers = () => {
    const minimizeWindow = () => {
        window.electron.minimizeWindow()
    }
    const closeWindow = () => {
        window.electron.closeWindow()
    }

    return (
        <div className="window-handlers-box">
            <button className="window-minimize-btn" onClick= { minimizeWindow }>_</button>
            <button className="window-close-btn" onClick= { closeWindow }>&#10006;</button>
        </div>
    )
}