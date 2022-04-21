import { FC } from 'react';
import './navBar.scss';
import { useSignOutQuery } from '../../services/useSignQuery';

const NavBar: FC = () => {
    const { mutate } = useSignOutQuery()
    return (
        <div className='navBar'>
            <div>
                <div className="navBarButton">
                    <a href="">
                        <div>icon</div>
                        <span>title</span>
                    </a>
                </div>
                <div className="navBarButton">
                    <a href="">
                        <div>icon</div>
                        <span>title</span>
                    </a>
                </div>
            </div>
            <div >
                <div className="navBarButton">
                    <a href="">
                        <div>icon</div>
                        <span>title</span>
                    </a>
                </div>
                <div className="navBarButton">
                    <a onClick={() => mutate()}>
                        <div>icon</div>
                        <span>title</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;