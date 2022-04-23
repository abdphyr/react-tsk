import { FC, useState } from 'react';
import './salesPage.scss';
import { useGetSalesQuery } from '../services/useGetSalesQuery';
import { useGetSaleQuery } from '../services/useGetSaleQuery';
import Loader from '../components/btninput/Loader';

const SalesPage: FC = () => {
    const [sale, setSale] = useState('')
    const { data: sales, isLoading } = useGetSalesQuery()
    const { data: saleItem, isLoading: saleItemLoader } = useGetSaleQuery(sale)

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='salesPage'>
            {saleItemLoader && <Loader color />}
            <div className='salesPageMain'>
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
                        </div>
                    ))}
                </div>
            </div>
            {saleItem && <div>
                <div className='salesPageItem'>
                    <div><span>Cashier id</span><span>{saleItem?.data.sale.cashier_id}</span></div>
                    <div><span>Store id</span><span>{saleItem?.data.sale.store_id}</span></div>
                    <div><span>Date</span><span>{saleItem?.data.sale.created_at.slice(0, 10)}</span></div>
                    <div><span>Total</span><span>{saleItem?.data.sale.total}</span></div>
                    <div><span>Subtotal</span><span>{saleItem?.data.sale.subtotal}</span></div>
                    <div><span>Discount</span><span>{saleItem?.data.sale.discount}</span></div>
                    <div className='header'>
                        <div>Sale id</div>
                        <div>Item id</div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Total</div>
                    </div>
                </div>
                <div className="salesPageItemTable">
                    {saleItem.data.sale.items.map((item, i) => (
                        <div key={i}>
                            <div>{item.sale_id}</div>
                            <div>{item.item_id}</div>
                            <div>{item.qty}</div>
                            <div>{item.price}</div>
                            <div>{item.total}</div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    );
};

export default SalesPage;