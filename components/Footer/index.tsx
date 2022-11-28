import React, {useState} from 'react';
import ProjectModal from "../ProjectModal";
import {AnimatePresence} from "framer-motion";

 const Footer = () => {
    return (
        <footer className={' w-full h-[30vh] mb-[35vh] z-10 bg-white '}>
            <div className={'md:container mx-auto h-full w-full border-t border-black flex justify-between items-center'}>
                <div className={'flex flex-col'}>
                    <h4 className={'font-bold text-xl mb-3'}>Epic heading</h4>
                    <ul className={'flex flex-col gap-1'}>
                        <li  >Odkaz 1</li>
                        <li>Odkaz 2</li>
                        <li>Odkaz 3</li>
                        <li>Odkaz 4</li>
                    </ul>
                </div>
                <div className={'flex flex-col'}>
                    <h4 className={'font-bold text-xl mb-3'}>Epic heading</h4>
                    <ul className={'flex flex-col gap-1'}>
                        <li  >Odkaz 1</li>
                        <li>Odkaz 2</li>
                        <li>Odkaz 3</li>
                        <li>Odkaz 4</li>
                    </ul>
                </div>
                <div className={'flex flex-col'}>
                    <h4 className={'font-bold text-xl mb-3'}>Epic heading</h4>
                    <ul className={'flex flex-col gap-1'}>
                        <li  >Odkaz 1</li>
                        <li>Odkaz 2</li>
                        <li>Odkaz 3</li>
                        <li>Odkaz 4</li>
                    </ul>
                </div>
                <div className={'flex flex-col'}>
                    <h4 className={'font-bold text-xl mb-3'}>Epic heading</h4>
                    <ul className={'flex flex-col gap-1'}>
                        <li  >Odkaz 1</li>
                        <li>Odkaz 2</li>
                        <li>Odkaz 3</li>
                        <li>Odkaz 4</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};



export const UnderFooter = () => {
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false)
    return (
     <>
         <section className={'fixed bottom-0 w-full h-[35vh] -z-10 '}>
             <div className={'w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center  '}>
                 <h1 className={'font-bold text-7xl mb-8'}>Sold yet?</h1>
                 <button onClick={()=> setIsModalOpen(true)} className={'w-50 border-2 rounded-md p-3 hover:bg-white hover:text-black hover:scale-110 transition-all'}> Let's start a project together</button>
                 <div className={'w-50 text-center text-gray-500 my-3'}>or</div>
                 <a href="mailto:vojir.mikulas@gmail.com" className={'hover:underline'}>Write me an email</a>
             </div>
         </section>
         <AnimatePresence>
             {isModalOpen ? <ProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/> : null}
         </AnimatePresence>
     </>
    );
};


export default Footer;