import { setDoc, doc, serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { useContext, useRef, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { BsFillMicFill } from 'react-icons/bs';
import { IoSendSharp } from 'react-icons/io5';
import { MdAttachFile, MdMoreVert, MdOutlineInsertEmoticon } from 'react-icons/md';
import { db } from '~/configs/firebase';
import { AuthContext } from '~/contexts/auth';
import { ConversationContext } from '~/contexts/conversation';
import { formatLastSeen, generateQueryGetMessagesConversation, transformMessage } from '~/utils';
import RecipientAvatar from '../ConversationItem/RecipientAvatar';
import Message from '../Message';

function ConversationDetails() {
    const [inputMsg, setInputMsg] = useState('');
    const { loggedInUser } = useContext(AuthContext);
    const msgContainerRef = useRef();

    /** Get info selectedConversation: id, recipientInfos */
    const {
        selectedConversation: { id: selectedConversationId, recipient, recipientEmail },
    } = useContext(ConversationContext);

    /** Get all messages in conversation (hiện tại lấy snapshot): Chú ý useXXX như useCollection, ... đã đc wrap với .onSnapshot() nên đc update real-time */
    const queryMessages = generateQueryGetMessagesConversation(selectedConversationId);
    const [messagesSnapshot, loading, error] = useCollection(queryMessages); // nếu k dùng hooks thì dùng useState + useEffect -> đôi khi cần lấy biến error ra để biết lỗi -> làm bị lỗi thiếu index, ấn vào link trên error để tạo tự động
    // useEffect(() => {
    //     const handleGetMessages = async () => {
    //         if (!selectedConversationId) return; // k cần check !selectedConversationId cũng được vì đk where sẽ tìm k thấy thôi, có điều nên check và bỏ qua để đỡ tốn công tìm -> UPDATE: đã chuyển check selectedConversationId ra Home, có id mới gọi Component này
    //         const queryMessages = generateQueryGetMessagesConversation(selectedConversationId);
    //         const snapshot = await getDocs(queryMessages); // here is result
    //         console.log({ snapshot, snapshotDoc: snapshot.docs });
    //     };
    //     handleGetMessages();
    // }, [selectedConversationId]); // nhớ truyền deps id vào

    // Fn
    const showMessages = () => {
        // If frontend is loading messages behind the scenes
        if (loading) {
            // return loading... // ở video henry dùng next.js SSR nên nó khác, lưu message offline để show khi load update
            return '';
        } else {
            return messagesSnapshot.docs.map((message) => (
                <Message key={message.id} message={transformMessage(message)} />
            ));
        }
    };
    const handleSendMessageByEnter = (e) => {
        // Nên dùng key hơn keyCode hay which
        if (e.keyCode === 13 || e.key === 'Enter') {
            e.preventDefault();
            if (!inputMsg.trim()) return;

            // handle update db
            addMessageToDbAndUpdateLastSeen();
            // reset input
            setInputMsg('');
        }
    };
    const handleSendMessageByClick = (e) => {
        e.preventDefault();
        if (!inputMsg.trim()) return;

        // handle update db
        addMessageToDbAndUpdateLastSeen();
        // reset input
        setInputMsg('');
    };
    const addMessageToDbAndUpdateLastSeen = async () => {
        try {
            // Update last seen in 'users' collection: tức khi mình gửi tin nhắn là mình đang hoạt động -> update lại last seen hay last active
            await setDoc(doc(db, 'users', loggedInUser?.email), { lastSeen: serverTimestamp() }, { merge: true });

            // Add new message to 'messages_conversation' collection
            await addDoc(collection(db, 'messages_conversation'), {
                conversation_id: selectedConversationId,
                sent_at: serverTimestamp(),
                text: inputMsg,
                user: loggedInUser?.email,
            });

            // Biến messagesSnapshot thì k cần sửa gì, vì nó đc bọc bởi onSnapShot rồi nên tự update khi collection đó thay đổi

            // scrollToBottom: khi người dùng lướt lên xem tin nhắn, thì khi họ gửi tin nhắn mới sẽ phải scroll xuống cuối xem tn mới nhất đó
            handleScrollToBottom();
        } catch (error) {
            console.log(error);
        }
    };
    const handleScrollToBottom = () => {
        const element = msgContainerRef.current;
        element.scrollTop = element.scrollHeight;
    };

    return (
        <>
            {/* Header */}
            <div className="flex h-headerHeight w-full items-center p-2">
                <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
                <div className="ml-3 flex-1">
                    <p className="break-all font-bold">{recipientEmail}</p>
                    <p className="text-sm">Last active: {formatLastSeen(recipient?.lastSeen)}</p>
                </div>
                <div className="flex gap-2.5">
                    <MdAttachFile size={20} />
                    <MdMoreVert size={20} />
                </div>
            </div>

            {/* Body: messages container */}
            <div
                className="flex-1 overflow-y-auto bg-conversationBody [&::-webkit-scrollbar]:hidden"
                ref={msgContainerRef}
            >
                {showMessages()}
            </div>

            {/* Bottom: Input for new message */}
            <div className="flex items-center gap-4 bg-white p-2.5 [&>button]:cursor-pointer [&>button]:text-gray-800">
                <button>
                    <MdOutlineInsertEmoticon size={18} />
                </button>

                <input
                    type="text"
                    placeholder="Type a new message"
                    className="mx-2 flex-1 rounded-lg bg-inputMsg px-2 py-1"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    onKeyDown={handleSendMessageByEnter}
                />

                <button
                    disabled={!inputMsg.trim()}
                    className="disabled:pointer-events-none disabled:opacity-50"
                    onClick={handleSendMessageByClick}
                >
                    <IoSendSharp />
                </button>
                <button>
                    <BsFillMicFill />
                </button>
            </div>
        </>
    );
}

export default ConversationDetails;
