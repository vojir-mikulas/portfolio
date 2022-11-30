import React from 'react';
import cat from '../../public/404cat.svg'
import {motion} from "framer-motion";
import ProjectList from '../../components/ProjectList';
import RevText from '../../components/RevText';


const About = () => {
    return (
        <motion.main
            className={' '}>
          <section className='md:container mx-auto h-screen flex items-center justify-center mb-20'>
            <div className=' '>
                <p className='text-xl ml-2'>Hey 👋, my name is Mikuláš Vojíř and I am a</p>
                <h1 className='font-oswald text-9xl'>
                    Fullstack
                </h1>
                <h1 className='font-oswald text-stroke text-transparent text-9xl'>
                    Web Developer
                </h1>
                <p className='text-sm ml-4 mt-4'>Based in Prague, Czech Republic</p>
            </div>
          </section>

          <section  className='md:container mx-auto h-screen '>
            <h1>Education</h1>
          </section>
        </motion.main>
    );
};

export default About;