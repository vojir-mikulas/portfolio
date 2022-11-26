import Head from 'next/head'
import ProjectList from "../components/ProjectList";
import CardsContainer from "../components/CardsContainer";
import {useRouter} from "next/router";
import RevText from "../components/RevText";

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
