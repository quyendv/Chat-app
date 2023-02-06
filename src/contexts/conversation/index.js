import { createContext, useState } from 'react';

const ConversationContext = createContext();

function ConversationProvider({ children }) {
    const [selectedConversation, setSelectedConversation] = useState({
        id: null,
        recipient: null,
        recipientEmail: null,
        // recipientDisplayName: null, // thay displayName cho email còn sửa nhiều thứ, để sau
    });

    const value = {
        selectedConversation,
        setSelectedConversation,
    };
    return <ConversationContext.Provider value={value}>{children}</ConversationContext.Provider>;
}

export { ConversationContext, ConversationProvider };
export default ConversationProvider;
