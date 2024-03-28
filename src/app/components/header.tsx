import Image from "next/image";
import SearchBar from "./SearchBar";
import headerStyles from "../css/header.module.css";
import Login from "./login";
import Like from "./like";
import Link from "next/link";

import brands from "../config/brand.json";
const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <Link href="/"><Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" /></Link>
            </div>
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.menu}>
                    <li>
                        <div className={headerStyles.item}>
                            <div id={headerStyles.text}>Vietnamese Brands ᐯ</div>
                            <div className={headerStyles.dropdown}>
                                <a className={headerStyles.dropdownItem}></a>
                                <Link href="/detail/20" className={headerStyles.dropdownItem}>Yame.vn</Link>
                                <Link href="/detail/9" className={headerStyles.dropdownItem}>THEK300</Link>
                                <Link href="/detail/14" className={headerStyles.dropdownItem}>MENDE</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={headerStyles.item}>
                            US UK Brands ᐯ
                            <div className={headerStyles.dropdown}>
                                <a href="#" className={headerStyles.dropdownItem}></a>
                                <Link href="/detail/7" className={headerStyles.dropdownItem}>Fear Of God</Link>
                                <Link href="/detail/13" className={headerStyles.dropdownItem}>Levis</Link>
                                <Link href="/detail/6" className={headerStyles.dropdownItem}>Essential</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={headerStyles.item}>
                            Korean Brands ᐯ
                            <div className={headerStyles.dropdown}>
                                <a href="#" className={headerStyles.dropdownItem}></a>
                                <Link href="/detail/1" className={headerStyles.dropdownItem}>ADLV</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className={headerStyles.toolbar}>
                <SearchBar />
                <Login />
                <Like />
                {/* <ButtonMenu /> */}
            </div>
        </header>
    );
};

export default Header;
