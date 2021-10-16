import React from 'react'
import "./Sidebar.css"
import avatar from './avatar/avatar.jpg'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from './SidebarChat';
import { Avatar, IconButton} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined'
const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* <h1>I am sidebar</h1> */}
            <div className="sidebar_header">
                <Avatar src={avatar}/>
                <div className="sidebar_headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="search or start new chat" />
                </div>
            </div>
            <div className="sidebar_chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;
