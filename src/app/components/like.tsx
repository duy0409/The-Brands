import React from "react";
import Link from "next/link";
import Image from "next/image";

const Like = () => {
    return (
        <button type="button"
            style={{ backgroundColor: '#181a1b', border: 'none', borderRadius: '5px 5px 5px 5px' }}
        ><Image src="/icon/heart.svg" width={24} height={24} alt="like" /></button>
    )
}
export default Like;