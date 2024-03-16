import React, { useState } from 'react';
import styles from '../css/search.module.css';

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
        <form className={styles.searchBar} onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search......"
                value={searchText}
                onChange={handleChange}
                className={styles.input}
            />
            <button type="submit" className={styles.button}>Search</button>
        </form>
    );
};

export default SearchBar;
