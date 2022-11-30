import React from 'react';
import AboutCard from "../AboutCard";
import GradientCard from "../GradientCard";
import {motion} from "framer-motion";
import PopInText from "../PopInText";

const CardsContainer = () => {
    return (
        <div className={'md:container mx-auto gap-10  h-[42vw] mobile:h-min grid grid-cols-cards mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:grid-rows-3 grid-rows-2'}>

                  <AboutCard title={'About me'} subtitle={'Education, work experience etc...'} href={'./about'}/>
                  <motion.button
                      initial={'initial'}
                      whileHover={'hover'}
                      whileFocus={'hover'}
                      className={'interactable bg-black  focus:outline-none focus:ring focus:ring-blue-500 relative w-full h-full hover:scale-105 overflow-hidden transition-all rounded-xl  text-6xl font-bold text-white flex text-left mobile:w-[90vw] mobile:h-60'}
                  >
                      <div className={'p-16 tablet:p-6'}>
                          <h3 className={'tablet:text-4xl'}> How do I work</h3>
                          <h4 className={'tablet:text-lg mobile:text-sm  text-2xl my-6 '}><PopInText text={'Coming soon...'}/></h4>
                      </div>
                  </motion.button>

            <GradientCard title={'Not really into IT stuff?'} subtitle={'checkout my page for normal people'} href={'/'}/>
        </div>
    );
};


export default CardsContainer;