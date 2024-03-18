import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginAccout from "../css/Login.module.css";

const Login = () => {
    return (
        <button type="button" className={LoginAccout.loginBtn}><Image src="/login.png" width={24} height={24} alt="Login" /></button>
    )
}
export default Login;