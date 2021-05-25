import React from "react";

export const MainMenu = () => {
    const openUsers = () => {
        window.electron.openUserManager()
    }
    const openSchedules = () => {
        window.electron.openScheduleManager()
    }
    return (
    <div className="main-menu">
        <h1>Main menu</h1>
        <div className="main-menu-users" onClick= { openUsers }>
            <h3>Users</h3>
            <p className="main-menu-info">Open user editor</p>
        </div>
        <div className="main-menu-schedules" onClick = { openSchedules }>
            <h3>Schedules</h3>
            <p className="main-menu-info">Manage your schedules</p>
            </div>
    </div>
    )
}