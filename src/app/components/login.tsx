import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginAccout from "../css/Login.module.css";

const Login = () => {
    return (
        <button type="button" className={LoginAccout.loginBtn} style={{ border: 'none', marginRight: '-10px' }}>
            <Image src="/icon/login.svg" width={22} height={22} alt="Login" /></button>
    )
}
export default Login;