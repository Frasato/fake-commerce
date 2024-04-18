import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Store from "../../Components/Store/Store";

export default function Home(){
    const [cartItems, setCartItems] = useState(0);

    function incrementCart(){
        let itemsCount = cartItems + 1;
        setCartItems(itemsCount);
    }

    return(
        <>
            <Header cartItems={cartItems}/>
            <Banner/>
            <Store incrementCart={incrementCart}/>
            <Footer/>
        </>
    );
}