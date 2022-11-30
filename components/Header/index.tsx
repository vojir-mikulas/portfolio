import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion, useScroll} from "framer-motion";
import {useRouter} from "next/router";
import Link from "next/link";

const HeaderHero = () => {
    const [animate, setAnimate] = useState(false)
    const [navVisible, setNavVisible] = useState(false)
    const [staggerAnimation, setStaggerAnimation] = useState<boolean>(false)
    const [isChatVisible, setIsChatVisible] = useState<boolean>(false)
    const router = useRouter()

    const {scrollY} = useScroll();
    useEffect(() => {
        if(scrollY.get() >= 300 && !staggerAnimation) setNavVisible(true)
        return scrollY.onChange((latest) => {
            if (latest >= 300 && !staggerAnimation) {
                setAnimate(true)
            } else {
                setAnimate(false)
                if (setNavVisible) setNavVisible(false)
            }
        })
    }, [])


    return (
        <>
            <AnimatePresence>
                {(isChatVisible && navVisible) && <Chat/>}
            </AnimatePresence>
            <AnimatePresence>
                {(navVisible || router.asPath !== '/') && <Header setStaggerAnimation={setStaggerAnimation}/>}
            </AnimatePresence>
            <Hero animate={animate} setNavVisible={setNavVisible} navVisible={navVisible} setStaggerAnimation={setStaggerAnimation}/>
        </>
    );
};


interface HeroProps {
    animate : boolean;
    navVisible : boolean;

    setNavVisible : any;
    setStaggerAnimation : any;
}
const Hero : React.FC<HeroProps> = ({animate,navVisible,setNavVisible,setStaggerAnimation}) => {
    const router = useRouter()
    const textVariants = {
        initial: {
            scaleX: 0,
            opacity: 0,
            transition: {}
        },
        idle: {
            scaleX: 1,
            opacity: 1,
            transition: {
                delay: 0.5
            }
        },
        close: {
            scaleX: 0,
            opacity: 0,
            transition: {
                ease: 'linear',
                duration: 0.1
            }
        },
    }
    const logoVariants = {
        initial: {
            left: '50%',
            marginLeft: '-2rem',
            opacity: 0,
            transition: {
                duration: 4
            }
        },

        idle: {
            opacity: 1,
            left: 0,
            marginLeft: 0,
            transition: {
                opacity: {
                    delay: 0.1,
                    duration: 0.1
                },
                left: {
                    delay: 0.5
                },
                marginLeft: {
                    delay: 0.01,
                    duration: 0.1
                },
                ease: 'linear',
            }
        },
        close: {
            opacity: 1,
            left: '50%',
            marginLeft: '-2rem',
        },
    }
    return (
        <>
            {router.asPath === '/' && <section className={'w-screen h-screen bg-white flex flex-col '}>
                <motion.div layout className={'flex flex-col items-center justify-center  relative h-full'}>
                <SubtitleHeading> Not your average front-end developer</SubtitleHeading>
                    <motion.div
                        initial={'initial'}
                        animate={animate ? 'close' : 'idle'}
                        onAnimationComplete={(definition) => {
                            if (definition === 'close') setNavVisible(true)
                            if (definition === 'idle') setStaggerAnimation(false)
                        }}
                        onAnimationStart={() => {
                            setStaggerAnimation(true)
                        }}

                        className={'text-9xl font-bold fixed w-max h-max  z-50 select-none'}>
                        {!navVisible && <AnimatePresence>
                             
                            <motion.h1
                                key='logo'
                                layout
                                layoutId='logo'

                                variants={logoVariants}
                                className={'block absolute w-max h-max'}>V
                            </motion.h1>

                            <motion.h1
                                key='text'
                                variants={textVariants}
                                className={`block relative ml-20`}>OJÍŘ
                            </motion.h1>
                        </AnimatePresence>}
                    </motion.div>
                    <ScrollIcon></ScrollIcon>
                </motion.div>

            </section>}
        </>
    );
};



