import {AnimatePresence, motion} from "framer-motion"
import React, {useState} from "react";
import PopInText from "../PopInText";
import ProjectModal from "../ProjectModal";

const MeetSection: React.FC<any> = () => {
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false)
    const greetingsVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        }
    };
    const vaweVariants = {
        initial: {
            scale: 1
        },
        animate: {
            scale: 1,
            rotate: [10, -30, 10],
            transition: {
                delay: 0.4,
                duration: 0.4,
                type: 'spring',
                repeat: 1
            }
        }
    };
    const headingVariants = {
        initial: {
            opacity: 0
        },
        animate: (custom: number) => ({
            opacity: 1,
            transition: {
                delay: (custom * 0.1) + 0.2
            }
        }),
        exit: {
            opacity: 0
        }
    }
    const locationVariants = {
        initial: {
            opacity: 0,
            y: 60
        },
        animate: {
            opacity: 1,
            y: 0,
            transition:{
                delay: 0.5,
                duration:0.3,
                type:'spring'
            }
        }
    }
    return (<motion.div
        initial={'initial'}
        whileInView={'animate'}

        className='md:container mx-auto h-max flex flex-col items-center justify-center mb-20 mobile:text-center '>
        <div className=' '>
            <p className='text-xl ml-2 mobile:text-lg'>
                <motion.span className="inline-block" variants={greetingsVariants}>Ahoj <motion.span
                    className="inline-block  " variants={vaweVariants}>👋</motion.span>,
                </motion.span>
                <PopInTextAnimate> jmenuju se Mikuláš Vojíř a jsem</PopInTextAnimate>
            </p>
            <motion.h1 custom={1} variants={headingVariants}
                       className='font-oswald inline-block text-9xl mobile:text-7xl'>
                Fullstack
            </motion.h1>

            <motion.h1 custom={2} variants={headingVariants}
                       className='font-oswald text-stroke text-transparent text-9xl mobile:text-7xl'>
                Web Developer
            </motion.h1>
            <motion.p variants={locationVariants} className='text-sm ml-4 mt-4'>Based in Prague, Czech Republic
            </motion.p>
        </div>
        <Button onClick={()=> setIsModalOpen(true)}> Potřebuju nové stránky</Button>
        <AnimatePresence>
            {isModalOpen ? <ProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/> : null}
        </AnimatePresence>
    </motion.div>)
}

const Button: React.FC<{ children: string, onClick?: () => void }> = ({children, onClick}) => {
    const buttonVariants = {
        initial: {
            opacity: 0,
            scale: 0
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                delay: 0.4,
                duration: 0.2,

            }
        }
    }
    return (
        <motion.button
            initial={'initial'}
            whileInView={'animate'}
            variants={buttonVariants}
            onClick={() => {
                if (onClick) onClick()
            }}
            className={'w-50 border-2  interactable rounded-md dark:border-white border-gray-900 mt-10  p-3 dark:hover:bg-white dark:hover:text-black dark:focus:bg-white dark:focus:text-black hover:bg-gray-900 hover:text-white hover:scale-110 focus:bg-gray-900 focus:text-white  focus:scale-110 transition-all'}>
            {children}

        </motion.button>
    );
};


const PopInTextAnimate: React.FC<{ children: string }> = ({children}) => {

    const [words, setWords] = useState<Array<string>>(children.split(' '))
    return (
        <motion.span>
            {words.map((word, index) => (
                <Word
                    key={word + index}
                    text={word}
                    custom={index}
                />
            ))}
        </motion.span>
    );
}
const Word: React.FC<{ text: string, custom: any }> = ({text, custom}) => {
    const wordVariants = {
        animate: (custom: any) => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.06}
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
            className={'inline-block mr-2 '}
        >
            {text}
        </motion.span>
    );
};


export default MeetSection