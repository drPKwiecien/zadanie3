import Image from 'next/image'
import { Inter } from 'next/font/google'
import kartingText from '../textContent';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (  
    <div className="flex flex-col min-h-screen justify-center bg-white ml-36 mr-36">

      <main className={`flex flex-1 items-center justify-center bg-white  ${inter.className}`}>  {/* ml-16 mr-16 */}

          <div className="flex items-center justify-center w-full">
            <div className="text-left p-8 flex-grow flex-basis-2/3">
              <p className="text-black">{kartingText}</p>
            </div>
            <div className="p-4 flex-grow flex-basis-1/3">
              <Image src="/kartmainpic.png" alt="Main Karting Image" width={1200} height={600} />
            </div>
          </div>
      </main>   

        <div className="btm-nav">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span className="btm-nav-label">Home</span>
          </button>
          <button className="active">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            <span className="btm-nav-label">Ranking</span>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="btm-nav-label">O mnie</span>
          </button>
        </div>

    </div> 
  )
}