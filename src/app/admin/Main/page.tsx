'use client'
import React, { useState, ChangeEvent } from 'react';
import Style from "../css/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';

// const main = () => {
//     const [id, setID] = useState('');
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [thumbnail, setThumbnail] = useState('');
//     const [error, setError] = useState('');
//     return (

    
//     )
// }
// export default main;
// (async () => {
//     try {
//         const response = await axios.post('/api/admin/main', {
//             id: id,
//             name: name,
//             description: description,
//             thumbnail: thumbnail
//         });
//         const data = await response.data;
//         console.log(data);
//         if (data.isLogged == false) {
//             alert("Sign Up Success")
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();