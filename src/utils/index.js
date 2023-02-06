import { collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '~/configs/firebase';

/**
 * Get email of recipientUser from users: [loggedInUserEmail, recipientUserEmail]
 */
export const getRecipientEmail = (conversationUsers, loggedInUser) =>
    conversationUsers.find((userEmail) => userEmail !== loggedInUser.email);
/**
 * Generate query get all message in conversation 1v1
 * Collection 'messages_conversation' have document:
 * {
 *   conversation_id,
 *   sent_at,
 *   text,
 *   user: email,
 * }
 * Nhưng nên tham khảo theo như này: https://youtu.be/YZhNUU4_Pjw?t=7474
 */
export const generateQueryGetMessagesConversation = (conversationId) =>
    query(
        collection(db, 'messages_conversation'),
        where('conversation_id', '==', conversationId),
        orderBy('sent_at', 'asc'), // asc mặc định thì phải
    );

export const transformMessage = (message) => {
    return {
        id: message.id,
        ...message.data(), // theo model note been getRecipientEmail bên trên: conversation_id, sent_at, text, user: email
        sent_at: formatSentAtMsg(message.data().sent_at),
    };
};

/**
 * Format lastSeen, not trong readme phần Cách Convert timestampToString
 */
export const formatLastSeen = (timestamp) =>
    !timestamp ? 'The account has never been active' : new Date(timestamp.toDate().getTime()).toLocaleString();

/**
 * Format sentAtMsg theo Henry, gộp tổng với hàm trên sau
 */
export const formatSentAtMsg = (timestamp) =>
    !timestamp ? null : new Date(timestamp.toDate().getTime()).toLocaleString();
