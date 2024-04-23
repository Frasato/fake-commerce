import { useState, createContext } from 'react';

export const SearchContext = createContext({});

export default function SearchProvider({children}){
    return(
        <SearchContext.Provider>
            {children}
        </SearchContext.Provider>
    );
}