import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import '../../Styles/header.scss';

export default function Header(){
    return(
        <header>
            <h1>Fake Commerce</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div>
                <FaCartShopping />
                <IoPersonCircle />
            </div>
        </header>
    );
}