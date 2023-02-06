import { createContext, useState } from 'react';

const ModalContext = createContext();

// K dùng redux cho Auth nên Modal cũng k bõ dùng, để tạm Context
function ModalProvider({ children }) {
    const [showCreate, setShowCreate] = useState(false);
    const value = {
        showCreate,
        setShowCreate,
    };

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export { ModalContext, ModalProvider };
export default ModalProvider;
