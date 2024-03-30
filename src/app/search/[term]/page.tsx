
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Assuming you are using correct import for useParams
import style from '../../css/search.module.css'
import Header from "@/app/components/header";
// Assuming your JSON data is in a separate file named products.json
import productsData from '../../../app/detail/item/config/itemsPage2.json'; // Adjust the path according to your file structure

const SearchResultsPage: React.FC = () => {
    const { term } = useParams();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    useEffect(() => {
        // Check if term exists and is a string
        if (term && typeof term === 'string') {
            setSearchTerm(term);
        }

        // Filter products based on search term
        const filteredResults = productsData.filter((product: any) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(filteredResults)
        setSearchResults(filteredResults);
    }, [term, searchTerm]);

    return (
        <div>
            <div>
                <Header />
                <Image
                    src="/FashionNews/bar.svg"
                    alt="bar"
                    width={1728}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <h2 style={{ textAlign: 'center', color: 'wheat' }}>Tìm kiếm</h2>
            <h3 style={{ textAlign: 'center', color: 'wheat' }}>Tìm kiếm cho {searchTerm}</h3>
            <div className={style.gallerycontainer}>
                {searchResults.map((product: any) => (
                    <div className={style.galleryitem} key={product.id}>
                        {product.title}
                        <a target="_blank" href={product.link1}><Image id={style.imageS} src={product.image2} alt="title" width={350} height={350} /></a>
                        {product.title1}
                        <a target="_blank" href={product.link2}> <Image id={style.imageS} src={product.image3} alt="title" width={350} height={350} /></a>
                        {product.title2}
                        <a target="_blank" href={product.link2}><Image id={style.imageS} src={product.image4} alt="title" width={350} height={350} /></a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResultsPage;