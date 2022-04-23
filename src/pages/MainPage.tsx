import { FC, useState } from 'react';
import './mainPage.scss';
import prevstrelka from '../images/prevstrelka.svg';
import Table from '../components/table/Table';
import Calculate from '../components/calculate/Calculate';
import SearchSec from '../components/search/SearchSec';

const MainPage: FC = () => {
    const [calculate, setCalculate] = useState(false)
    return (
        <div className='mainPage'>
            <div className="calculateButton">
                <button className={calculate ? 'active' : ''} onClick={() => setCalculate(!calculate)}>
                    <img src={prevstrelka} alt="calculateImage" />
                </button>
            </div>
            <SearchSec />
            <div className='tableCalculate'>
                <Table />
                <div className='desCalculator'>
                    <Calculate />
                </div>
                <div className={(calculate ? 'active' : '') + (' mainPageCalculate')}>
                    <Calculate />
                </div>
            </div>
        </div>
    );
};

export default MainPage;