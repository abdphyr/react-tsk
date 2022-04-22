import { FC } from 'react';
import './calculate.scss';
import del from '../../images/del.svg';
import clear from '../../images/clear.svg';
import { usePostStoreSaleQuery } from '../../services/useStoreQuery';
import { useGetStore } from '../../ContextProvider';
import Loader from '../btninput/Loader';

const Calculate: FC = () => {
    const { items } = useGetStore()
    const { mutate, isLoading, data } = usePostStoreSaleQuery()
    
    const handlePay = () => {
        mutate({
            items: items.map(item => {
                return {
                    item_id: item.id,
                    qty: item.qty,
                    total: item.price * item.qty
                }
            })
        })
    }
    console.log(data);
    if (isLoading){
        return <Loader />
    }
    return (
        <div className='calculate'>
            <div className="checkNumber">
                <div>Number check</div>
                <span>0</span>
            </div>
            <div className="calculateTotal">
                <div>All</div>
                <span>0</span>
            </div>
            <div className="calculateReceived">
                <div>Received</div>
                <span>0</span>
            </div>
            <div className="calculateChange">
                <div>Change</div>
                <span>0</span>
            </div>
            <div className="calculator">
                <div className="calcul">
                    <button>
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