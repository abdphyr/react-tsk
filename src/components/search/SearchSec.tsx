import { FC, useState } from 'react';
import './searchSec.scss';
import searchIcon from '../../images/search.svg';
import { useGetStore } from '../../ContextProvider';
import { useItemsSerchQuery } from '../../services/useItemsSerchQuery';
import { IResSearchItems } from '../../services/requester';
import { findItemByBarcode, useFindItemByBarcodeQuery } from '../../services/useFindItemQuery';

const SearchSec: FC = () => {
    const { itemsDispatch } = useGetStore()
    const [search, setSearch] = useState('')
    const { data: items, isError, error, isLoading } = useItemsSerchQuery(search)
    const { data: fastItems} = useItemsSerchQuery('pepsi')

    const itemss = (!isLoading && items?.data.items && search.length > 2) ? items?.data.items : [] as IResSearchItems['items']
    const foundedItems = useFindItemByBarcodeQuery(itemss)
    const fastItemss = useFindItemByBarcodeQuery(fastItems?.data.items ? fastItems?.data.items: itemss )

    if (isError) {
        alert(error.message)
    }

    const handleAddItem = async (item: IResSearchItems['items'][number]) => {
        if (search.length > 2) {
            // If we need to speed adding to items
            const foundItem = foundedItems.find(fItem => fItem.data?.data.item.name === item.name)
            if (foundItem) {
                itemsDispatch({
                    type: "ADD_ITEM",
                    payload: foundItem.data?.data.item
                })
            }
        } else {
            // If we need't to speed adding items
            const found = await findItemByBarcode(item.barcode)?.catch(err => {
                alert(err.message)
            })
            if (found) {
                itemsDispatch({
                    type: 'ADD_ITEM',
                    payload: found?.data.item
                })
            }
        }

    }

    const handleFastProducts = () => {
        fastItemss?.forEach(item => {
            itemsDispatch({
                type: "ADD_ITEM",
                payload: item.data?.data.item
            })
        })
    }

    return (
        <div className='searchSec'>
            <div className={(search && "active") + (" searchInput")}>
                <div className='input'>
                    <span>
                        <img src={searchIcon} alt="searchIcon" />
                    </span>
                    <input placeholder='Search products' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
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
                <div className={(search && !isLoading && 'active') + (' body')}>
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
                <button onClick={handleFastProducts}>
                    Fast products
                </button>
            </div>
            <button onClick={() => itemsDispatch({ type: "CLEAR_ITEMS" })} className="clearButton">
                Clear
            </button>
        </div>
    );
};

export default SearchSec;