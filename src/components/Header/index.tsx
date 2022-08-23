import { Link } from "react-router-dom";
import './index.css'

const Header = () => {

    return (
        <div className="Header">
            <div className="page-title"><span>这里是页面标题？</span></div>
            <div className="Tabbar">
                <div className="navigator">
                    <Link to='/weight'>测量体重</Link>
                </div>
                <div className="navigator">
                    <Link to='/height'>预测升高</Link>
                </div>
                <div className="navigator">
                    <Link to='/bmi'>身体指数</Link>
                </div>
            </div>

        </div>
    );
}

export default Header