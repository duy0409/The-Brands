'use client'
import React from "react";
import Link from "next/link";
import SearchBar from "../app/components/SearchBar";
import headerStyles from "../app/css/header.module.css";
import Carousel from "../app/components/Carousel";
import bg from "../app/css/Background.module.css";
import bodyContent from "../app/css/bodyContent.module.css";
import Image from 'next/image';
import footerStyles from "../app/css/footer.module.css";
{/* npm install react-icons | https://www.npmjs.com/package/react-icons*/ }
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

const Home = () => {
  const slides = ['/slider1.png', '/slider2.png', '/slider3.png'];
  return (
    <div className={bg.container}>
      <div className={bg.background}>
        <Header />
        <Carousel slides={slides} />
        <Content />
        <Footer />
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
          <a className={headerStyles.item} href="#">Vietnamese Brands ∨</a>
          <div className={headerStyles.dropdown}>
            <a href="#">Yame.vn</a>
            <a href="#">THEK300</a>
            <a href="#">MENDE</a>
          </div>
        </li>
        <li>
          <a className={headerStyles.item} href="#">US UK brands ∨</a>
          <div className={headerStyles.dropdown}>
            <a href="#">Fear Of God</a>
            <a href="#">Stussy</a>
            <a href="#">Balenciaga</a>
          </div>
        </li>
        <li>
          <a className={headerStyles.item} href="#">Korea Brands ∨</a>
          <div className={headerStyles.dropdown}>
            <a href="#">ADLV</a>
          </div>
        </li>
      </ul>
      <a><SearchBar /></a>
    </header>
  );
};
const Content = () => {
  return (
    <div>
      <p id={bodyContent.title} > BRAND </p>
      {/* Line 1 logo image */}
      <div className={bodyContent.gallery}>
        <div className={bodyContent.imageContainer}><a href="#">
          <div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/adLv.png" alt="Image 1" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/at.png" alt="Image 2" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/baLen.png" alt="Image 3" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/davies.png" alt="Image4" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/deGrey.png" alt="Image 5" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
        </div>
      </div>
      {/* Line 2 logo image */}
      <div className={bodyContent.gallery}>
        <div className={bodyContent.imageContainer}>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/eSen.png" alt="Image 6" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/fog.png" alt="Image 7" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/go.png" alt="Image 8" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/k300.png" alt="Image9" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/kia.png" alt="Image 10" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
        </div>
      </div>
      {/* Line 3 logo image */}
      <div className={bodyContent.gallery}>
        <div className={bodyContent.imageContainer}>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/lenin.png" alt="Image 11" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/leVe.png" alt="Image 12" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/levi.png" alt="Image 13" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/men.png" alt="Image 14" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/out.png" alt="Image 15" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
        </div>
      </div>
      {/* Line 4 logo image */}
      <div className={bodyContent.gallery}>
        <div className={bodyContent.imageContainer}>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/stu.png" alt="Image 16" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/tnf.png" alt="Image 17" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/tre.png" alt="Image 18" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/vans.png" alt="Image 19" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
          <a href="#"><div className={bodyContent.imageWrapper}>
            <Image src="/brand_Logo/yaMe.png" alt="Image 20" width={250} height={200} />
            <div className={bodyContent.overlay}>
              <p>Text here</p>
            </div>
          </div></a>
        </div>
      </div>

      {/* ========================Fashion News================================= */}
      <div className={bodyContent.news}>
        <div>
          <h2 id={bodyContent.h2}>Fashion News</h2>
          <p className={bodyContent.titleNews}>
            <a>FOOTWEAR | </a>
            <a>LOCAL BRAND | </a>
            <a>GLOBAL BRAND</a>
          </p>
        </div>
        <div className={bodyContent.imageNews}>
          <div><Image src="/new1.png" alt="News 1" width={400} height={300} />
            <a href="https://www.businessoffashion.com/news/beauty/ulta-beautys-annual-profit-forecast-misses-estimates-as-costs-climb/"><br />Ulta Beauty’s Annual Profit Forecast Misses Estimates as Costs Climb</a></div>
          <div><Image src="/new2.png" alt="News 2" width={400} height={300} />
            <a href="https://www.businessoffashion.com/news/retail/arkhouse-macys-push-for-higher-bid/"><br />Arkhouse Says in Talks With Macy’s for Due Diligence Amid Push for Higher Bid</a></div>
          <div><Image src="/new3.png" alt="News 3" width={400} height={300} />
            <a href="https://www.businessoffashion.com/news/luxury/italys-cucinelli-posts-39-jump-in-2023-ebit-confirms-guidance/"><br />Italy’s Cucinelli Posts 39% Jump in 2023 EBIT, Confirms Guidance</a></div>
        </div>
      </div>


    </div>
  )
};
const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.group1}>
        <div className={footerStyles.group_child1}>
          <a id={footerStyles.logo1}><Image src="/logo.png" width={182} height={38} alt="Logo" /><br />
            <br />Trang thông tin đăng tải hỗ trợ cho các thương hiệu
            <br />thời trang tại Việt Nam. Mọi thông tin yêu cầu hỗ trợ xin liên hệ
            <br />về cho bộ phận hỗ trợ nguyentanchieu2002@gmail.com.</a>
        </div>
        <div className={footerStyles.group_child2}>
          <p id={footerStyles.text1}>Theo dõi tại<br /></p>

          <div className={footerStyles.GroupIcons}>
            <a href="https://www.facebook.com/?locale=vi_VN" id={footerStyles.icons}><FaFacebook size={30} color="#c0c0c0" /></a>
            <a href="https://www.tiktok.com/vi-VN/" id={footerStyles.icons}><FaTiktok size={30} color="#c0c0c0" /></a>
            <a href="https://www.youtube.com/" id={footerStyles.icons}><FaYoutube size={30} color="#c0c0c0" /></a>
          </div>
        </div>
      </div>
      <div className={footerStyles.group2}>
        <p id={footerStyles.text2}>Liên hệ và hỗ trợ thông qua<br /></p>
        <div className={footerStyles.information}>
          <a>0846708753 <br /> 0944094603 <br /> 0392155116</a>
          <a>nguyentanchieu2002@gmail.com <br /> trungtinhuynh04@gmail.com <br />pnhatduy0409@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
