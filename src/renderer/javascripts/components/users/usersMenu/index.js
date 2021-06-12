import React from "react";

export const UsersMenu = props => {

    const modals = [props.usersListState, props.newUserState, props.groupListState, props.roleListState, props.statusListState]
    const setModals = [props.setUsersListState, props.setNewUserState, props.setGroupListState, props.setRoleListState, props.setStatusListState]

    function onlyOneMenu() {
       const activeMenu = modals.findIndex((el) => el === true)
        if (activeMenu >= 0) setModals[activeMenu](false)
    }

    return (
        <div className="users-menu-box">
            <button 
              className={props.usersListState ? "users-menu-item-active" : "users-menu-item"} 
              onClick={() => {
                        onlyOneMenu()
                        props.setUsersListState(!props.usersListState)
                    }
                }
            >
                Users list
            </button>
            <button 
              className={props.newUserState ? "users-menu-item-active" : "users-menu-item"}
              onClick={() => {
                    onlyOneMenu()
                    props.setNewUserState(!props.newUserState)
                    }
                }
             >
                New user
            </button>
            <button 
              className={props.groupListState ? "users-menu-item-active" : "users-menu-item"} 
              onClick={() => {
                    onlyOneMenu()
                    props.setGroupListState(!props.groupListState)
                    }
                }
            >
                Group list
            </button>
            <button
              className={props.roleListState ? "users-menu-item-active" : "users-menu-item"} 
              onClick={() => {
                    onlyOneMenu()
                    props.setRoleListState(!props.roleListState)
                    }
                }
             >
                Role list
            </button>
            <button 
              className={props.statusListState ? "users-menu-item-active" : "users-menu-item"} 
              onClick={() => {
                    onlyOneMenu()
                    props.setStatusListState(!props.statusListState)
                    }
                }
              >
                Status list
            </button>
        </div>
    )
}