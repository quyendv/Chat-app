import { useContext } from 'react';
import { AuthContext } from '~/contexts/auth';

function Message({ message }) {
    const { loggedInUser } = useContext(AuthContext);
    const msgTypeCss = loggedInUser?.email === message.user ? 'bg-senderMsg ml-auto' : 'bg-receiverMsg';

    return (
        <div
            className={`relative m-2.5 w-fit min-w-[30%] max-w-[90%] break-all rounded-lg ${msgTypeCss} px-2.5 pt-2 pb-8`}
        >
            <div>{message.text}</div>
            <div className="absolute bottom-0 right-0 p-2 text-xs text-gray-500">{message.sent_at}</div>
        </div>
    );
}

export default Message;
