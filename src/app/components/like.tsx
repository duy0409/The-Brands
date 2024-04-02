import React from "react";
import Link from "next/link";
import Image from "next/image";
import like from "../css/Login.module.css";

const Like = () => {
    return (
        <button type="button" className={like.like}
            style={{ borderRadius: '10px 10px 10px 10px' }}
        ><Image src="/icon/like.svg" width={24} height={24} alt="like" /></button>
    )
}
export default Like;