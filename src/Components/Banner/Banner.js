import { Link } from "react-router-dom";

export default function Banner(){
    return(
        <div>
            <h1>The Bigest Store in The World!</h1>
            <h2>Find all you want for a low price!</h2>
            <Link to="/store">See Store</Link>
        </div>
    );
}