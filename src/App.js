import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, ConversationProvider, ModalProvider } from './contexts';
import { ProtectedLayout } from './layouts';
import { privateRoutes, publicRoutes } from './routes';

function App() {
    return (
        <AuthProvider>
            <ConversationProvider>
                <ModalProvider>
                    <Router>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Layout = route.layout || Fragment;
                                const Page = route.component;
                                const Element = (
                                    <Layout>
                                        <Page />
                                    </Layout>
                                );
                                return <Route key={index} path={route.path} element={Element} />;
                            })}
                            {privateRoutes.map((route, index) => {
                                const Layout = route.layout || Fragment;
                                const Page = route.component;
                                const Element = (
                                    <ProtectedLayout>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </ProtectedLayout>
                                );
                                return <Route key={index} path={route.path} element={Element} />;
                            })}
                        </Routes>
                    </Router>
                </ModalProvider>
            </ConversationProvider>
        </AuthProvider>
    );
}

export default App;
