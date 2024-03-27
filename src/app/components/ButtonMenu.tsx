import React, { useState } from 'react';
import Image from "next/image";
import headerStyles from "../css/ButtonMobile.module.css";
import Like from "../components/like";
import Login from "../components/login";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [vietnameseBrandsOpen, setVietnameseBrandsOpen] = useState(false);
    const [usUkBrandsOpen, setUsUkBrandsOpen] = useState(false);
    const [koreanBrandsOpen, setKoreanBrandsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleVietnameseBrands = () => {
        setVietnameseBrandsOpen(!vietnameseBrandsOpen);
    };

    const toggleUsUkBrands = () => {
        setUsUkBrandsOpen(!usUkBrandsOpen);
    };

    const toggleKoreanBrands = () => {
        setKoreanBrandsOpen(!koreanBrandsOpen);
    };

    return (
        <div className={headerStyles.burgerMenu}>

            <div className={headerStyles.logo}>
                <a href="/"><Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" /></a>
            </div>
            <div className={headerStyles.containerMenu}>
                <div className={headerStyles.like}><Like /></div>
                <div className={headerStyles.login}><Login /></div>
                <div className={headerStyles.container}>
                    <button className={headerStyles.burgerIcon} onClick={toggleMenu}>
                        <div className={isOpen ? `${headerStyles.bar} ${headerStyles.open}` : headerStyles.bar}></div>
                        <div className={isOpen ? `${headerStyles.bar} ${headerStyles.open}` : headerStyles.bar}></div>
                        <div className={isOpen ? `${headerStyles.bar} ${headerStyles.open}` : headerStyles.bar}></div>
                    </button>
                    <br /><br />{isOpen && (
                        <ul className={headerStyles.mobileMenu}>
                            <li>
                                <div className={headerStyles.item} onClick={toggleVietnameseBrands}>
                                    Vietnamese Brands
                                    <div className={`${headerStyles.dropdown} ${vietnameseBrandsOpen ? headerStyles.open : ''}`}>
                                        <a href="/detail/20" className={headerStyles.dropdownItem}>Yame.vn</a>
                                        <a href="/detail/9" className={headerStyles.dropdownItem}>THEK300</a>
                                        <a href="/detail/14" className={headerStyles.dropdownItem}>MENDE</a>
                                    </div>
                                </div><br />
                            </li>
                            <li>
                                <div className={headerStyles.item} onClick={toggleUsUkBrands}>
                                    US UK Brands
                                    <div className={`${headerStyles.dropdown} ${usUkBrandsOpen ? headerStyles.open : ''}`}>

                                        <a href="/detail/7" className={headerStyles.dropdownItem}>Fear Of God</a>
                                        <a href="/detail/13" className={headerStyles.dropdownItem}>Levis</a>
                                        <a href="/detail/6" className={headerStyles.dropdownItem}>Essential</a>
                                    </div>
                                </div><br />
                            </li>
                            <li>
                                <div className={headerStyles.item} onClick={toggleKoreanBrands}>
                                    Korean Brands
                                    <div className={`${headerStyles.dropdown} ${koreanBrandsOpen ? headerStyles.open : ''}`}>

                                        <a href="/detail/1" className={headerStyles.dropdownItem}>ADLV</a>
                                    </div>
                                </div><br />
                            </li>
                        </ul>
                    )}</div>
            </div></div>
    );
};

export default BurgerMenu;
