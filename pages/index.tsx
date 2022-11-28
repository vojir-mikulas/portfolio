import Head from 'next/head'
import ProjectList from "../components/ProjectList";
import CardsContainer from "../components/CardsContainer";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main

    >
      <Head>
        <title>Vojíř</title>
      </Head>
        <CardsContainer/>
       <ProjectList/>

    </motion.main>
  )
}
