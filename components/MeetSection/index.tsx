import { motion } from "framer-motion"
import { useState } from "react";
import PopInText from "../PopInText";

const MeetSection : React.FC<any> = () =>{

    const greetingsVariants = {
        initial:{
          opacity:0,
          y:20          
        },
        animate:{
            opacity:1, 
            y:0    
        }     
    };
    const vaweVariants = {
        initial:{
        scale:1    
        },
        animate:{
        scale:1,
        rotate:[10,-30,10],        
        transition:{
            delay:0.4,
            duration:0.4,
            type:'spring',
            repeat:1
        }    
        }    
    }

    return (  <motion.div 
        initial={'initial'}
        whileInView={'animate'}
        exit={'exit'} 
        className='md:container mx-auto h-max flex flex-col items-center justify-center mb-20 mobile:text-center '>
          <div className=' '>
              <p className='text-xl ml-2 mobile:text-lg'><motion.span className="inline-block" variants={greetingsVariants}>Hey <motion.span className="inline-block  " variants={vaweVariants}>👋</motion.span>,</motion.span>
              <PopInTextAnimate>  my name is Mikuláš Vojíř and I am a</PopInTextAnimate>    
              </p>
              <h1 className='font-oswald text-9xl mobile:text-7xl'>
                  Fullstack
              </h1>
              <h1 className='font-oswald text-stroke text-transparent text-9xl mobile:text-7xl'>
                  Web Developer
              </h1>
              <p className='text-sm ml-4 mt-4'>Based in Prague, Czech Republic</p>
          </div>
          <button className={'w-50 border-2  interactable rounded-md border-gray-900 mt-10  p-3 hover:bg-gray-900 hover:text-white hover:scale-110 focus:bg-gray-900 focus:text-white  focus:scale-110 transition-all'}> 
          I need a Website</button>
        </motion.div>)
}

const PopInTextAnimate : React.FC<{children:string}> = ({children}) =>{
    
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