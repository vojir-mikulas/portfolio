import {motion} from "framer-motion";

import React, {useEffect, useRef, useState} from "react";
import PopInText from "../PopInText";

const Card = () => {
    return (
        <motion.button
            initial={'initial'}
            whileHover={'hover'}
            whileFocus={'hover'}
            className={'interactable bg-violet-500  focus:outline-none focus:ring focus:ring-blue-500 relative w-[50rem] h-96 hover:scale-105 overflow-hidden transition-all rounded-xl  text-6xl font-bold text-white flex text-left'}
        >
            <div className={'p-16'}>
                <h3> About me</h3>
                <h4><PopInText text={'Education, technology stack etc...'}/></h4>
            </div>
            <div>
                <AnimatedBGText/>
            </div>
        </motion.button>
    );
};


const AnimatedBGText = () => {
    const wordNode: any = useRef(null)
    const [wordHeight, setWordHeight] = useState<number>(114)
    const textVariants = {
        initial: {
            y: 0
        },
        hover: (custom: number) => ({
            y: wordHeight * (-1),
            transition: {
                ease:[0.87, 0, 0.04, 1],
                repeat:Infinity,
                duration:1.2,
                delay:custom
            }
        })
    }
    useEffect(() => {
        if (wordNode.current) setWordHeight(wordNode.current.offsetHeight)
    }, [wordNode.current])
    const renderBGText = () => {
        const textNodes: Array<any> = [];
        for (let i = 0; i < 6; i++) {
            textNodes.push(
                <motion.div>
                    <motion.span className={'inline-block origin-bottom'}
                                 custom={0}
                                 variants={textVariants} ref={wordNode}>V</motion.span>
                    <motion.span>OJ</motion.span>
                    <motion.span className={'inline-block origin-bottom'}
                                 custom={0.1}
                                 variants={textVariants}>Í</motion.span>
                    <motion.span className={'inline-block origin-bottom'}
                                 custom={0.2}
                                 variants={textVariants}>Ř</motion.span>
                </motion.div>
            )
        }
        return textNodes
    }
    return (
        <motion.div
            className={'opacity-20 absolute right-24 -top-10 text-8xl flex flex-col'}>
            {renderBGText()}
        </motion.div>
    );
};

export default Card