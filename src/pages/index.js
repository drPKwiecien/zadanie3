import Image from 'next/image'
import { Inter } from 'next/font/google'
import kartingText from '../textContent';
import Button from '../components/Button';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (  

      <main className={`${inter.className}`}>  

          <div className="flex items-center justify-center w-full">
            <div className="text-center justify-center p-8 flex-grow flex-basis-2/3">
              <p className="text-black mb-10">{kartingText}</p>
              <Button href={"/ranking"}/>
            </div>
            <div className="p-4 flex-grow flex-basis-1/3">
              <Image src="/kartmainpic.png" alt="Main Karting Image" width={1200} height={600} />
            </div>
          </div>
      </main>   



  )
}