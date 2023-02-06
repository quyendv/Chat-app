import { createContext, useState } from 'react';

const AuthContext = createContext();

// AuthProvider và ProtectedLayout có thể gộp làm 1 file thôi cũng đc
function AuthProvider({ children }) {
    const [loggedInUser, setLoggedInUser] = useState({
        displayName: '',
        email: '',
        lastSeen: '',
        photoURL: '',
    });
    const value = { loggedInUser, setLoggedInUser };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
export default AuthProvider;
