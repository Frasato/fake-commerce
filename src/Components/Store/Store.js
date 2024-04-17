import { useEffect, useState } from "react";

export default function Store(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products/';
        fetch(url)
            .then((response)=> response.json())
            .then((responseData)=> setProducts(responseData));
    }, []);

    return(
        <main>
            {
                products.map((items, index)=>{
                    return(
                        <div key={index}>
                            <img src={items.image} alt="Product Image"/>
                            <h1>{items.title}</h1>
                            <div>
                                <h2>${items.price}</h2>
                                <button>Buy</button>
                            </div>
                        </div>
                    );
                })
            }
        </main>
    );
}