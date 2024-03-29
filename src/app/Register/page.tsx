'use client'
import React, { useState } from 'react';

import Style from "../css/Login.module.css";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState('password');

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
        setInputType(showPassword ? 'text' : 'password');
    };
    return (
        <div className={Style.loginPage}>

            <Image className={Style.image} src="/FashionNews/logo.svg" alt="logo" width={190} height={40} />
            <div className={Style.container}>
                <a id={Style.title}>Register</a><br /><br />
                <form className={Style.bodyContent}>
                    <label htmlFor="email" className={Style.label}>User name or Email:</label>
                    <input className={Style.inputE} id="email" name="email" /><br />
                    <label htmlFor="password" className={Style.label}>Password:</label>
                    <div className={Style.fromPassword}>
                        <input className={Style.inputP} type={inputType} id="password" name="password" />
                        <button className={Style.eye} onClick={togglePasswordVisibility}>{showPassword ? <Image src="/login/eye.svg" alt="eye" width={22} height={22} /> : <Image src="/login/eyeOff.svg" alt="eye" width={22} height={22} />}</button></div>
                    <label htmlFor="password" className={Style.label}>Confirm Password:</label>
                    <div className={Style.fromPassword}>
                        <input className={Style.inputP} type={inputType} id="password" name="password" />
                        <button className={Style.eye} onClick={togglePasswordVisibility}>{showPassword ? <Image src="/login/eye.svg" alt="eye" width={22} height={22} /> : <Image src="/login/eyeOff.svg" alt="eye" width={22} height={22} />}</button></div>
                </form><br />
                <div>
                    <button className={Style.btnSignIn}>Sign up</button>
                </div>
                <br /><div className={Style.linkHere}>
                    <a >Already have an account? </a>
                    <a href='/Login' id={Style.here}> Login</a>
                </div>
            </div>

        </div>
    );
};

export default Login;
