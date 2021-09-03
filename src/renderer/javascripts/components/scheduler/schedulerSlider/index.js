import React from 'react'
import { Draggable } from "@fullcalendar/interaction"

export const SchedulerSlider = props => {

    const changeRole = event => {
        props.setRole(props.roles[event.target.value])
    }

    const changeStatus = event => {
        props.setStatus(props.statuses[event.target.value])
    }

    const changeSlider = () => {

        if (!props.slider) {
            document.getElementById("slider-box").style.width = "0"
            document.getElementById("slider-button").style.marginLeft = "0"
            document.getElementById("calendar-box").style.marginLeft = "0"
            document.getElementById("slider-button").style.borderRadius = "0 100% 100% 0 / 0 50% 50% 0"
        } else {
            document.getElementById("slider-box").style.width = "280px"
            document.getElementById("slider-button").style.marginLeft = "250px"
            document.getElementById("calendar-box").style.marginLeft = "280px"
            document.getElementById("slider-button").style.borderRadius = "100% 0 0 100% / 50% 0 0 50%"
        }

        props.setSlider(!props.slider)
    }

    return (
        <>
            <div onClick={changeSlider} id="slider-button" className="slider-button"></div>
            <div id="slider-box" className="slider-box">
                <label htmlFor="slider-status-list">Status</label>
                <select
                    defaultValue=""
                    style={props.status && props.status.color ? { color: props.status.color } : { color: "black" }}
                    onChange={changeStatus}
                    name="slider-status-list"
                    id="slider-role-list"
                    className="slider-status-list"
                >
                    <option defaultValue="" style={{ color: "black" }}>none</option>
                    {props.statuses && props.statuses.map((el, index) => {
                        return <option style={{ color: el.color }} key={el.id} value={index}>{el.name}</option>
                    })}
                </select>

                <label htmlFor="slider-role-list">Role</label>
                <select
                    defaultValue=""
                    style={props.role && props.role.color ? { color: props.role.color } : { color: "black" }}
                    onChange={changeRole}
                    name="slider-role-list"
                    id="slider-role-list"
                    className="slider-role-list"
                >
                    <option defaultValue="" style={{ color: "black" }}>none</option>
                    {props.roles && props.roles.map((el, index) => {
                        return <option style={{ color: el.color }} key={el.id} value={index}>{el.name}</option>
                    })}
                </select>
                Users
                    <div className="slider-users-list">
                        {props.users && props.users.map((el, index) => {
                            console.log(el)
                            return <div key={el.id} style={{color: el.color}} className="slider-users-item">{el.name}</div>
                        })}
                        
                    </div>
            </div>
        </>
    )
}