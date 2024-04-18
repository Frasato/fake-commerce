import { Link } from "react-router-dom";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import '../../Styles/footer.scss';

export default function Footer(){
    return(
        <footer>
            <div className="navigation-footer">
                <h1>Navegation</h1>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Store</Link>
                <Link to="/" className="link">Contact Us</Link>
            </div>
            <div className="payment">
                <FaCcVisa className="icon-pay"/>
                <FaCcMastercard className="icon-pay"/>
                <FaPix className="icon-pay"/>
            </div>
        </footer>
    );
}