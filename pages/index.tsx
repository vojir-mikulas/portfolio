import Head from "next/head";
import ProjectList from "../components/ProjectList";
import CardsContainer from "../components/CardsContainer";
import {motion, useScroll} from "framer-motion";
import MeetSection from "../components/MeetSection";
import {useEffect, useRef} from "react";

export default function Home() {
    const {scrollY} = useScroll();
    const meetNode : any = useRef(null);
    let lastY : number = 0;
    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (((latest >= 100 && latest <= 500) && lastY < latest)  && (meetNode && meetNode.current))  meetNode.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            lastY = latest;
        })
    }, [])
  return (
    <motion.main >
      <Head>
        <title>Vojíř</title>
      </Head>
       
          <section ref={meetNode} className="h-screen w-screen flex items-center justify-center snap-start">
          <MeetSection></MeetSection>
          </section>
 
         <section className="flex items-center justify-center snap-start h-screen">
         <CardsContainer />
         </section>
         <section className="flex items-center justify-center snap-start h-screen">
         <ProjectList />
         </section>
      
    </motion.main>
  );
}
