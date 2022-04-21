import { FC, useEffect } from 'react';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import './app.scss'
import NavBar from './components/navbar/NavBar';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useGetStore } from './ContextProvider';

const App: FC = () => {
    const navigate = useNavigate()
    const { tokenDispatch } = useGetStore()
    // localStorage.removeItem("token")
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            navigate('/')
            tokenDispatch({
                type: 'SIGN_IN',
                payload: token 
            })
        } else {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            <div className='main'>
                <NavBar />
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;