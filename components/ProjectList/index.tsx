import {AnimatePresence, motion, useMotionValue, useVelocity} from 'framer-motion';
import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import preview from '../../public/yellowflash.png';
import {useRouter} from "next/router";
import RevText from "../RevText";

const MouseContext = React.createContext<any>(null);

const ProjectsLibrary = () => {
    const [tilt, setTilt] = useState<number>(0);
    const [mouseX, setMouseX] = useState<number>(0)
    const [xProgress, setXProgress] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)

    const projectContainerNode: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    let timestamp: number | null = null;
    let lastMouseX: number = 0;

    const handleMouseMove = (e: any) => {
        if (!projectContainerNode.current) return;
        const rect = projectContainerNode.current.getBoundingClientRect();
        const width = projectContainerNode.current.offsetWidth;
        setWidth(width);
        let x = e.clientX - rect.left; //x position within the element.

        if (!timestamp) {
            timestamp = Date.now();
            lastMouseX = e.screenX;
            return;
        }

        const now = Date.now();
        let dt = now - timestamp;
        let dx = e.screenX - lastMouseX;
        let speedX = Math.round(dx / dt);
        let clampedSpeed = Math.min(Math.max(speedX, -5), 5); //clamp tilt to (-5,5)

        timestamp = now;        //reset timestamp
        lastMouseX = e.screenX;

        setTilt(clampedSpeed)
        setXProgress(Math.round((x / width) * 100))
        setMouseX(x);
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return (
        <div className='w-screen h-screen flex flex-col justify-center'>
            <MouseContext.Provider value={{
                xProgress,
                mouseX,
                tilt,
                containerWidth: width,
            }}>
                <div
                    ref={projectContainerNode}
                    className='flex flex-col justify-center md:container tablet:container mx-auto '>
                    <RevText>MY WORK</RevText>
                    <ProjectItem
                        id={'yellowflash'}
                        title={'YELLOWFLASH'}
                        info={{year: '2022', type: 'E-shop', description: 'Projekt k životopisu'}}/>



                </div>
            </MouseContext.Provider>
        </div>
    );
};

interface ProjectItem {
    id:string;
    title: string;
    info: {
        year: string,
        type: string,
        description: string
    }
}

const ProjectItem: React.FC<ProjectItem> = ({id,title, info}) => {
    const [isMouseHovering, setIsMouseHovering] = useState<boolean>(false)
    const [isHoveringImage, setIsHoveringImage] = useState<boolean>(false)
    const imgNode: React.MutableRefObject<HTMLImageElement | null> = useRef(null);

    const {xProgress, mouseX, tilt, containerWidth} = useContext(MouseContext);
    const [mouseY, setMouseY] = useState<number>(5);
    const [imgPos, setImgPos] = useState<{ x: number, y: number }>({x: 0, y: 0})

    const router = useRouter();
    const imageContainerVariants = {
        initial: {
            x: imgPos.x,
            y: '-50%',

        },
        hover: {
            x: imgPos.x,
            y: imgPos.y,
            rotate: tilt,
            scale: 1,
            transition: {
                type: "spring",
                mass: 0.1,
                stiffness: 200,
                scale: {
                    stiffness: 900,
                }
            }
        },
        exit: {
            x: imgPos.x,
            y: '-50%',
        }
    }
    const descriptionVariants = {
        hover: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.08,
            }
        }),
        initial: {
            opacity: 0,
            x: -30,

        }
    }
    const imageVariants = {
        initial: {
            scaleX: 0.8,
            scaleY: 0.8,
            opacity: 1,
            clipPath: 'polygon(25% 25%,75% 25%,75% 75%,25% 75%)',
            zIndex: 2,
        },
        hover: {
            scaleX:1.5,
            scaleY: 1.5,
            opacity: 1,
            zIndex: -10,
            clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
            transition: {
                ease: [0.19, 1, 0.22, 1],
                duration: 0.8,
                type: 'spring',
                mass: 0.1,
                stiffness: 60
            }
        },
        exit: {
            scaleX: 0.4,
            scaleY: 0.4,
            opacity: 0,
            zIndex: -11,
            clipPath: 'polygon(25% 25%,75% 25%,75% 75%,25% 75%)',
            transition:{
                opacity: {
                    duration: 0.25
                }
            }
        }
    }
    const handleMouseMove = (e: any) => {
        const rect: any = e.currentTarget.getBoundingClientRect();
        let y: number = e.clientY - rect.top;  //y position within the element.
        setMouseY(y);
    }
    const handleOnClick = (e:any)=> router.push(`project/${id}`)
    useEffect(() => {
        const fontSize: number = parseInt(getComputedStyle((document.documentElement)).fontSize.replace('px', ''));

        const img: any = imgNode.current;
        const imgWidth: number = img ? img.offsetWidth : fontSize * 24;
        const imgHeight: number = img ? img.offsetHeight : 0;
        let x: number = clampPosition(containerWidth * 0.45, containerWidth * 0.9, xProgress) - (imgWidth / 2);
        let y: number = mouseY - (imgHeight / 2);
        // TODO: fixnout hejbani img
        setImgPos({
            x,
            y
        })
    }, [xProgress, imgNode, mouseX, mouseY,isMouseHovering])

    return (
        <AnimatePresence>
            <motion.div
                onMouseEnter={(e) => {
                    e.stopPropagation();
                    setIsMouseHovering(true);

                }}
                onMouseLeave={(e) => {
                    e.stopPropagation();
                    console.log('a jet ofuč')
                    setIsMouseHovering(false);

                }}
                onMouseMove={handleMouseMove}
                onClick={handleOnClick}
                className={'relative w-full flex items-center project py-4 interactable'}>
                <div className={'w-full flex items-center z-50'}>
                    <button onFocus={() => setIsMouseHovering(true)}
                            onBlur={() => setIsMouseHovering(false)}>
                        <h2 className={`text-7xl font-oswald tablet:text-5xl font-medium ${isMouseHovering ? 'text-black' : 'text-gray-500'} transition-all mobile:mix-blend-difference`}>{title}</h2></button>
                    <motion.div
                        initial={'initial'}
                        animate={isMouseHovering ? 'hover' : 'initial'}
                        exit={'exit'}
                        className={'flex flex-col    text-sm ml-7 z-10  '}>
                        <motion.span custom={3} variants={descriptionVariants} className={'ml-9'}>{info.description} </motion.span>
                        <motion.span custom={2} variants={descriptionVariants} className={'ml-6'}>{info.type} </motion.span>
                        <motion.span custom={1} variants={descriptionVariants} className={'ml-3'}>{info.year} </motion.span>
                    </motion.div>
                </div>
                <AnimatePresence>
                    {isMouseHovering &&
                        <motion.div
                            initial={'initial'}
                            animate={isMouseHovering ? 'hover' : 'initial'}
                            exit={'exit'}
                            variants={imageContainerVariants}
                            onMouseEnter={() => setIsHoveringImage(true)}
                            onMouseLeave={() => setIsHoveringImage(false)}
                            className={'  w-60 h-max absolute top-0 left-0 mobile:w-72'}>
                            <motion.img
                                variants={imageVariants}
                                ref={imgNode} src={preview.src} alt={'project'}
                                className={'w-full h-full relative origin-center object-cover bg-gray-50  overflow-hidden'}/>

                        </motion.div>}
                </AnimatePresence>
            </motion.div>

        </AnimatePresence>
    );
};


const clampPosition = (min: number, max: number, percentage: number) : number => min + ((max - min) * (percentage / 100))


export default ProjectsLibrary;