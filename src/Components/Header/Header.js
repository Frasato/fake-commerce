import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import '../../Styles/header.scss';

export default function Header(){
    return(
        <header>
            <h1>Fake Commerce</h1>
            <div>
                <Link to="/" className="navegation-link">Home</Link>
                <Link to="/store" className="navegation-link">Store</Link>
                <Link to="/contact" className="navegation-link">Contact Us</Link>
            </div>
            <div>
                <FaCartShopping className="navigation-icons"/>
                <span>10</span>
                <IoPersonCircle className="navigation-icons"/>
            </div>
        </header>
    );
}