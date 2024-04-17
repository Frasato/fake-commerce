import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Store from "../../Components/Store/Store";

export default function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <Store/>
            <Footer/>
        </>
    );
}