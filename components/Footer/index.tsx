import React from 'react';

const Footer = () => {
    return (
       <div>
           <div className={'h-[25vh] w-full   '}>
               <div className={'h-full flex justify-between items-center md:container mx-auto border-t border-black'}>

                   <ul>
                       <h4 className={'font-bold text-xl'}>Links</h4>
                       <li>Home</li>
                       <li>About</li>
                       <li>Contact</li>
                       <li>Projects</li>
                   </ul>
                   <ul>
                       <h4 className={'font-bold text-xl'}>Links</h4>
                       <li>Home</li>
                       <li>About</li>
                       <li>Contact</li>
                       <li>Projects</li>
                   </ul>
                   <ul>
                       <h4 className={'font-bold text-xl'}>Contact</h4>
                       <li>Instagram</li>
                       <li>Github</li>
                       <li>Email</li>
                       <li>Discord</li>
                   </ul>
               </div>

           </div>
           <div className={'h-[40vh] w-full bg-gray-900 text-white flex flex-col items-center justify-center gap-4'}>
               <h1 className={'font-bold text-7xl'}>Sold yet?</h1>
               <p>Leave me an email!</p>
           </div>
       </div>
    );
};

export default Footer;