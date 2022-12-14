import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';

interface props {
    children: string;

}

const Text: React.FC<props> = ({children}) => {
    const [characters, setCharacters] = useState<any>(children.split(''))
    const charVariantsDarkTheme = {
        initial: {
            color: "rgba(0,0,0,0)",
            WebkitTextStrokeWidth: '0px',
        },
        reveal: (custom: number) => ({
            color: ["rgba(0,0,0,0)","rgb(255,255,255)","rgba(0,0,0,0)"],
            WebkitTextStrokeWidth: ['0px','0px','1px'],
            WebkitTextStrokeColor: 'rgb(255,255,255)',
            transition: {
                delay: 0.1 * custom,
                duration: 1,
            }
        }),

    }
    const charVariants = {
        initial: {
            color: "rgba(0,0,0,0)",
            WebkitTextStrokeWidth: '0px',
        },
        reveal: (custom: number) => ({
            color: ["rgba(0,0,0,0)","rgb(0,0,0)","rgba(0,0,0,0)"],
            WebkitTextStrokeWidth: ['0px','0px','1px'],
            transition: {
                delay: 0.1 * custom,
                duration: 1,
            }
        }),

    }
    return (
        <motion.div
        className={'z-10 '}
        >
            <AnimatePresence>
                {characters.map((char: string, index: number) => (
                    <motion.div
                        initial={'initial'}
                        whileInView={'reveal'}
                        exit={'initial'}
                        custom={index}
                        className={'text-9xl font-bold inline-block text-stroke my-10 tablet:text-6xl  mr-1'}
                        variants={charVariants}
                        key={`${char + index}`} >{char} </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default Text;