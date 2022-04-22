import { FC } from 'react';
import './table.scss';
import { useGetStore } from '../../ContextProvider';

const Table: FC = () => {
    const { items } = useGetStore()
    return (
        <div className='table'>
            <div className='thead'>
                <div className='th'>
                    #
                </div>
                <div className='th'>
                    Name
                </div>
                <div className='th'>
                    Price
                </div>
                <div className='th'>
                    Amount
                </div>
                <div className='th'>
                    Total
                </div>
            </div>
            <div className="tbody">
                {
                    items.map((item, i) => (
                        <div key={i}  className="tr">
                            <div className="td">{item.id}</div>
                            <div className="td">{item.name}</div>
                            <div className="td">{item.price}</div>
                            <div className="td">{item.qty}</div>
                            <div className="td">{item.cost}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Table;