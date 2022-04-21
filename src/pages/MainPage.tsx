import { FC } from 'react';
import './mainPage.scss';
import Table from '../components/table/Table';
import Calculate from '../components/calculate/Calculate';
import SearchSec from '../components/search/SearchSec';

const MainPage: FC = () => {
    return (
        <div className='mainPage'>
            <div className='dashboard'>
                <SearchSec />
                <div className='tableCalculate'>
                    <Table />
                    <Calculate />
                </div>
            </div>
        </div>
    );
};

export default MainPage;