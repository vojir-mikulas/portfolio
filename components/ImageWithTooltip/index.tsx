import { motion } from 'framer-motion';
import React, {useEffect, useRef, useState} from 'react';

const ImageWithTooltip = () => {
    const [mouseX, setMouseX] = useState<number>(0)
    const [mouseY, setMouseY] = useState<number>(0)
    const [width,setWidth] = useState<number>(0)
    const [height,setHeight] = useState<number>(0)
    const imgNode: React.MutableRefObject<HTMLDivElement | null> = useRef(null);


    const handleMouse = (e: any) => {
        if (!imgNode.current) return;
        const rect = imgNode.current.getBoundingClientRect();
        const width = imgNode.current?.offsetWidth;
        const height = imgNode.current?.offsetHeight;

        let x = e.clientX - rect.left + 10;
        let y = e.clientY - rect.top + 10;

        setWidth(width)
        setHeight(height)
        setMouseX(x)
        setMouseY(y)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouse)
        return () => {
            window.removeEventListener('mousemove', handleMouse)
        }
    }, [])

    let tooltipSize = 200;
    const tooltipVariants = {
        animate:{
            height: tooltipSize,
            width:  tooltipSize,
            x: clamp(0, width - (tooltipSize ) , mouseX),
            y: clamp(0,height - (tooltipSize ) , mouseY),
            transition: {
                scale: {
                    duration: 0.15
                },
                type: "spring",
                mass: 0.2,
                stiffness: 300
            }
        }
    }
    return (
        <div ref={imgNode} className={'w-full h-[80vh] bg-yellow-500 mb-10 cursorHidden relative'}>
            <motion.div
                animate={'animate'}
                variants={tooltipVariants} className={'absolute bg-black'}>

            </motion.div>
        </div>
    );
};

const clampPosition = (min: number, max: number, percentage: number) : number => min + ((max - min) * (percentage / 100))
const clamp = (min:number, max:number,num:number) => Math.min(Math.max(num, min), max);
export default ImageWithTooltip;