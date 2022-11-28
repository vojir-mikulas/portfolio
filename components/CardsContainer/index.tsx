import React from 'react';
import AboutCard from "../AboutCard";
import GradientCard from "../GradientCard";
import {motion} from "framer-motion";
import PopInText from "../PopInText";

const CardsContainer = () => {
    return (
        <div className={'md:container mx-auto gap-10 h-[86hv] flex mobile:flex-col items-center'}>
              <div className={'gap-10 flex-col h-full flex items-center'}>
                  <AboutCard title={'About me'} subtitle={'Education, work experience etc...'} href={'./about'}/>
                  <motion.button
                      initial={'initial'}
                      whileHover={'hover'}
                      whileFocus={'hover'}
                      className={'interactable bg-black  focus:outline-none focus:ring focus:ring-blue-500 relative  w-[50vw] h-[26rem] hover:scale-105 overflow-hidden transition-all rounded-xl  text-6xl font-bold text-white flex text-left mobile:w-[90vw] mobile:h-52'}
                  >
                      <div className={'p-16 mobile:p-6'}>
                          <h3 className={'mobile:text-4xl'}> How do I work</h3>
                          <h4 className={'mobile:text-sm text-2xl my-6 '}><PopInText text={'Coming soon...'}/></h4>
                      </div>
                  </motion.button>
              </div>
            <GradientCard title={'Not really into IT stuff?'} subtitle={'checkout my page for normal people'} href={'/'}/>
        </div>
    );
};


export default CardsContainer;