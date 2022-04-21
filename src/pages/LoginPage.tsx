import { FC, useState } from 'react';
import CusButton from '../components/btninput/CusButton';
import CusInput from '../components/btninput/CusInput';
import './loginPage.scss';
import { useGetStore } from '../ContextProvider';
import { useSignInQuery } from '../services/useSignQuery';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/btninput/Loader';


const LoginPage: FC = () => {
    const navigate = useNavigate()
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [num, setNum] = useState(false)
    const [pas, setPas] = useState(false)
    const { mutate, isLoading } = useSignInQuery()
    const { tokenDispatch } = useGetStore()

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
                tokenDispatch({
                    type: 'SIGN_IN',
                    payload: user.data.access_token
                })
                setNum(false)
                setPas(false)
            },
            onError: (err) => {
                alert(err.message)
            }
        })
    }
    if (isLoading){
        return <Loader />
    }
    return (
        <div className='loginPage'>
            <div>
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