import { useState } from 'react';
import '../../Styles/search.scss';

export default function Search(){
    const [searchValue, setSearchValue] = useState();
    
    function handleSearch(event){
        setSearchValue(event.target.value);
    }

    return(
        <div className="container-search">
            <input type="text" value={searchValue} onChange={handleSearch} placeholder='Find what you want...'/>
        </div>
    );
}