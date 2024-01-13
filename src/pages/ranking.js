import Tracklist from '../components/Tracklist';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Test() {
    return (
      <main className={`flex-col items-center ml-8 mr-8 ${inter.className}`}>
        <header className="text-center mb-4">
            <h1>Ranking Torów Kartingowych</h1>
        </header>
          <Tracklist />
      </main>
    )
  }