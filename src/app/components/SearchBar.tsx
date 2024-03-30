import React, { useState, useEffect } from 'react';
import styles from '../css/search.module.css'; // Import CSS file
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const SearchComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const router = useRouter()
    console.log(searchTerm)
    const handleSearch = () => {

        router.push(`/search/${searchTerm}`)
    };
    return (
        <div className={styles.searchContainer}>
            <input className={styles.txtSearch} type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className={styles.btnSearch} onClick={handleSearch}><Image src="/icon/search.svg" alt='search' width={20} height={15} /></button>
        </div>
    );
}
export default SearchComponent;