import '@/styles/globals.css'
import Navbarbottom from '../components/Navbarbottom'



export default function App({ Component, pageProps }) {
  return (
    <>
      
      <div className="body-pattern">
        <div className="central-container flex flex-1 items-center justify-center bg-white  min-h-screen">
          <Component {...pageProps} />
        </div>
        <Navbarbottom />
      </div>
    </>
  );
}