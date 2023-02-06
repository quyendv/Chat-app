import { collection, query, where } from 'firebase/firestore';
import { useContext } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '~/configs/firebase';
import { AuthContext } from '~/contexts/auth';
import { getRecipientEmail } from '~/utils';

/**
 * Dùng ở ConversationItem khi lấy dữ liệu để render sidebar
 * @return {
 *  recipient: object | undefined tùy theo đã đăng nhập web chưa,
 *  recipientEmail: chắc chắn có từ conversationUsers ta save ở createConversationModal, nếu !conversationUsers[]
 * }
 */
export const useRecipient = (conversationUsers) => {
    const { loggedInUser } = useContext(AuthContext);

    // Get recipientEmail: lấy từ db collection 'conversation
    const recipientEmail = getRecipientEmail(conversationUsers, loggedInUser);

    // Get recipientAvatar: lấy từ db collection 'user' (lưu khi đăng nhập vào web) nên nếu chưa đăng nhập sẽ là undefined
    const queryGetRecipient = query(collection(db, 'users'), where('email', '==', recipientEmail));
    const [recipientsSnapshot, ,] = useCollection(queryGetRecipient); // useCollection của react-firebase-hook nó luôn dùng hàm getDocs (trả về mảng) chứ k dùng getDoc(trả về 1 doc) nên chú ý dùng [0] như bên dưới nếu muốn lấy 1 doc
    const recipient = recipientsSnapshot?.docs[0]?.data(); // recipientsSnapshot?.docs could be an empty array, leading to docs[0] being undefined. So we have to force '?' after docs[0]

    return { recipient, recipientEmail };
};
