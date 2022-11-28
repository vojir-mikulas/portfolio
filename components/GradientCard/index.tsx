import React, {useState} from 'react';
import {motion} from 'framer-motion'
import {useRouter} from "next/router";

interface props {
    title: string;
    subtitle: string;
    href: string;
}

const TwitchCard: React.FC<props> = ({title, subtitle, href}) => {
    const [subtitleWords, setSubTitleWords] = useState<any>(subtitle.split(' '))
    const router = useRouter();
    const gradientMotion = {
        hover: {
            backgroundPosition: '100% 100%',
            scaleX: 1.08,
            scaleY: 1.03,
            transition: {
                default: {ease: "linear", duration: 0.1}
            }
        },
        rest: {
            backgroundPosition: '0% 0%',
            scale: 1,
            transition: {
                default: {ease: "linear", duration: 0.1,}
            }
        }
    }
    const contentBgMotion = {
        hover: {
            backgroundPositionX: '-10%',
            color: 'white',
            transition: {
                duration: 0.1
            }
        },
        rest: {
            color: 'black',
            backgroundPositionX: 0,
            transition: {
                duration: 0.1
            }
        }
    }
    return (
        <motion.button className={'card interactable '}
                       onClick={() => router.replace(`${href}`)}
                       initial='rest' animate='rest' whileHover='hover' whileFocus={'hover'} exit='rest'>
            <motion.div
                variants={contentBgMotion}
                className={'card-content '}>
                <h3 className="card-title">{title}</h3>
                <h4 className="card-subtitle"> {subtitleWords.map((word: string, index: number) => {
                    return (
                        <motion.span
                            variants={{
                                hover: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {delay: index * 0.1}
                                },
                                rest: {
                                    y: 40,
                                    opacity: 0,
                                    transition: {delay: 0.15}
                                }
                            }}
                            key={word}
                            className='word'
                        >{` ${word}`}</motion.span>
                    )
                })}
                </h4>
            </motion.div>
            <motion.div className={'card-gradient'} variants={gradientMotion}></motion.div>
        </motion.button>
    );
};

export default TwitchCard;