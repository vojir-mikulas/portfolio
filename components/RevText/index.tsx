import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';

interface props {
    children: string;

}

const Text: React.FC<props> = ({children}) => {
    const [characters, setCharacters] = useState<any>(children.split(''))

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

        >
            <AnimatePresence>
                {characters.map((char: string, index: number) => (
                    <motion.div
                        initial={'initial'}
                        whileInView={'reveal'}
                        exit={'initial'}
                        custom={index}
                        className={'text-8xl font-bold inline-block  text-stroke my-10'}
                        variants={charVariants}
                        key={char}>{char} </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default Text;