'use client'
import React, { useState } from 'react';
import axios from 'axios';
import pageM from "../css/main.module.css";
import Link from 'next/link';

const mainPage: React.FC = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [error, setError] = useState('');
    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setThumbnail(`/brandLogo/${file.name}`);

        }
    };
    const checkIdExistence = async (id: string) => {
        try {
            const response = await axios.get(`/api/admin/main/${id}`);
            return response.data.exists;
        } catch (error) {
            console.error('Error checking ID existence:', error);
            return false;
        }
    };
    const handleSubmit = async () => {
        try {
            if (!id) {
                setError('ID cannot be empty.');
                alert('ID cannot be empty.');
                return;
            }
            const idExists = await checkIdExistence(id);
            if (idExists) {
                setError('ID already exists.');
                alert('ID already exists.');

            }
            else {
                const response = await axios.post('/api/admin/main', {
                    id: id,
                    name: name,
                    description: description,
                    thumbnail: thumbnail
                });
                const data = response.data;
                console.log(data);
                if (data.isLogged === false) {
                    alert('Create Success');
                }
                else {
                    alert('ID already exists');
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className={pageM.container}>
            <div className={pageM.body}>
                <div className={pageM.bar}>
                    <div><img src='/FashionNews/logo.svg' className={pageM.logo}></img></div>
                    <h2>ADMIN</h2>
                </div>
            </div>
            <div className={pageM.bodyContent}>
                <div className={pageM.menu}>
                    <div className={pageM.contentM}>
                        <Link id={pageM.link} href="#">Main</Link>
                        <Link id={pageM.link} href="#">Page 1</Link>
                        <Link id={pageM.link} href="#">Page 2</Link>
                    </div>
                </div>
                <div className={pageM.panel}>
                    <div className={pageM.content}>
                        <div className={pageM.group}>
                            <a id={pageM.text}> Enter ID </a><br />
                            <input id={pageM.input}
                                type="text"
                                placeholder="ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            /><br /><br />
                            <a id={pageM.text}> Enter Name </a><br />
                            <input id={pageM.input}
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /></div>
                        <div className={pageM.group}>
                            <a id={pageM.text}> Enter Description </a><br />
                            <input id={pageM.input}
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            /><br /><br />
                            <input id={pageM.img}
                                type="file"
                                accept="image/*"
                                onChange={handleThumbnailChange}
                            /><br /><br />
                            <input id={pageM.input}
                                type="text"
                                placeholder="Thumbnail"
                                value={thumbnail}
                                disabled
                                onChange={(e) => setThumbnail(e.target.value)}
                            />

                            <button onClick={handleSubmit}>Submit</button></div>
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </div >
    );
};
export default mainPage;
