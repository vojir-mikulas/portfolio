import Head from "next/head";
import ProjectList from "../components/ProjectList";
import CardsContainer from "../components/CardsContainer";
import {motion, useScroll} from "framer-motion";
import MeetSection from "../components/MeetSection";
import {useEffect, useRef} from "react";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
    const {scrollY} = useScroll();
    const meetNode : any = useRef(null);
    let lastY : number = 0;
    let canScroll :boolean = true;
    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (((latest >= 100 && latest <= 500) && lastY < latest)  && (meetNode && meetNode.current) && canScroll) {
                canScroll = false;
                meetNode.current.scrollIntoView({behavior: 'smooth', block: 'start'});
                setTimeout(()=>{
                    canScroll = true;
                },200)
            }
            lastY = latest;
        })
    }, [])
  return (
    <motion.main >
      <Head>
        <title>Vojíř</title>
      </Head>
       
          <section ref={meetNode} className="h-screen w-screen flex items-center justify-center dark:bg-neutral-900 dark:text-white">
          <MeetSection></MeetSection>
          </section>
 
         <section className="flex items-center justify-center w-screen h-screen dark:bg-neutral-900 ">
         <CardsContainer />
         </section>
         <section className="flex items-center justify-center  w-screen h-screen">
         <ProjectList />
         </section>

    </motion.main>
  );
}
