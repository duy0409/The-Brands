import React from "react";
import Link from "next/link";
import Image from "next/image";
import like from "../css/Login.module.css";

const Like = () => {
    return (
        <button type="button" className={like.like}
            style={{ backgroundColor: '#181a1b', borderRadius: '5px 5px 5px 5px' }}
        ><Image src="/icon/heart.svg" width={24} height={24} alt="like" /></button>
    )
}
export default Like;