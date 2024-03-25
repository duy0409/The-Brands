'use client'
import Image from "next/image";
import React from "react";
import bar from "../detail/config/bar.json";
import items from "../detail/config/itemsPage2.json";
import bgStyles from ".././detail/css/bgStyle.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import RandomLogo from "../components/RandomLogo";

const pageChild = ({ params }: { params: { id: string } }) => {
    const data = items.filter(item => item.listdetail_id == params.id);
    console.log(data[0])
    return (
        <div className={bgStyles.containerPage2}>
            <div className={bgStyles.container}>
                <Header />

                {bar.map(item => (
                    <div key={item.id} className={bgStyles.slider}>
                        <a href={`/detail/${item.id}`}>
                            <Image
                                src={item.thumbnail}
                                alt={item.description}
                                width={1728}
                                height={200}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </a>
                    </div>
                ))}
                {items.map(item => (
                    <div key={item.listdetail_id} className={bgStyles.bodyContent}>
                        <div className={bgStyles.img}>
                            <Image
                                src={item.image1}
                                alt="title"
                                width={550}
                                height={900}
                                objectFit="cover"
                            />
                            <br /><a className={bgStyles.text}>Chi tiết sản phẩm</a>
                        </div>
                        <div className={bgStyles.content}>
                            <div className={bgStyles.title}>{item.title} </div>
                            <div className={bgStyles.text1}>
                                <a style={{ color: '#D0CCC6' }}>Áo: </a>
                                <a href={item.link1}>{item.link1}</a>
                            </div>
                            <div className={bgStyles.image2}>
                                <Image src={item.image2} alt="pageChild" width={400} height={500} />
                            </div>
                            <div className={bgStyles.title1}>{item.title}</div>
                            <div className={bgStyles.text1}>
                                <a style={{ color: '#D0CCC6' }}>Quần: </a>
                                <a href={item.link2}>{item.link2}</a>
                            </div>
                            <div className={bgStyles.image3}>
                                <Image src={item.image3} alt="pageChild" width={400} height={500} />
                            </div>
                            <div className={bgStyles.title}>{item.title2}</div>
                            <div className={bgStyles.text1}>
                                <a style={{ color: '#D0CCC6' }}>Giày: </a>
                                <a href={item.link3}>{item.link3}</a>
                            </div>
                            <div className={bgStyles.image4}>
                                <Image src={item.image4} alt="pageChild" width={400} height={500} />

                            </div>
                        </div>
                    </div>
                ))}
                <br />
            </div>
            <RandomLogo />
            <Footer />
        </div>
    );
}

export default pageChild;