const Header = ({setStaggerAnimation}: any) => {
    const [openNav, setOpenNav] = useState<boolean>(false)
    const router = useRouter();
    const navVariants = {
        initial: {
            opacity: 0,
            scaleY: 0,
        },
        animate: {
            opacity: 1,
            scaleY: 1,
        },
        exit: {
            opacity: 0,
            scaleY: 0,
            transition: {
                duration: 0.1
            }
        },
    }
    const liVariants = {
        initial: {
            y: 40,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
        exit: {
            y: 20,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    }
    const animatedNav = () => {
        interface navItem {
            name: string;
            href?: string;
        }

        const navItems: Array<navItem> = [
            {
                name: "Home",
                href: '/'
            },
            {
                name: "About me",
                href: 'about'
            },
            {
                name: "Contact",
                href: 'contact'
            }
        ];

        return navItems.map((item, index) => {
            return (
                <motion.li
                    key={item.name}
                    variants={liVariants}
                    transition={{
                        delay: index * 0.2
                    }}
                    className='inline-block interactable'>
                    <Link href={`${item.href}`}>{item.name}</Link>
                </motion.li>

            )
        })
    }
    return (
        <>
            <motion.header
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
                className={'fixed w-full flex items-center z-50 hover:bg-white mobile:hover:bg-transparent transition-all h-14 top-0 mobile:flex-col '}>
                <div
                    className='flex justify-between items-center md:container mx-auto   mobile:bg-white px-4 w-full mobile:py-3'>
                    <motion.div
                        onLayoutAnimationComplete={() => {
                            setStaggerAnimation(false)
                        }}
                        layoutId={router.asPath === '/' ? 'logo' : ''}
                        className={'font-bold text-4xl text-center interactable  select-none mobile:text-6xl'}>
                        <h1><Link href={'/'}>V</Link></h1>
                    </motion.div>
                    <nav className={'mobile:hidden'}>
                        <ul className='flex gap-3 items-center font-bold'>
                            {animatedNav()}
                        </ul>
                    </nav>
                    <motion.div
                        initial={'initial'}
                        exit={'initial'}
                        animate={openNav ? "open" : "closed"}
                        className={'hidden mobile:block text-3xl text-center mobile:h-10 mobile:w-10'}
                        onClick={() => setOpenNav(!openNav)}><MenuToggle/></motion.div>
                </div>
                <AnimatePresence>
                    {openNav &&
                        <motion.nav
                            variants={navVariants}
                            initial={'initial'}
                            animate={'animate'}
                            exit={'exit'}
                            className={'hidden mobile:block flex flex-col w-full px-3 py-5 bg-gray-100 origin-top'}>
                            <ul className='flex flex-col gap-3 items-start font-bold'>
                                {animatedNav()}
                            </ul>
                        </motion.nav>}
                </AnimatePresence>
            </motion.header>
        </>
    );
};

const Path: React.FC<any> = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle: React.FC<any> = () => (
    <>
        <motion.svg
            variants={{
                initial: {
                    opacity: 0
                },
                open: {
                    opacity: 1
                },
                closed: {
                    opacity: 1
                }
            }}
            className='w-full h-full' viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: {d: "M 2 2.5 L 20 2.5"},
                    open: {d: "M 3 16.5 L 17 2.5"}
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: {opacity: 1},
                    open: {opacity: 0}
                }}
                transition={{duration: 0.1}}
            />
            <Path
                variants={{
                    closed: {d: "M 2 16.346 L 20 16.346"},
                    open: {d: "M 3 2.5 L 17 16.346"}
                }}
            />
        </motion.svg>
    </>
);


const Chat = () => {
    return (
        <motion.div
            exit={{opacity: 0}}
            className='fixed right-10 top-20  gap-4 flex flex-col text-center text-sm w-[20vw] font-medium '>
            <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    delay: 1
                }}
                className='self-start bg-gray-200 p-3 origin-bottom-left rounded-full'>What is my purpose?
            </motion.div>
            <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    delay: 2
                }}
                className='self-end text-white bg-blue-500 p-3 origin-bottom-right rounded-full'>You are a NavBar.
            </motion.div>
            <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    delay: 4
                }}
                className='self-start bg-gray-200 p-3 origin-bottom-left rounded-full'>Oh my god..
            </motion.div>
            <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    delay: 5
                }}
                className='self-end text-white bg-blue-500 p-3 origin-bottom-right rounded-full'>Welcome to the club,
                Pal.
            </motion.div>
        </motion.div>)
}

const ScrollIcon = () => {
    const [animate, setAnimate] = useState<boolean>(true)
    const {scrollY} = useScroll();
    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest >= 50) {
                setAnimate(false)
            } else {
                setAnimate(true)
            }
        })
    }, [])
    const iconVariants = {
        initial:{
            y:-40,
            opacity:0
        },
        animate: {
            y: [0, 30, 0],
            opacity: 1,
            transition: {
                    y:{
                        repeat: Infinity,
                        duration: 1.5,
                    },
                    type: 'spring',
                    duration: 1.5,
            }
        }
    }

    return (
          <AnimatePresence>
              {animate &&
                  <motion.div
                  initial={'initial'}
                  animate={'animate'}
                  exit={'initial'}
                  variants={iconVariants}
                  className={'absolute bottom-16'}>
                  Scroll
              </motion.div>}
          </AnimatePresence>
    );
};

const SubtitleHeading : React.FC<{children:string}> = ({children})=>{
    const [animate, setAnimate] = useState<boolean>(true)
    const {scrollY} = useScroll();
    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest >= 50) {
                setAnimate(false)
            } else {
                setAnimate(true)
            }
        })
    }, [])
    const subtitleVariants = {
        initial:{
            y:-40,
            opacity:0
        },
        animate: {
            y:0,
            opacity: 1,
            transition: {
                    type: 'spring',
                    duration: 1.5,
            }
        }
    }
    return (
        <AnimatePresence>
        {animate &&
           <motion.span  initial={'initial'}
           animate={'animate'}
           exit={'initial'}
           variants={subtitleVariants}
            className='text-orange-300 inline-block mb-52 text-sm font-normal w-max tracking-widest fixed'>{children}</motion.span>}
         
    </AnimatePresence>
        
    )
}
export default HeaderHero;