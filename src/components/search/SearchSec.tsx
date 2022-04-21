import { FC, useState } from 'react';
import './searchSec.scss';
import { useSignOutQuery } from '../../services/useSignQuery';
import { useGetStore } from '../../ContextProvider';
import { useNavigate } from 'react-router-dom';

const SearchSec: FC = () => {
    const { mutate } = useSignOutQuery()
    const { tokenDispatch } = useGetStore()
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSignOut = async () => {
        mutate('', {
            onSuccess: (n) => {
                console.log("Loginga o'tildi");
                navigate('/login')
                tokenDispatch({
                    type: 'SIGN_OUT',
                })
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