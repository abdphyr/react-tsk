import { FC, useState } from 'react';
import './navBar.scss';
import menu from '../../images/menu.svg';
import pay from '../../images/pay.svg';
import pos from '../../images/pos.svg';
import { Link, useNavigate } from 'react-router-dom';
import sales from '../../images/sales.svg';
import settings from '../../images/settings.svg';
import block from '../../images/block.svg'
import logout from '../../images/logout.svg';
import { useSignOutQuery } from '../../services/useSignQuery';
import { useGetStore } from '../../ContextProvider';
import Loader from '../btninput/Loader';

const NavBar: FC = () => {
    const { mutate, isLoading } = useSignOutQuery()
    const { tokenDispatch } = useGetStore()
    const [nav, setNav] = useState('pos')
    const navigate = useNavigate()
    const handleSignOut = async () => {
        mutate('', {
            onSuccess: (n) => {
                navigate('/login')
                tokenDispatch({
                    type: 'SIGN_OUT',
                })
            }
        })
    }
    const header = <div className='mainHeader'>
        <div className="menu">
            <img src={menu} alt="menu" />
        </div>
        <div className="calculator">
            <img src={pay} alt="buy" />
        </div>
    </div>
    return (
        <div className='navBar'>
            {isLoading && <Loader color />}
            <div className="navBarBody">
                <div>
                    <div className="navBarButton">
                        <Link to='/' onClick={() => setNav('pos')} className={(nav === 'pos' && 'active') + ('')}>
                            <div>
                                <img src={pos} alt="posIcon" />
                            </div>
                            <span>POS</span>
                        </Link>
                    </div>
                    <div className="navBarButton">
                        <Link to='/' onClick={() => setNav('settings')} className={(nav === 'settings' && 'active') + ('')}>
                            <div>
                                <img src={settings} alt="salesIcon" />
                            </div>
                            <span>Settings</span>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className="navBarButton">
                        <Link to='/sales' onClick={() => setNav('sales')} className={(nav === 'sales' && 'active') + ('')}>
                            <div>
                                <img src={sales} alt="salesIcon" />
                            </div>
                            <span>Sales</span>
                        </Link>
                    </div>
                    <div className="navBarButton" >
                        <Link to='/' onClick={() => setNav('lock')} className={(nav === 'lock' && 'active') + ('')}>
                            <div>
                                <img src={block} alt="salesIcon" />
                            </div>
                            <span>Lock</span>
                        </Link>
                    </div>
                    <div className="navBarButton">
                        <Link to='/' onClick={handleSignOut}>
                            <div>
                                <img src={logout} alt="salesIcon" />
                            </div>
                            <span>Logout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;