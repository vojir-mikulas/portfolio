import Head from "next/head";
import ProjectList from "../components/ProjectList";
import CardsContainer from "../components/CardsContainer";
import { motion } from "framer-motion";
import MeetSection from "../components/MeetSection";

export default function Home() {
  return (
    <motion.main >
      <Head>
        <title>Vojíř</title>
      </Head>
       
          <section className="h-screen w-screen flex items-center justify-center snap-start">
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
