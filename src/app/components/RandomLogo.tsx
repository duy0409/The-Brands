import React from 'react';
import brands from "../config/brand.json";
import Image from 'next/image';
import RLogo from "../css/RandomLogo.module.css";

const Ran = () => {
    const getRandomIndexes = () => {
        const randomBrand: number[] = [];
        while (randomBrand.length < 5) {
            const randomIndex = Math.floor(Math.random() * brands.length);
            if (!randomBrand.includes(randomIndex)) {
                randomBrand.push(randomIndex);
            }
        }
        return randomBrand;
    };
    const randomIndexes = getRandomIndexes();
    const randomData = randomIndexes.map(index => brands[index]);

    return (
        <div>
            <a className={RLogo.title}>Gợi ý thương hiệu<br />_________</a>
            <ul>
                {randomData.map(item => (
                    <div key={item.id}>
                        <a href={`detail/${item.id}`}>
                            {item.thumbnail && <Image src={item.thumbnail} alt="title" width={150} height={150} />}

                        </a>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Ran;
