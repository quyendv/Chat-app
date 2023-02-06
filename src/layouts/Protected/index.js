import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth, db } from '~/configs/firebase';
import routesConfig from '~/configs/route';
import { AuthContext } from '~/contexts/auth';

function ProtectedLayout({ children }) {
    const [user, loading, error] = useAuthState(auth); // firebase sẽ dùng onAuthStateChanged,
    const { setLoggedInUser } = useContext(AuthContext);

    useEffect(() => {
        const setUserInDb = async () => {
            try {
                const newData = {
                    displayName: user?.displayName,
                    email: user?.email,
                    lastSeen: serverTimestamp(),
                    photoURL: user?.photoURL,
                    // nếu uid tự tạo thì nên lưu thêm uid
                };

                await setDoc(doc(db, 'users', user?.email), newData, { merge: true });
                setLoggedInUser(newData);
            } catch (error) {
                console.log('ERROR SETTING USER INFO IN DB', error);
            }
        };

        if (user) setUserInDb();
    }, [user]);

    // Render
    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>Error: {error}</h1>;
    if (!user) return <Navigate to={routesConfig.auth} />;

    return <>{children}</>;
}

export default ProtectedLayout;
