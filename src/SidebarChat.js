import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";
const SidebarChat = () => {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="sidebarchat_info">
                <h3>Sachin kannaujiya</h3>
                <p>hi this is my chat</p>
            </div>
        </div>
    )
}

export default SidebarChat;
