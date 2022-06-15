import './index.scss'
import {Link, NavLink} from "react-router-dom";
import LogoR from '../../assets/images/r.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoR} alt="logo"/>
        </Link>

        <nav>
            <NavLink exact="true" activeClassName="active" to="/"> Home </NavLink>
            <NavLink exact="true" activeClassName="active" to="/about">About us </NavLink>
            <NavLink exact="true" activeClassName="active" to="/product">Products </NavLink>
            {/*<NavLink exact="true" activeClassName="active" to="/product-vert">ProductVert </NavLink>*/}
            <NavLink exact="true" activeClassName="active" to="/contact">Contacts </NavLink>
        </nav>
    </div>
)

export default Sidebar