import { FC, useState } from 'react';
import './searchSec.scss';
import { useSignOutQuery } from '../../services/useSignQuery';
import { useGetState } from '../../utils/ContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchSec: FC = () => {
    const { mutate, isSuccess } = useSignOutQuery()
    const { user, userDispatch } = useGetState()
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    // const access_token = localStorage.getItem("access_token")
    const config = {
        "Authorization": 'Bearer ' + user.access_token
    }
    const handleSignOut = () => {
        // console.log(localStorage.getItem("access_token"));
        // mutate()
        axios.post("https://frontend-task.depocloud.ml/api/mobile/logout", config)
        // if (isSuccess){
        //     navigate('/login')
        // }
        // console.log(isSuccess);
        userDispatch({
            type: 'SIGN_OUT',
            payload: {
                access_token: '',
            }
        })
    }
    return (
        <div className='searchSec'>
            <div className={(search && "active") + (" searchInput")}>
                <div className='input'>
                    <span>icon</span>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className={(search && 'active') + (' body')}>
                    <div>
                        searchInput
                    </div>
                </div>
            </div>
            <div className="searchButton">
                <button onClick={handleSignOut}>
                    Fast products
                </button>
            </div>
        </div>
    );
};

export default SearchSec;