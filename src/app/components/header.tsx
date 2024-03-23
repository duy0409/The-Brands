import Image from "next/image";
import SearchBar from "./SearchBar";
import headerStyles from "../css/header.module.css";
import Login from "./login";
import Like from "./like";
import brands from "../config/brand.json";
const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <a href="/"><Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" /></a>
            </div>
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.menu}>
                    <li>
                        <div className={headerStyles.item}>
                            <div id={headerStyles.text}>Vietnamese Brands ᐯ</div>
                            <div className={headerStyles.dropdown}>
                                <a className={headerStyles.dropdownItem}></a>
                                <a href="/detail/20" className={headerStyles.dropdownItem}>Yame.vn</a>
                                <a href="/detail/9" className={headerStyles.dropdownItem}>THEK300</a>
                                <a href="/detail/14" className={headerStyles.dropdownItem}>MENDE</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={headerStyles.item}>
                            US UK Brands ᐯ
                            <div className={headerStyles.dropdown}>
                                <a href="#" className={headerStyles.dropdownItem}></a>
                                <a href="/detail/7" className={headerStyles.dropdownItem}>Fear Of God</a>
                                <a href="/detail/13" className={headerStyles.dropdownItem}>Levis</a>
                                <a href="/detail/6" className={headerStyles.dropdownItem}>Essential</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={headerStyles.item}>
                            Korean Brands ᐯ
                            <div className={headerStyles.dropdown}>
                                <a href="#" className={headerStyles.dropdownItem}></a>
                                <a href="/detail/1" className={headerStyles.dropdownItem}>ADLV</a>
                            </div>
                        </div>
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
