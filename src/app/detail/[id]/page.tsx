'use client'
import React from "react"
import Image from "next/image"
import bgStyles from "../css/bgStyles.module.css";
import textStyles from "../css/textStyles.module.css";
import items from "../config/items.json";
import Header from "../../components/header";
import Footer from "../../components/footer";
import bg from "../../css/Background.module.css";
import BMenu from "../../components/ButtonMenu";
import FMobile from "../../components/footerMobile";
import Link from "next/link";


const page = ({ params }: { params: { id: string } }) => {
    const data = items.filter(item => item.brand_id == params.id);
    console.log(data[0])
    return (
        <div className={bg.containerPage1}>
            <div className={bgStyles.bg}>
                <Header /><BMenu />

                <div className={bgStyles.slider}>
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

                {data.map(item => (
                    <div key={item.id} className={textStyles.name}>
                        {item.name}
                        <div className={textStyles.container}>
                            <div className={textStyles.ImgLogo}><Image src={item.thumbnail} alt="logo" width={250} height={250} /></div>
                            <div className={textStyles.text}>{item.text1}</div>
                            <div className={textStyles.title}>{item.title}</div>
                            <div className={textStyles.text}>{item.text2}</div>
                            <div className={textStyles.image}><Image src={item.image} alt="title" width={400} height={400} /></div>
                            <div className={textStyles.text}><div id={textStyles.text3}>{item.text3}</div></div>
                        </div>
                        <div>

                            <div className={textStyles.ContainerItem}>
                                {item.listdetail.map(item1 => (
                                    <div key={item1.id} className={textStyles.items}>
                                        <Link href={`item/${item1.id}`}>
                                            <Image className={textStyles.imageItems} src={item1.thumbnail} alt="title" width={300} height={450} />
                                            <br /><br />{item1.text}<br />________
                                        </Link>
                                    </div>
                                )
                                )}
                            </div>
                        </div>
                    </div>
                )
                )}
                <Footer /><FMobile />
            </div>
        </div>
    );
}
export default page;

