import { FC, useState } from 'react';
import './mainPage.scss';
import nextstrelka from '../images/nextstrelka.svg';
import prevstrelka from '../images/prevstrelka.svg';
import Table from '../components/table/Table';
import Calculate from '../components/calculate/Calculate';
import SearchSec from '../components/search/SearchSec';

const MainPage: FC = () => {
    const [calculate, setCalculate] = useState(false)
    return (
        <div className='mainPage'>
            <div className="calculateButton">
                <button onClick={() => setCalculate(!calculate)}>
                    <img src={!calculate ? prevstrelka : nextstrelka} alt="calculateImage" />
                </button>
            </div>
            <SearchSec />
            <div className='tableCalculate'>
                <Table />
                <div className={(calculate && 'active') + (' mainPageCalculate')}>
                    <Calculate />
                </div>
            </div>
        </div>
    );
};

export default MainPage;