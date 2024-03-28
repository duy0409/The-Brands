import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginAccout from "../css/Login.module.css";

const Login = () => {
    return (
        <button type="button" className={LoginAccout.loginBtn}>
            <Link href="/Login"><Image src="/icon/login.svg" width={24} height={24} alt="Login" /></Link></button>
    )
}
export default Login;