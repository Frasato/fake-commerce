import { Link } from "react-router-dom";
import '../../Styles/banner.scss';

export default function Banner(){
    return(
        <div className="banner-container">
            <h1>The Biggest Store in The World!</h1>
            <h2>Find all you want for a low price!</h2>
            <Link to="/store" className="link">See Store</Link>
        </div>
    );
}