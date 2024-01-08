import '@/styles/globals.css'
import Navbarbottom from '../components/Navbarbottom'


export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbarbottom />
      <Component {...pageProps} />
    </>
  ) 
}
