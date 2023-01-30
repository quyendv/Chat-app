import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.component />} />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
