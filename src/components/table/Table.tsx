import { FC } from 'react';
import './table.scss';

const Table: FC = () => {
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
                    Col
                </div>
                <div className='th'>
                    All
                </div>
            </div>
            <div className="tbody">
                <div className="tr">
                    <div className="td">1</div>
                    <div className="td">Cocacola</div>
                    <div className="td">10000</div>
                    <div className="td">nice</div>
                    <div className="td">30000</div>
                </div>
                <div className="tr">
                    <div className="td">1</div>
                    <div className="td">Cocacola</div>
                    <div className="td">10000</div>
                    <div className="td">nice</div>
                    <div className="td">30000</div>
                </div>
                <div className="tr">
                    <div className="td">1</div>
                    <div className="td">Cocacola</div>
                    <div className="td">10000</div>
                    <div className="td">nice</div>
                    <div className="td">30000</div>
                </div>
            </div>
        </div>
    );
};

export default Table;