'use client'
import React, { useState } from "react";
import Link from "next/link";
import Carousel from "../app/components/Carousel";
import bg from "../app/css/Background.module.css";
import bodyContent from "../app/css/bodyContent.module.css";
import Image from 'next/image';
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import FtMobile from "../app/components/footerMobile";
import brands from "./config/brand.json";
import News from "./config/news.json";
import ButtonMenu from "../app/components/ButtonMenu";

const Home = () => {
  return (
    <div className={bg.container}>
      <div className={bg.background}>

        <Content />
        {/* <PageChild /> */}
        {/* <Page /> */}
      </div>
    </div >
  );
};
export default Home;

const Content = () => {
  const slides = ['/bn1.svg', '/bn2.svg', '/bn3.svg'];
  const [explain, setExplain] = useState(false);
  return (
    <div className={bodyContent.bodyContainer}>
      <div><ButtonMenu /><Header /> <Carousel slides={slides} /> </div>

      <p id={bodyContent.title} > BRAND </p>
      <div className={bodyContent.All_logo}>
        <div className={`${bodyContent.gallery} ${explain ? bodyContent.explain : ''}`}>

          {brands.map(item => <div key={item.id} className={bodyContent.imageContainer}><Link href={`/detail/${item.id}`}>
            <div className={bodyContent.imageWrapper}>
              <Image src={item.thumbnail} alt={item.description} className={bodyContent.imgLogo} width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
          </div>)}
        </div>
        <div>
          {explain ? (
            <div>
              <button className={bodyContent.more} onClick={() => setExplain((state) => !state)}>
                Collapse ᐱ
              </button>
            </div>
          ) : (
            <div>
              <button className={bodyContent.more} onClick={() => setExplain((state) => !state)}>
                More ᐯ
              </button>
            </div>
          )}
        </div><br /><br />
      </div>

      {/* ========================Fashion News================================= */}

      <div id={bodyContent.titleNew}><br />

        <h2 id={bodyContent.h2}>Fashion News</h2>
        <div className={bodyContent.textNews}>
          <a>FOOTWEAR | </a>
          <a> LOCAL BRAND | </a>
          <a> GLOBAL BRAND</a>
        </div>

        <div className={bodyContent.news}>

          {News.map(item => (
            <div key={item.id} className={bodyContent.containerNews}>
              <Link href={item.link} className={bodyContent.imgNews}>
                <div className={bodyContent.imageAndText}>
                  <Image src={item.thumbnail} alt={item.description} width={300} height={300} />
                </div>
              </Link>
              <Link href={item.link} className={bodyContent.textNews}>
                <div id={bodyContent.text}>
                  {item.New1}{item.New2}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div >
      <div className={bodyContent.space}><br /><br /><br /></div>
      <div><Footer /></div>
      <div><FtMobile /></div>
    </div >
  )
};
