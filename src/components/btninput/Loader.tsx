import { FC } from 'react';
import './loader.scss'

const Loader: FC<{color?: boolean}> = ({color}) => {
    return (
        <div className={(color && "color" )+ (" loader")}>
            <div className='loaderBody'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;