import React from "react";
import Style from "../css/Login.module.css";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    return (
        <div className={Style.loginPage}>
            <Image className={Style.image} src="/FashionNews/logo.svg" alt="logo" width={190} height={40} />
            <div className={Style.container}>
                <h1 id={Style.title}>Login</h1>
                <form className={Style.bodyContent}>
                    <label htmlFor="email" className={Style.label}>User name or Email:</label>
                    <input className={Style.input} id="email" name="email" /><br /><br />
                    <label htmlFor="password" className={Style.label}>Password:</label>
                    <input className={Style.input} type="password" id="password" name="password" />
                </form><br />
                <div className={Style.container1}>
                    <Link href="#" className={Style.fgPassword}>Forgot Password?</Link>
                </div>
            </div>

        </div>
    );
};

export default Login;
