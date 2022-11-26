import '../styles/globals.css'
import'../styles/Card.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import Grain from "../components/Grain";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return <div className={''}>

    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}
