'use client'
import React from 'react';
import headerStyles from '../css/Introduce.module.css';
import Header from "../components/header";
import Footer from "../components/footer";
import FtMobile from "../components/footerMobile";
import HtMobile from "../components/ButtonMenu";
import styles from "../css/Policy.module.css";
import Image from "next/image";

const Policy = () => {
    return (
        <div className={headerStyles.policyContainer}>
            <div><Header /><HtMobile /></div>
            <div className={styles.slider}>
                <a >
                    <Image
                        src="/FashionNews/bar.svg"
                        alt="bar"
                        width={1728}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                    />
                </a>
            </div>
            <div className={headerStyles.policyContent}>
                <h2>Về chúng tôi</h2>
                <p>
                    Tại AydenBrands, chúng tôi tin rằng thời trang không chỉ là về việc mặc quần áo mà còn là về cách bạn tự tin và biểu đạt bản thân. Sứ mệnh của chúng tôi là cung cấp cho khách hàng những trải nghiệm mua sắm thú vị và đáng nhớ thông qua việc giới thiệu các thương hiệu thời trang hàng đầu và những xu hướng mới nhất.
                </p>
                <h3>Vì Sao Chọn AydenBrands?</h3>
                <ul>
                    <li>AydenBrands tự hào về sự đa dạng của sản phẩm, từ quần áo, giày, đảm bảo rằng bạn luôn có nhiều lựa chọn để tự biểu đạt phong cách của mình.</li>
                    <li>Chúng tôi hợp tác với các thương hiệu uy tín và chất lượng, mang đến cho khách hàng những sản phẩm đáng tin cậy và chất lượng.</li>
                    <li>Đội ngũ dịch vụ khách hàng của chúng tôi luôn sẵn lòng hỗ trợ và giải đáp mọi thắc mắc của bạn, đảm bảo bạn có trải nghiệm mua sắm trực tuyến thuận lợi nhất.</li>
                </ul>
                <h3>Liên Hệ</h3>
                <p>
                    Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu hỗ trợ, vui lòng liên hệ với chúng tôi qua email: nguyentanchieu@gmail.com hoặc số điện thoại: 0846708753.
                </p>
                <p>
                    Hãy tham gia cùng chúng tôi và khám phá thế giới thời trang đầy màu sắc và phong cách tại AydenBrands!
                </p>
            </div>
            <div><Footer /><FtMobile /></div>
        </div>
    );
};

export default Policy;
