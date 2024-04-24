import Header from '../../Components/Header/Header.js';
import Store from '../../Components/Store/Store.js';
import Footer from '../../Components/Footer/Footer.js';
import Search from '../../Components/Search/Search.js';
import { useState } from 'react';

export default function StorePage(){
    const [cartItems, setCartItems] = useState(0);

    function incrementCart(){
        let itemsCount = cartItems + 1;
        setCartItems(itemsCount);
    }

    return(
        <>
            <Header cartItems={cartItems}/>
            <Search />
            <Store incrementCart={incrementCart}/>
            <Footer />
        </>
    );
}