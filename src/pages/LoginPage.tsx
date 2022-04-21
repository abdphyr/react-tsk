import { FC, useState } from 'react';
import CusButton from '../components/btninput/CusButton';
import CusInput from '../components/btninput/CusInput';
import './loginPage.scss';
import { useGetState } from '../utils/ContextProvider';
import { useSignInQuery } from '../services/useSignQuery';
import { useNavigate } from 'react-router-dom';


const LoginPage: FC = () => {
    const navigate = useNavigate()
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [num, setNum] = useState(false)
    const [pas, setPas] = useState(false)
    const { mutate, isLoading } = useSignInQuery()
    const { userDispatch } = useGetState()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!number) {
            setNum(true)
            return
        }
        if (!password) {
            setPas(true)
            return
        }
        mutate({
            phone_number: number,
            password: password
        }, {
            onSuccess: (user) => {
                navigate('/')
                userDispatch({
                    type: 'SIGN_IN',
                    payload: user.data
                })
                setNum(false)
                setPas(false)
                console.log(user.data.access_token);
            },
            onError: (err) => {
                alert(err.message)
                console.log(err.message);
            }
        })
    }
    return (
        <div className='loginPage'>
            <div>
                <div className={(isLoading && "loader")+(" ")}>
                    <div className='loaderBody'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="title">
                    Shaxsiy kabinetingizga kiring
                </div>
                <form onSubmit={handleSubmit}>
                    <CusInput font={num} type='text' id='number' value={number} setValue={setNumber} >
                        Phone number
                    </CusInput>
                    <CusInput font={pas} type='text' id='password' value={password} setValue={setPassword} >
                        Password
                    </CusInput>
                    <CusButton>
                        Access system
                    </CusButton>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;