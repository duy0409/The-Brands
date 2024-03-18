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
import Login from "../app/components/login";
import Like from "../app/components/like";
{/* npm install react-icons | https://www.npmjs.com/package/react-icons*/ }
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

const Home = () => {

  return (
    <div className={bg.container}>
      <div className={bg.background}>


        <Content />

      </div>
    </div >
  );
};
export default Home;
const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" />
      </div>
      <ul className={headerStyles.menu}>
        <li>
          <a className={headerStyles.item} style={{ fontFamily: 'Poppins' }}>Vietnamese Brands ∨</a>
          <div className={headerStyles.dropdown}>
            <a href="#" id={headerStyles.item_child1} style={{ borderBottom: '1px solid thistle', fontFamily: 'Poppins', color: '#ffffff' }}>Yame.vn</a>
            <a href="#" id={headerStyles.item_child1} style={{ borderBottom: '1px solid thistle', fontFamily: 'Poppins', color: '#ffffff' }}>THEK300</a>
            <a href="#" id={headerStyles.item_child2} style={{ fontFamily: 'Poppins', color: '#ffffff' }}>MENDE</a>
          </div>
        </li>
        <li>
          <a className={headerStyles.item} style={{ fontFamily: 'Poppins' }}>US UK brands ∨</a>
          <div className={headerStyles.dropdown}>
            <a href="#" id={headerStyles.item_child1} style={{ borderBottom: '1px solid thistle', fontFamily: 'Poppins', color: '#ffffff' }}>Fear Of God</a>
            <a href="#" id={headerStyles.item_child1} style={{ borderBottom: '1px solid thistle', fontFamily: 'Poppins', color: '#ffffff' }}>Stussy</a>
            <a href="#" id={headerStyles.item_child1} style={{ fontFamily: 'Poppins', color: '#ffffff' }}>Balenciaga</a>
          </div>
        </li>
        <li>
          <a className={headerStyles.item} style={{ fontFamily: 'Poppins' }}>Korea Brands ∨</a>
          <div className={headerStyles.dropdown}>
            <a href="#" id={headerStyles.adLv}>ADLV</a>
          </div>
        </li>
        <li><SearchBar />
        </li>
        <li className={headerStyles.login}><Login /></li>
        <li className={headerStyles.like}><Like /></li>
      </ul>

    </header>
  );
};
const Content = () => {
  const slides = ['/bn1.svg', '/bn2.svg', '/bn3.svg'];
  return (
    <div className={bodyContent.bodyContainer}>
      <div><a><Header /></a><a><br /><br /><br /><br /></a><a><Carousel slides={slides} /></a></div>
      <p id={bodyContent.title} > BRAND </p>
      <div className={bodyContent.All_logo}>{/* Line 1 logo image */}
        <div className={bodyContent.gallery}>
          <div className={bodyContent.imageContainer}><a href="#">
            <div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/adLv.png" alt="Image 1" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/at.png" alt="Image 2" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/baLen.png" alt="Image 3" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/davies.png" alt="Image4" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/deGrey.png" alt="Image 5" width={170} height={170} />
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
              <Image src="/brand_Logo/eSen.png" alt="Image 6" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/fog.png" alt="Image 7" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/go.png" alt="Image 8" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/k300.png" alt="Image9" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/kia.png" alt="Image 10" width={170} height={170} />
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
              <Image src="/brand_Logo/lenin.png" alt="Image 11" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/leVe.png" alt="Image 12" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/levi.png" alt="Image 13" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/men.png" alt="Image 14" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/out.png" alt="Image 15" width={170} height={170} />
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
              <Image src="/brand_Logo/stu.png" alt="Image 16" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/tnf.png" alt="Image 17" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/tre.png" alt="Image 18" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/vans.png" alt="Image 19" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
            <a href="#"><div className={bodyContent.imageWrapper}>
              <Image src="/brand_Logo/yaMe.png" alt="Image 20" width={170} height={170} />
              <div className={bodyContent.overlay}>
                <p>Text here</p>
              </div>
            </div></a>
          </div>
        </div></div>

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
          <div><Image src="/FashionNews/new1.svg" alt="News 1" width={290} height={200} />
            <a href="https://localbrand.vn/hinh-anh-chinh-thuc-cua-two-stussy-x-nike-air-flight-89-colorways/"><br />Hình ảnh chính thức của Two Stüssy x <br />
              Nike Air Flight 89 Colorways</a></div>
          <div><Image src="/FashionNews/new2.svg" alt="News 2" width={290} height={200} />
            <a href="https://localbrand.vn/ao-sweater-local-brand-duoc-cac-ban-tre-ua-chuong/"><br />Áo sweater local brand được các
              <br />bạn trẻ ưa chuộng</a></div>
          <div><Image src="/FashionNews/new3.svg" alt="News 3" width={290} height={200} />
            <a href="https://localbrand.vn/tips-phoi-do-cung-ao-baby-tee-ma-ban-khong-nen-bo-qua/"><br />Các local brand qua tips phối đồ
              <br />siêu xịn cùng Tiktoker nổi tiếng</a></div>
        </div>
      </div>
      <div className={bodyContent.space}><br /><br /><br /></div>
      <a><Footer /></a>
    </div>
  )
};
const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.group1}>
        <div className={footerStyles.group_child1}>
          <a id={footerStyles.logo1}><Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" /><br />
            Trang thông tin đăng tải hỗ trợ cho các thương hiệu
            <br />thời trang tại Việt Nam. Mọi thông tin yêu cầu hỗ trợ xin liên hệ
            <br />về cho bộ phận hỗ trợ nguyentanchieu2002@gmail.com.</a>
        </div>
        <div className={footerStyles.group_child2}>
          <p id={footerStyles.text1}>Theo dõi tại<br /></p>

          <div className={footerStyles.GroupIcons}>
            <a href="https://www.facebook.com/?locale=vi_VN" id={footerStyles.icons}><FaFacebook size={25} color="#c0c0c0" /></a>
            <a href="https://www.tiktok.com/vi-VN/" id={footerStyles.icons}><FaTiktok size={25} color="#c0c0c0" /></a>
            <a href="https://www.youtube.com/" id={footerStyles.icons}><FaYoutube size={25} color="#c0c0c0" /></a>
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
