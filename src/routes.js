import Home from './Pages/Home/Home.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
            </Routes>
        </BrowserRouter>
    );
}