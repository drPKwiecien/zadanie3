import Image from 'next/image'
import { Inter } from 'next/font/google'
import {omnieText} from '../textContent';


const inter = Inter({ subsets: ['latin'] })


export default function Omnie() {
    return (
      <main className={`${inter.className}`}>  

          <div className="flex items-center justify-center w-full">
            <div className="text-left p-8 flex-grow flex-basis-3/4">
              <p className="text-black font-roboto-slab">{omnieText}</p>
            </div>
            <div className="p-4 flex-grow flex-basis-1/4">
              <Image src="/omnie.jpg" alt="Main Karting Image" width={900} height={600} />
            </div>
          </div>
      </main>   


    )
  }