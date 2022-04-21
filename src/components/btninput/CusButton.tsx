import { FC } from 'react';
import './cusButton.scss';

const CusButton: FC<React.ReactNode> = ({children}) => {
    return (
        <button className='cusButton'>
            {children}
        </button>
    );
};

export default CusButton;