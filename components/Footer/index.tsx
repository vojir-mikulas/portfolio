import React, {useState} from 'react';
import ProjectModal from "../ProjectModal";
import {AnimatePresence} from "framer-motion";

 const Footer = () => {
    return (
        <footer className={' w-full min-h-[35vh] mb-[490px]  z-10 bg-white snap-start dark:bg-neutral-900 dark:text-white'}>
            <div className={'md:container mx-auto  py-16 h-full w-full border-t border-black dark:border-white flex flex-col justify-between'}>
                <div className={'grid-cols-4 items-start w-full grid gap-5   mobile:place-items-center mobile:text-center mobile:grid-cols-1 '}>
                    <div className={'flex flex-col'}>
                        <h4 className={'font-bold text-xl mb-10'}>Kontakty</h4>
                        <ul className={'flex flex-col gap-3'}>
                            <li><a href="mailto:vojir.mikulas@gmail.com">vojir.mikulas@gmail.com</a></li>
                            <li><a href="tel:732226202">+420 732 226 202</a></li>

                        </ul>
                    </div>

                    <div className={'flex flex-col'}>
                        <h4 className={'font-bold text-xl mb-10'}>Sociální sítě</h4>
                        <ul className={'flex flex-col gap-3'}>
                            <li>Github</li>
                            <li>Startupjobs</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div className={'flex flex-col h-full justify-between'}>
                        <h4 className={'font-bold text-4xl mb-10'}>V</h4>
                        <div className={'flex'}>
                            <p className={'text-sm mr-5'}>Copyright © 2022 Vojíř</p>
                            <p className={'text-sm'}>Design © Vojíř</p>
                        </div>
                    </div>
                </div>
                <div className={'w-full '}>
                    <ul className={'flex mobile:flex-col mobile:underline items-center justify-center gap-8 font-bold mt-20'}>
                        <li>Domů</li>
                        <li>O mně</li>
                        <li>Ceník</li>
                        <li>Terms of policy</li>
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
         <section className={'fixed bottom-0 left-0 right-0 h-[500px] -z-10  '}>
             <div className={'w-full h-full bg-gray-900 dark:bg-black text-white flex flex-col items-center justify-center  '}>
                 <h1 className={'font-bold text-7xl mb-8 text-center'}>Zaujal jsem Vás?</h1>
                 <button onClick={()=> setIsModalOpen(true)} className={'w-50 border-2 interactable rounded-md p-3 hover:bg-white hover:text-black hover:scale-110 focus:bg-white focus:text-black focus:scale-110 transition-all'}> Pojďme začít nový projekt</button>
             </div>
         </section>
         <AnimatePresence>
             {isModalOpen ? <ProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/> : null}
         </AnimatePresence>
     </>
    );
};


export default Footer;