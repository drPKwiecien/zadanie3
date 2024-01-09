import { Inter } from 'next/font/google'
import {Karting932Text1} from '../textContent';


const inter = Inter({ subsets: ['latin'] })


export default function Omnie() {
    return (
      <main className={`${inter.className}`}>  

          <div className="flex items-center justify-center w-full">
            <div className="text-left p-8 flex-grow flex-basis-3/4">
              <p className="text-black">{Karting932Text1}</p>
            </div>
          </div>
      </main>   


    )
  }