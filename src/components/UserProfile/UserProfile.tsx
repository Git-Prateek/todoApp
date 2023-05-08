import "./UserProfile.css";
import React, { useState } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const UserProfile = (props) => {
    const history = useHistory();
    const handleClick = () => {
        if (window.confirm('Are you sure you want to logout?') == true) {
            history.push("/");
            localStorage.clear();
        } else {
            return;
        }
    };
    const handleToggleTodo = () => {
        props.setShowTodo(!props.showTodo);
    };

    return (<>
        <div className="header">
            <div className="subHeader">
                <h1>{props.user}</h1>
                {!props.showTodo ?
                    <button className="primary todoButton" onClick={handleToggleTodo}>
                        Show  Todo
                    </button>
                    :
                    <button className="primary todoButton" onClick={handleToggleTodo}>
                        Hide Todo
                    </button>}

            </div>
            <button className="primary logoutButton" onClick={handleClick}>
                Logout
            </button>
        </div>
    </>);
}


export default UserProfile;
