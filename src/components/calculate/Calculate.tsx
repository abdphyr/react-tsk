import { FC, useState } from 'react';
import './calculate.scss';
import del from '../../images/del.svg';
import clear from '../../images/clear.svg';
import { usePostStoreSaleQuery } from '../../services/useStoreQuery';
import { useGetStore } from '../../ContextProvider';
import Loader from '../btninput/Loader';
import { IResStoreSale } from '../../services/requester';

const Calculate: FC = () => {
    const { items, itemsDispatch } = useGetStore()
    const { mutate, isLoading } = usePostStoreSaleQuery()
    const [data, setData] = useState<IResStoreSale | null>(null)
    const handlePay = () => {
        if (items.length > 0) {
            mutate({
                items: items.map(item => {
                    return {
                        item_id: item.id,
                        qty: item.qty,
                        total: item.price * item.qty
                    }
                })
            }, {
                onError: (err) => {
                    alert(err.message)
                },
                onSuccess: (data) => {
                    setData(data.data)
                    itemsDispatch({
                        type: "CLEAR_ITEMS"
                    })
                }
            })
        } else {
            alert(`No selected products !!!`)
        }
    }
    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='calculate'>
            <div className="checkNumber">
                <div>Number check</div>
                <span>{data ? data.sale.cashier_id : 0}</span>
            </div>
            <div className="calculateTotal">
                <div>All</div>
                <span>{data ? data.sale.total : 0}</span>
            </div>
            <div className="calculateReceived">
                <div>Received</div>
                <span>{data ? data.sale.subtotal : 0}</span>
            </div>
            <div className="calculateChange">
                <div>Change</div>
                <span>{data ? data.sale.discount : 0}</span>
            </div>
            <div className="calculator">
                <div className="calcul">
                    <button onClick={() => setData(null)}>
                        <img src={clear} alt="clearIcon" />
                    </button>
                    <button>-</button>
                    <button>+</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                    <button>.</button>
                    <button>
                        <img src={del} alt="delImage" />
                    </button>
                    <button onClick={handlePay}>pay</button>
                </div>
            </div>
        </div>
    );
};

export default Calculate;