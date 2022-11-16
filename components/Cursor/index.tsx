import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion,} from "framer-motion";

const Cursor = () => {
    const cursorSize = 30;
    const {x, y} = useMousePosition();
    const mouseClicked = useMouseClick();
    const mouseHovering = useMouseHover('.interactable');
    const [cursorVariant, setCursorVariant] = useState<string>('default');
    const cursorVariants = {
        default: {
            scale: 1,
            opacity: 1,
            mixBlendMode: 'difference',
            width: cursorSize,
            height: cursorSize,

            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15
                },
                type: "spring",
                mass: 0.2,
                stiffness: 100
            }
        },
        hover: {
            scale: 1.5,
            opacity: 1,
            width: cursorSize,
            height: cursorSize,
            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15,
                    type: "spring",
                },
                type: "spring",
                stiffness: 500,
                damping: 28
            }
        },
        hoverClick: {
            scale: 2,
            opacity: 1,
            width: cursorSize,
            height: cursorSize,
            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15,
                    type: "spring",
                },
                type: "spring",
                stiffness: 500,
                damping: 28
            }
        },
        click: {
            scale: 1.5,
            opacity: 1,
            mixBlendMode: 'difference',
            width: cursorSize,
            height: cursorSize,
            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15,
                    type: "spring",
                },
                type: "spring",
                mass: 0.2,
                stiffness: 100
            }
        }
    }
    const circleVariants = {
        default: {
            border: '1px solid white'
        },
        click: {
            border: '1px solid white'
        }
    }

    useEffect(() => {
        if (!mouseHovering && mouseClicked) setCursorVariant('click')
        else if (mouseHovering && !mouseClicked) setCursorVariant('hover')
        else if (mouseHovering && mouseClicked) setCursorVariant('hoverClick')
        else setCursorVariant('default')
    }, [mouseClicked, mouseHovering])

    return (
        <AnimatePresence>
            { /* @ts-ignore */}
            <motion.div variants={cursorVariants}
                        animate={cursorVariant}
                        className={'fixed z-[9230] top-0 left-0 rounded-full pointer-events-none cursor'}
            >
                { /* @ts-ignore */}
                <motion.div variants={circleVariants}
                            className={'z-[9230] w-full h-full rounded-full absolute backdrop-invert grayscale'}/>
            </motion.div>

        </AnimatePresence>
    );
};

const useMouseClick = () => {
    const [mouseClicked, setMouseClicked] = useState<boolean>(false)

    useEffect(() => {
        const handleMouseDown = (e: any) => {
            setMouseClicked(true)
        }
        const handleMouseUp = (e: any) => {
            setMouseClicked(false)
        }
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleMouseDown);
            window.removeEventListener('mousedown', handleMouseUp);
        };
    }, []);
    return mouseClicked
}
const useMousePosition = () => {
    const [mousePos, setMousePos] = useState<{ x: number, y: number }>({x: 0, y: 0})
    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setMousePos({x: e.clientX, y: e.clientY});
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );

        };
    }, []);

    return mousePos
};
const useMouseHover = (id: string) => {
    const [mouseHovering, setMouseHovering] = useState<boolean>(false);

    useEffect(() => {
        const handleMouseHover = (e: any) => {
            const interactable = e.target.closest(id);
            setMouseHovering(interactable !== null);

        };
        window.addEventListener('mousemove', handleMouseHover);
        return () => {
            window.removeEventListener('mousemove', handleMouseHover);

        };
    }, []);
    return mouseHovering;
}

export default Cursor;