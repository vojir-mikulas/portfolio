import '../styles/globals.css'
import'../styles/Card.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import Grain from "../components/Grain";
import Cursor from "../components/Cursor";

export default function App({ Component, pageProps }: AppProps) {
  return <div className={''}>
    <Cursor/>
    <Header/>
    <Component {...pageProps} />
  </div>
}
