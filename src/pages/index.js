import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen items-center justify-center bg-white mt-12 mb-12 ml-36 mr-36 ${inter.className}`}>
      <div className="flex items-center justify-center w-full">
        <div className="text-left p-8 flex-grow flex-basis-2/3">
          <p className="text-black">Karting to wspaniały sport, dający możliwość posmakowania motorsportowych emocji każdej osobie. Jednak doświadczenia mogą być bardzo różne. Wpływ ma na to wiele czynników takich jak układ i długość trasy, możliwości i stan gokartów, udogodnienia w obiekcie, a także oczywiście… cena! Chcesz dowiedzieć się, które tory warto odwiedzić, a których lepiej unikać? Zapraszam do jedynej w Polsce porównywarki torów gokartowych!</p>
        </div>
        <div className="p-4 flex-grow flex-basis-1/3">
          <Image src="/kartmainpic.png" alt="Main Karting Image" width={1200} height={600} />
        </div>
      </div>
    </main>
  )
}