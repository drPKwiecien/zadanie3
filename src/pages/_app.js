import '@/styles/globals.css'
import Navbarbottom from '../components/Navbarbottom'


export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbarbottom />
      <div className="body-pattern min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  ) 
}
