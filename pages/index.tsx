import Head from 'next/head'
import ProjectList from "../components/ProjectList";
import CardsContainer from "../components/CardsContainer";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1
    }}
    exit={{
      opacity: 0
    }}
    >
      <Head>
        <title>Vojíř</title>
      </Head>
        <CardsContainer/>
       <ProjectList/>

    </motion.main>
  )
}
