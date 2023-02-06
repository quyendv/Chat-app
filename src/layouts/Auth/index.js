import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '~/configs/firebase';
import routesConfig from '~/configs/route';

// AuthProvider và ProtectedLayout có thể gộp làm 1 file thôi cũng đc
function AuthLayout({ children }) {
    const [user, loading, error] = useAuthState(auth);

    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>Error: {error}</h1>;
    if (user) return <Navigate to={routesConfig.home} />;

    return <>{children}</>;
}

export default AuthLayout;
