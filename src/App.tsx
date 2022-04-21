import { FC, useEffect } from 'react';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import './app.scss'
import NavBar from './components/navbar/NavBar';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useGetState } from './utils/ContextProvider';
import axios from 'axios';


const App: FC = () => {
    const navigate = useNavigate()
    const { userDispatch } = useGetState()
    // localStorage.removeItem("access_token")
    useEffect(() => {
        const access_token = localStorage.getItem("access_token")
        if (access_token) {
            navigate('/')
            userDispatch({
                type: 'SIGN_IN',
                payload:{
                    access_token: access_token
                }
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