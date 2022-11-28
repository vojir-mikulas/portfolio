import React, {useState} from 'react';
import ProjectModal from "../ProjectModal";
import {AnimatePresence} from "framer-motion";

 const Footer = () => {
    return (
        <footer className={' w-full h-[35vh] mb-[500px]  z-10 bg-white '}>
            <div className={'md:container mx-auto  py-10 h-full w-full border-t border-black grid grid-cols-4 items-start  '}>
                <div className={'flex flex-col'}>
                    <h4 className={'font-bold text-xl mb-3'}>Contacts</h4>
                    <ul className={'flex flex-col gap-1'}>
                        <li><a href="mailto:vojir.mikulas@gmail.com">vojir.mikulas@gmail.com</a></li>
                        <li><a href="tel:732226202">+420 732 226 202</a></li>

                    </ul>
                </div>
                <div className={'flex flex-col'}>
                    <h4 className={'font-bold text-xl mb-3'}>Menu</h4>
                    <ul className={'flex flex-col gap-1'}>
                        <li>Home</li>
                        <li>About me</li>
                        <li>Pricing</li>
                        <li>Terms of policy</li>
                    </ul>
                </div>
                <div className={'flex flex-col'}>
                    <h4 className={'font-bold text-xl mb-3'}>Socials</h4>
                    <ul className={'flex flex-col gap-1'}>
                        <li>Github</li>
                        <li>Startupjobs</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
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
         <section className={'fixed bottom-0 w-full h-[500px] -z-10 '}>
             <div className={'w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center  '}>
                 <h1 className={'font-bold text-7xl mb-8'}>Sold yet?</h1>
                 <button onClick={()=> setIsModalOpen(true)} className={'w-50 border-2 rounded-md p-3 hover:bg-white hover:text-black hover:scale-110 transition-all'}> Let&apos;s start a project together</button>
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