import Image from "next/image";
import bar from "./config/bar.json";
import bgStyles from "./css/bgStyle.module.css";
// import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import bg from "../../../../css/Background.module.css";
import RandomLogo from "../../../../components/RandomLogo";
const pageChild = () => {
    return (
        <div className={bg.container}>
            <Header />
            {bar.map(item => (
                <div key={item.id} className={bgStyles.bg}>
                    <a href={`/detail/${item.id}`}>
                        <Image
                            src={item.image}
                            alt="pageChild"
                            width={1728}
                            height={200}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </a>
                    <div className={bgStyles.container}>
                        <div key={item.id} className={bgStyles.img}>
                            <a href={`/detail/${item.id}`}>
                                <Image
                                    src={item.image1}
                                    alt="title"
                                    width={550}
                                    height={900}
                                    objectFit="cover"
                                />
                            </a>
                            <div className={bgStyles.text}>{item.text}</div>
                        </div>
                        <div className={bgStyles.bar}>
                            <div className={bgStyles.title}>{item.title} </div>
                            <div className={bgStyles.text1}><a style={{ color: '#D0CCC6' }}>Áo: </a> <a href={item.link1}>{item.link1}</a></div>
                            <div className={bgStyles.image2}><Image src={item.image2} alt="pageChild" width={400} height={500} /></div>
                            <div className={bgStyles.title1}>{item.title}</div>
                            <div className={bgStyles.text1}><a style={{ color: '#D0CCC6' }}>Quần: :</a> <a href={item.link2}>{item.link1}</a></div>
                            <div className={bgStyles.image3}><Image src={item.image3} alt="pageChild" width={400} height={500} /></div>
                            <div className={bgStyles.title}>{item.title2}</div>
                            <div className={bgStyles.text1}><a style={{ color: '#D0CCC6' }}>Giày :</a> <a href={item.link3}>{item.link1}</a></div>
                            <div className={bgStyles.image4}><Image src={item.image4} alt="pageChild" width={400} height={500} /></div>
                        </div>
                    </div>
                    <RandomLogo />
                </div>

            ))}
            <Footer />
        </div>
    );
}
export default pageChild;