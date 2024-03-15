'use client'
import React from "react";
import Link from "next/link";
import headerStyles from "../app/css/header.module.css";
import Carousel from "../app/components/Carousel";
import bg from "../app/css/Background.module.css";
import Image from 'next/image';

const Home = () => {
  const slides = ['/slider1.png', '/slider2.png', '/slider3.png'];
  return (
    <div className={bg.container}>
      <div className={bg.background}>
        <Header />
        <Carousel slides={slides} />
      </div>
    </div>
  );
};
export default Home;
const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <Image src="/logo.png" width={182} height={38} alt="Logo" />
      </div>
      <ul className={headerStyles.menu}>
        <li>
          <a className={headerStyles.item} href="#">Vietnamese Brands Ⓥ</a>
          <div className={headerStyles.dropdown}>
            <a href="#">Shirt</a>
            <a href="#">Trousers</a>
            <a href="#">Outfit</a>
          </div>
        </li>
        <li>
          <a className={headerStyles.item} href="#">US UK brands Ⓥ</a>
          <div className={headerStyles.dropdown}>
            <a href="#">Shirt</a>
            <a href="#">Trousers</a>
            <a href="#">Outfit</a>
          </div>
        </li>
        <li>
          <a className={headerStyles.item} href="#">Korea Brands Ⓥ</a>
          <div className={headerStyles.dropdown}>
            <a href="#">Shirt</a>
            <a href="#">Trousers</a>
            <a href="#">Outfit</a>
          </div>
        </li>
      </ul>
      <p className={headerStyles.search}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
        </svg>
      </p>
    </header>
  );
};
