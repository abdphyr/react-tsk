import { FC, useState } from 'react';
import './searchSec.scss';
import { useSignOutQuery } from '../../services/useSignQuery';
import { useGetStore } from '../../ContextProvider';
import { useNavigate } from 'react-router-dom';
import { useItemsSerchQuery } from '../../services/useItemsSerchQuery';
import { IResSearchItems } from '../../services/requester';
import { findItemByBarcode } from '../../services/useFindItemQuery';

const SearchSec: FC = () => {
    const { mutate } = useSignOutQuery()
    const { tokenDispatch, itemsDispatch } = useGetStore()
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const { data: items, isError, error, isLoading } = useItemsSerchQuery(search)

    if (isError) {
        alert(error.message)
    }

    const handleAddItem = async (item: IResSearchItems['items'][number]) => {
        const found = await findItemByBarcode(item.barcode)?.catch(err =>{
            alert(err.message)
        })
        if (found) {
            itemsDispatch({
                type: 'ADD_ITEM',
                payload: found?.data.item
            })
        }
    }

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
                    {isLoading ?
                        <div className="load">
                            <div className="child">
                                <div></div>
                            </div>
                        </div>
                        :
                        search &&
                        <div onClick={() => setSearch('')} className='close'>
                            <div></div>
                            <div></div>
                        </div>}
                </div>
                <div className={(search && 'active') + (' body')}>
                    {
                        items?.data.items.map((item, i) => (
                            <div onClick={() => {
                                handleAddItem(item)
                            }} className='bodyItem' key={i}>
                                <div>{item.name}</div>
                                <div>{item.barcode}</div>
                            </div>
                        ))
                    }
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