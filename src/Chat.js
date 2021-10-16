import { Avatar, IconButton } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import React from 'react';
import "./Chat.css";

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Sachin kannaujiya</h3>
                    <p>Last seen at.....</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_messages">
                    <span className="chat_name">sachin</span>
                    This is message
                    <span className="chat_timestamp">{new Date().toLocaleString()}</span>
                </p>

                <p className="chat_messages chat_reciever">
                    <span className="chat_name">sachin</span>
                    This is message
                    <span className="chat_timestamp">{new Date().toLocaleString()}</span>
                </p>

                <p className="chat_messages">
                    <span className="chat_name">sachin</span>
                    This is message
                    <span className="chat_timestamp">{new Date().toLocaleString()}</span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Type a message.."/>
                    <button type="submit">send a message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat;
