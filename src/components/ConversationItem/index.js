import { useContext } from 'react';
import { ConversationContext } from '~/contexts/conversation';
import { useRecipient } from '~/hooks/useRecipient';
import RecipientAvatar from './RecipientAvatar';

function ConversationItem({ id, conversationUsers }) {
    const { recipient, recipientEmail } = useRecipient(conversationUsers);
    const { setSelectedConversation } = useContext(ConversationContext);

    const handleSetConversationDetails = () =>
        setSelectedConversation({
            id,
            recipient,
            recipientEmail,
        });

    return (
        <div
            className="flex cursor-pointer items-center gap-2.5 px-2 py-1 hover:bg-slate-200"
            onClick={handleSetConversationDetails}
        >
            {/* RecipientAvatar */}
            <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
            <div className="flex-1 break-all">{recipientEmail}</div>
        </div>
    );
}

export default ConversationItem;
