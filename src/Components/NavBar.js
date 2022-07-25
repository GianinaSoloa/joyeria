
import "./NavBar.css";
import logo from "../Assets/logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return (
        <header>
        <div className="menu__container">
            <a href="index.html"><img className="logo" src={logo} alt="Logo Cómo Decírtelo Joyas"/></a>
            <nav id="menu">
                <ul>
                    <li><a className="active" href="index.html">HOME</a></li>
                    <li><a href="">NOSOTROS</a></li>
                    <li><a href="">SHOP</a></li>
                    <li><a href="">CONTACTO</a></li>
                    <li><a href=""><ShoppingCartIcon className="iconCart"/></a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default NavBar