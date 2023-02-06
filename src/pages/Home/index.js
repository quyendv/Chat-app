import { useContext } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import ConversationDetails from '~/components/ConversationDetails';
import Sidebar from '~/components/Sidebar';
import { ConversationContext } from '~/contexts/conversation';

function HomePage() {
    const {
        selectedConversation: { id: selectedConversationId }, // lấy key id của selectedConversation và đặt mới thành selectedConversationId
    } = useContext(ConversationContext);

    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar */}
            <div className="flex h-full w-[300px] shrink-0 flex-col border-r border-solid border-[#ccc]">
                <Sidebar />
            </div>

            {/* Conversation details || Alert no conversation is chosen */}
            <div className="relative flex h-full w-[calc(100%-300px)] flex-col overflow-auto">
                {!selectedConversationId ? (
                    <h1 className="flex h-headerHeight items-center gap-3 rounded-sm border border-solid border-blue-600 bg-sky-200 px-4 py-2 font-semibold text-blue-600">
                        <AiFillInfoCircle size={20} />
                        <span>Please choose a conversation or a room!</span>
                    </h1>
                ) : (
                    <ConversationDetails />
                )}
            </div>
        </div>
    );
}

export default HomePage;
