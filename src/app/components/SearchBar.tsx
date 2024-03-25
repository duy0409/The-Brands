import React, { useState } from 'react';
import styles from '../css/search.module.css';
import Image from 'next/image';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleSearch} className={styles.button}>
                <Image src="/icon/search.svg" alt='search' width={25} height={11} />
            </button>
        </div>
    );
};
export default SearchBar;
