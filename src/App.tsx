import { FC, Fragment, useEffect } from 'react';
import './app.scss'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/navbar/NavBar';
import SalesPage from './pages/SalesPage';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useGetStore } from './ContextProvider';

const App: FC = () => {
    const navigate = useNavigate()
    const { tokenDispatch } = useGetStore()
    // localStorage.removeItem("token")
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (token) {
            tokenDispatch({
                type: 'SIGN_IN',
                payload: token
            })
        } else {
            navigate('/login')
        }
    }, [])
    return (
        <div className='app'>
            <NavBar />
            <div className="appBody">
                <Routes>
                    {
                        token
                            ?
                            <Fragment>
                                <Route path='/' element={<MainPage />} />
                                <Route path='sales' element={<SalesPage />} />
                            </Fragment>
                            :
                            <Route path='login' element={<LoginPage />} />

                    }
                    <Route path='*' element={<LoginPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;