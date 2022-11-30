import '../styles/globals.css'
import'../styles/Card.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import Grain from "../components/Grain";
import Cursor from "../components/Cursor";
import Footer, {UnderFooter} from "../components/Footer";
import {AnimatePresence} from "framer-motion";
import ProjectModal from "../components/ProjectModal";

export default function App({ Component, pageProps }: AppProps) {
  return <div>

    <Cursor></Cursor>
    <Header/>
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
    <Footer/>
    <UnderFooter/>
  </div>
}
