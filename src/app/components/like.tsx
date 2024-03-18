import React from "react";
import Link from "next/link";
import Image from "next/image";

const Like = () => {
    return (
        <button type="button"
            style={{ backgroundColor: '#8F816A', borderRadius: '10px 10px 10px 10px' }}
        ><Image src="/like.png" width={24} height={24} alt="like" /></button>
    )
}
export default Like;