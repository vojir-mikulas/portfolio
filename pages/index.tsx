import Head from 'next/head'
import ProjectList from "../components/ProjectList";
import CardsContainer from "../components/CardsContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vojíř</title>
      </Head>
        <CardsContainer/>
       <ProjectList/>

    </div>
  )
}
