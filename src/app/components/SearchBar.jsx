import React, { useState } from 'react';
import Search from '../css/search.module.css';
import Image from 'next/image';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchText.trim() !== '') {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
        }
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <form className={Search.searchBar} onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search......"
                value={searchText}
                onChange={handleChange}
                className={Search.input}

            />
            <button type="submit" className={Search.button}><Image src="/search.png" width={10} height={10} alt='search' /></button>
        </form>
    );
};

export default SearchBar;
