import { Link } from "react-router-dom";
import '../../Styles/banner.scss';
import { useEffect, useState } from "react";

export default function Banner(){

    const [titleBanner, setTitleBanner] = useState('');

    useEffect(()=>{
        const title = 'The Biggest Store in The World!'
        let counter = 0;
        let titleConstructor = '';
        let timer = setInterval(()=>{
            if(counter < title.length){
                titleConstructor = titleConstructor + title[counter++];
                setTitleBanner(titleConstructor);
            }else{
                clearInterval(timer);
            }
        }, 200);
    }, []);

    return(
        <div className="banner-container">
            <h1>{titleBanner}</h1>
            <h2>Find all you want for a low price!</h2>
            <Link to="/store" className="link">See Store</Link>
        </div>
    );
}