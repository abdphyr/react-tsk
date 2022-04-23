import { FC } from 'react';
import './success.scss';
import success from '../../images/success.svg';

const Success: FC = () => {
    return (
        <div className='success'>
            <div>
                <h3>Payment was made successfully</h3>
                <img src={success} alt="successIcon" />
            </div>
        </div>
    );
};

export default Success;