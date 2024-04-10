'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Style from "../css/Login.module.css";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [inputType, setInputType] = useState('password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
        setInputType(showPassword ? 'text' : 'password');
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        (async () => {
            try {
                const response = await fetch('/api/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                if (data.isLogged) {
                    router.push('/');
                } else {
                    alert("Login failed");
                }
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    };
    return (
        <div className={Style.loginPage}>
            <div className={Style.containerPageLogin}>
                <Link href="/"><Image className={Style.image} src="/FashionNews/logo.svg" alt="logo" width={190} height={40} /></Link>
                <div className={Style.container}>
                    <a id={Style.title}>Login</a><br /><br /><br /><br />
                    <form className={Style.bodyContent}>
                        <label htmlFor="email" className={Style.label}>Email:</label>
                        <input className={Style.inputE} id="email" name="email" value={email} onChange={handleEmailChange} /><br />
                        <label htmlFor="password" className={Style.label}>Password:</label>
                        <div className={Style.fromPassword}>
                            <input className={Style.inputP} type={inputType} id="password" name="password" value={password} onChange={handlePasswordChange} />
                            <button className={Style.eye} onClick={togglePasswordVisibility}>{showPassword ? <Image src="/login/eye.svg" alt="eye" width={22} height={22} /> : <Image src="/login/eyeOff.svg" alt="eye" width={22} height={22} />}</button>
                        </div>
                    </form><br /><br /><br />
                    <div className={Style.container1}>
                        <Link href="/ForgotPassword" className={Style.fgPassword}>Forgot Password?</Link>
                    </div>
                    <br />
                    <div>
                        <button className={Style.btnSignIn} type="submit" onClick={handleSignIn}>Sign in</button>

                    </div>
                    <br /><div className={Style.linkHere}>
                        <a >Don’t have an account?</a>
                        <Link href='/Register' id={Style.here} style={{ textDecoration: 'none' }}>ㅤSign up here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
