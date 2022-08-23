import './index.css'
import { Outlet } from 'react-router-dom';

const Middle = ()=>{
    return(
     <div className="middle">
        <div className='middle-left'></div>
        <div className='middle-center'>
            <Outlet />
        </div>
        <div className='middle-right'></div>
     </div>
    );
}

export default Middle;