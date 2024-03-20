import Image from "next/image";
import SearchBar from "./SearchBar";
import headerStyles from "../css/header.module.css";
import Login from "./login";
import Like from "./like";

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" />
            </div>
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.menu}>
                    <li>
                        <a className={headerStyles.item}>
                            <a id={headerStyles.text}>Vietnamese Brands ᐯ</a>
                            <div className={headerStyles.dropdown}>
                                <a href="#" className={headerStyles.dropdownItem}></a>
                                <a href="#" className={headerStyles.dropdownItem}>Yame.vn</a>
                                <a href="/Thek300" className={headerStyles.dropdownItem}>THEK300</a>
                                <a href="#" className={headerStyles.dropdownItem}>MENDE</a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className={headerStyles.item}>
                            US UK Brands ᐯ
                            <div className={headerStyles.dropdown}>
                                <a href="#" className={headerStyles.dropdownItem}></a>
                                <a href="#" className={headerStyles.dropdownItem}>Fear Of God</a>
                                <a href="#" className={headerStyles.dropdownItem}>Stussy</a>
                                <a href="#" className={headerStyles.dropdownItem}>Balenciaga</a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className={headerStyles.item}>
                            Korean Brands ᐯ
                            <div className={headerStyles.dropdown}>
                                <a href="#" className={headerStyles.dropdownItem}></a>
                                <a href="#" className={headerStyles.dropdownItem}>ADLV</a>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={headerStyles.toolbar}>
                <SearchBar />
                <Login />
                <Like />
            </div>
        </header>
    );
};

export default Header;
