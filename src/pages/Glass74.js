
import { Inter } from 'next/font/google'
import {Glass74Text1, Glass74Text2} from '../textContent';
import ImageCarousel from '../components/ImageCarousel';

const images = [
  { src: '/pictures/gass1.jpg', alt: 'Image 1' },
  { src: '/pictures/gass2.jpg', alt: 'Image 2' },
];


const inter = Inter({ subsets: ['latin'] })


export default function Omnie() {
    return (
      <main className={`${inter.className}`}>  

          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-left p-8 flex-grow flex-basis-3/4">
              <p className="text-black">{Glass74Text1}</p>
            </div>
            <div>
                <ImageCarousel images={images} />
            </div>
            <div className="text-left p-8 flex-grow flex-basis-3/4">
              <p className="text-black">{Glass74Text2}</p>
            </div>
          </div>
      </main>   


    )
  } 