import React from "react";
import Image from "next/image";
import footerStyles from "../css/footer.module.css";
{/* npm install react-icons | https://www.npmjs.com/package/react-icons*/ }
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.group1}>
                <div className={footerStyles.group_child1}>
                    <div id={footerStyles.logo1}><Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" /><br />
                        Trang thông tin đăng tải hỗ trợ cho các thương hiệu
                        <br />thời trang tại Việt Nam. Mọi thông tin yêu cầu hỗ trợ xin liên hệ
                        <br />về cho bộ phận hỗ trợ nguyentanchieu2002@gmail.com.</div>
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
export default Footer;
