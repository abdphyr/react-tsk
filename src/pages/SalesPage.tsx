import { FC, useState } from 'react';
import './salesPage.scss';
import { useGetSalesQuery } from '../services/useGetSalesQuery';
import { useGetSaleQuery } from '../services/useGetSaleQuery';
import Loader from '../components/btninput/Loader';

const SalesPage: FC = () => {
    const [sale, setSale] = useState('')
    const { data: sales, isLoading } = useGetSalesQuery()
    const { data: sal } = useGetSaleQuery(sale)

    console.log(sal);
    if (isLoading){
        return <Loader />
    }
    return (
        <div className='salesPage'>
            <div className="salesPageHeader">
                <div>Cashier</div>
                <div>Subtotal</div>
                <div>Total</div>
                <div>State</div>
                <div>Date</div>
                <div>Client</div>
            </div>
            <div className="salesPageData">
                {sales?.data.sales.map((item, i) => (
                    <div key={i} className="salesPageBody">
                        <div onClick={() => setSale(`${item.id}`)} className='salesPageBodyItem'>
                            <div>{item.cashier}</div>
                            <div>{item.subtotal}</div>
                            <div>{item.total}</div>
                            <div>{item.state}</div>
                            <div>{item.created_at.slice(0, 10)}</div>
                            <div>{item.client}</div>
                        </div>
                        <div className="salesPageBodyInfo">
                            {sal?.data.sale.cashier_id}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesPage;