import React from 'react';
import './ChatArea.css';
import ChatMessagesList from '../ChatMessagesList/ChatMessagesList';

const ChatArea = () => {

    return (
        <div className="chatAreaContainer">
            <div>
                <ChatMessagesList/>
            </div>
        </div>
    )
}

export default ChatArea;