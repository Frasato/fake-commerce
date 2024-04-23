import { useEffect, useState } from "react";
import SearchProvider from "../../contexts/search.js";
import '../../Styles/store.scss';

export default function Store(props){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products/';
        async function storeItems(){
            const response = await fetch(url);
            const responseData = await response.json();
            setProducts(responseData);
        }

        storeItems();
    }, []);

    return(
        <SearchProvider>
            <main>
                {
                    products.map((items, index)=>{
                        return(
                            <div key={index} className="product-card">
                                <img src={items.image} alt="Product"/>
                                <h1>{items.title}</h1>
                                <div>
                                    <h2>${items.price}</h2>
                                    <button onClick={props.incrementCart}>Buy</button>
                                </div>
                            </div>
                        );
                    })
                }
            </main>
        </SearchProvider>
    );
}