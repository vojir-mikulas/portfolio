import {motion} from 'framer-motion';
import React, {useState} from 'react';

const AnimatedText: React.FC<{ text: string }> = ({text}) => {
    const [words, setWords] = useState<Array<string>>(text.split(' '))
    return (
        <motion.div>
            {words.map((word, index) => (
                <Word
                    key={word + index}
                    text={word}
                    custom={index}
                />
            ))}
        </motion.div>
    );
};

const Word: React.FC<{ text: string, custom: any }> = ({text, custom}) => {
    const wordVariants = {
        hover: (custom: any) => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        }),
        initial: () => ({
            y: 40,
            opacity: 0,
            transition: {delay: 0.15}
        }),

    }
    return (
        <motion.span
            custom={custom}
            variants={wordVariants}
            className={'inline-block mr-2 text-2xl'}
        >
            {text}
        </motion.span>
    );
};

export default AnimatedText;