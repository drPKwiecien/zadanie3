import { Inter } from 'next/font/google'
import {Karting932Text1, Karting932Text2} from '../textContent';
import ImageCarousel from '../components/ImageCarousel';

const images = [
  { src: '/pictures/alicante1.jpg', alt: 'Image 1' },
  { src: '/pictures/alicante2.jpg', alt: 'Image 2' },
];


const inter = Inter({ subsets: ['latin'] })


export default function Omnie() {
    return (
      <main className={`${inter.className}`}>  

          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-left p-8 flex-grow flex-basis-3/4">
              <p className="text-black">{Karting932Text1}</p>
            </div>
            <div>
                <ImageCarousel images={images} />
            </div>
            <div className="text-left p-8 flex-grow flex-basis-3/4">
              <p className="text-black">{Karting932Text2}</p>
            </div>
          </div>
      </main>   


    )
  } 