'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import style from '../../css/search.module.css'
import Header from "@/app/components/header";
import Footer from "../../components/footer";
import HMobie from "../../components/ButtonMenu";
import FMobile from "../../components/footerMobile";
import productsData from '../../../app/detail/item/config/itemsPage2.json';

const SearchResultsPage: React.FC = () => {
    const { term } = useParams();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    useEffect(() => {
        if (term && typeof term === 'string') {
            setSearchTerm(term);
            const decodedTerm = term.replace(/%20/g, ' ');
            setSearchTerm(decodedTerm);
        }
        const filteredResults = productsData.filter((product: any) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.title1.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.title2.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(filteredResults)
        setSearchResults(filteredResults);
    }, [term, searchTerm]);
    return (
        <div>
            <div>
                <Header /><HMobie />
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
                        <div className={style.contentSearch}><div className={style.text}>{product.title}</div><br /><br />
                            <a target="_blank" href={product.link1}><Image id={style.imageS} src={product.image2} alt="title" width={350} height={350} /></a>
                        </div>
                        <div className={style.contentSearch}><div className={style.text}>{product.title1}</div><br /><br />
                            <a target="_blank" href={product.link2}> <Image id={style.imageS} src={product.image3} alt="title" width={350} height={350} /></a>
                        </div>
                        <div className={style.contentSearch}><div className={style.text}>{product.title2}</div><br /><br />
                            <a target="_blank" href={product.link2}><Image id={style.imageS} src={product.image4} alt="title" width={350} height={350} /></a>
                        </div><br />
                    </div>
                ))}

            </div>
            <FMobile /><Footer />
        </div>

    );

};
export default SearchResultsPage;