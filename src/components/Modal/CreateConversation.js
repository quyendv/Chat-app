import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '~/configs/firebase';

function CreateConversationModal({ show, setModal, conversations, loggedInUser }) {
    const [email, setEmail] = useState(''); // recipientEmail

    const handleCreateConversation = async (e) => {
        if (!email) return; // check cho có, chứ nếu !email thì btn cũng disable k ấn được - không thực hiện hàm đc

        const isInvitingSelf = email === loggedInUser.email;
        const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); // dùng package email-validator hoặc regex trên mạng

        if (isValidEmail && !isInvitingSelf && !isConversationAlreadyExist(email)) {
            const res = await addDoc(collection(db, 'conversations'), {
                users: [loggedInUser.email, email], // [userEmail, recipientEmail]
            });
            console.log(res);
            handleCloseModal(); // only close modal when creating successfully, else show error msg for each case: inviteSelf, invalidEmail, isConversationAlready...
        }
    };

    const isConversationAlreadyExist = (recipientEmail) => {
        return conversations.docs.find((conversation) => conversation.data().users.includes(recipientEmail));
    };

    const handleCloseModal = () => {
        setEmail('');
        setModal(false);
    };

    return (
        // Overlay
        <div className={`${show ? 'fixed' : 'hidden'} inset-0 z-10 grid place-content-center bg-[#00000066]`}>
            {/* Wrapper */}
            <div className="relative rounded-md bg-white p-5 shadow-md">
                {/* Close btn */}
                <span
                    className="absolute top-0 right-0 cursor-pointer px-2 text-3xl leading-none"
                    onClick={handleCloseModal}
                >
                    &times;
                </span>

                {/* Container */}
                <div className="min-h-[150px] min-w-[400px]">
                    <h1 className="mb-4 text-lg font-bold">New Conversation</h1>
                    <p>Please enter an Google email address for the user you wish to chat with</p>

                    {/* Form group */}
                    <div className="relative mt-3">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="&nbsp;"
                            className="peer w-full border-0 border-b-2 border-solid border-blue-500 pt-3 pb-1 caret-red-500 placeholder-shown:border-[#ccc] focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            htmlFor="email"
                            className=" absolute left-0 top-3 cursor-pointer text-sm font-semibold [transition:all_0.3s_ease] peer-focus:-top-2 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-blue-500"
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="mt-3 text-right">
                        <button className="mr-5 font-bold text-blue-500" onClick={handleCloseModal}>
                            Cancel
                        </button>
                        <button
                            disabled={!email}
                            className="font-bold text-blue-500 disabled:opacity-50"
                            onClick={handleCreateConversation}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateConversationModal;
