import Home from './Pages/Home/Home.js';
import StorePage from './Pages/Store/StorePage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path='/store' element={ <StorePage/> }/>
            </Routes>
        </BrowserRouter>
    );
}