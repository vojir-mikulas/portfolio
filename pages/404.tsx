import React from 'react';
import {useRouter} from "next/router";
import cat from "../public/loadingCat.svg";
import { motion } from 'framer-motion';


const NotFoundPage = () => {
    const router = useRouter()
    const {id} = router.query

    return (
        <motion.main

            className={'flex flex-col justify-center items-center w-screen h-screen'}>
            <h2 className={'text-5xl font-bold'}>404 Page not found</h2>
            <figure className={'w-40 h-40'}>
                <img src={cat.src} alt="cat" className={'w-full h-full object-cover'}/>
            </figure>
        </motion.main>
    );
};

export default NotFoundPage;