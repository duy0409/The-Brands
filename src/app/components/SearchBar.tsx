import React, { useState } from 'react';
import styles from '../css/search.module.css'; // Import CSS file
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SearchComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/search/${searchTerm}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.txtSearch}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown} // Added event listener here
            />
            <button className={styles.btnSearch} onClick={handleSearch}>
                <Image src="/icon/search.svg" alt='search' width={20} height={15} />
            </button>
        </div>
    );
}

export default SearchComponent;