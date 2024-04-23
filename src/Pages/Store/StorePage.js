import Header from '../../Components/Header/Header.js';
import Store from '../../Components/Store/Store.js';
import Footer from '../../Components/Footer/Footer.js';
import Search from '../../Components/Search/Search.js';
import { useState } from 'react';

export default function StorePage(){
    const [cartItems, setCartItems] = useState(0);
    const [ searchValue, setSearchValue] = useState('');

    function incrementCart(){
        let itemsCount = cartItems + 1;
        setCartItems(itemsCount);
    }

    function handleSearch(event){
        setSearchValue(event.target.value);
    }

    return(
        <>
            <Header cartItems={cartItems}/>
            <Search valueField={searchValue} searchFunction={handleSearch}/>
            <Store incrementCart={incrementCart}/>
            <Footer />
        </>
    );
}