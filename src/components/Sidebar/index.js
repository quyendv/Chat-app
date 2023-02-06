import Tippy from '@tippyjs/react';
import { signOut } from 'firebase/auth';
import { collection, query, where } from 'firebase/firestore';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import 'tippy.js/dist/tippy.css';

import { BiMessageDetail, BiSearchAlt } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

import ConversationItem from '~/components/ConversationItem';
import Image from '~/components/Image';
import { CreateConversationModal } from '~/components/Modal';
import { auth, db } from '~/configs/firebase';
import { ModalContext } from '~/contexts/modal';
import { AuthContext } from '~/contexts/auth';
import { AiFillPlusCircle } from 'react-icons/ai';

function Sidebar() {
    const { showCreate, setShowCreate } = useContext(ModalContext);
    const [loggedInUser, ,] = useAuthState(auth);
    // const { loggedInUser } = useContext(AuthContext); // phần này k rõ vì sao khi load Sidebar AuthContext vẫn chưa update, làm Image dùng fallback, và nó k reload lại image. Dùng useAuthState lại được

    const [conversationsSnapshot, ,] = useCollection(
        query(collection(db, 'conversations'), where('users', 'array-contains', loggedInUser?.email)),
    ); // nên đưa vào useEffect, nếu k phải thêm '?' trước .docs (tức conversationsSnapshot?.docs), note trong README.md

    return (
        <>
            {/* Sidebar-header */}
            <div>
                {/* Avatar + Action Buttons */}
                <div className="flex h-headerHeight w-full items-center justify-between p-2">
                    {/* Avatar */}
                    <Tippy content={loggedInUser?.email || 'Email not shown'}>
                        <Image
                            src={loggedInUser?.photoURL}
                            alt="userAvatar"
                            className="h-10 w-10 overflow-hidden rounded-full"
                        />
                    </Tippy>

                    {/* More Actions */}
                    <div className="flex gap-2 [&>*]:cursor-pointer">
                        <Tippy content="This feature will update soon">
                            <div>
                                <BiMessageDetail size={18} />
                            </div>
                        </Tippy>
                        <Tippy content="This feature will update soon">
                            <div>
                                <BsThreeDotsVertical size={18} />
                            </div>
                        </Tippy>
                        <Tippy content="Log out">
                            <div
                                onClick={() => {
                                    signOut(auth);
                                }}
                            >
                                <FiLogOut size={18} />
                            </div>
                        </Tippy>
                    </div>
                </div>

                {/* Search */}
                <div className="mb-3 flex items-center gap-2 border-t border-b border-solid border-[#ccc] px-2">
                    <BiSearchAlt size={20} />
                    <input type="text" placeholder="Search in conversations" className="w-full p-1" />
                </div>

                {/* New Conversation */}
                <div
                    className="flex cursor-pointer items-center justify-center gap-4 py-1 text-sm font-semibold text-blue-500 hover:bg-slate-100 hover:text-blue-700"
                    onClick={() => setShowCreate(true)}
                >
                    <AiFillPlusCircle size={20} />
                    <span>START NEW A CONVERSATION</span>
                </div>
            </div>

            {/* Sidebar-body: List conversation -> cái flex cho Sidebar làm cho cái Sidebar-body này tự giới hạn chiều dài là phần còn lại, thêm flex-1 cũng tương tự */}
            <div className="mt-2 flex-1 space-y-2 overflow-y-auto">
                {conversationsSnapshot?.docs.map((conversation) => (
                    <ConversationItem
                        key={conversation?.id}
                        id={conversation?.id}
                        conversationUsers={conversation?.data().users}
                    />
                ))}
            </div>

            {/* Modals */}
            <CreateConversationModal
                show={showCreate}
                setModal={setShowCreate}
                conversations={conversationsSnapshot}
                loggedInUser={loggedInUser}
            />
        </>
    );
}

export default Sidebar;
