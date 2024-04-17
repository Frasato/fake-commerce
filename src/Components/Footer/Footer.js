import { Link } from "react-router-dom";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";

export default function Footer(){
    return(
        <footer>
            <div>
                <h1>Navegation</h1>
                <Link to="/">Home</Link>
                <Link to="/">Store</Link>
                <Link to="/">Contact Us</Link>
            </div>
            <div>
                <FaCcVisa />
                <FaCcMastercard />
                <FaPix />
            </div>
        </footer>
    );
}