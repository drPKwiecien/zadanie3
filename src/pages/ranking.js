import Daisytable from '../components/tabledaisy';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Ranking() {
    return <main className={`flex-col flex-1 items-center ml-12 mr-12 ${inter.className}`}>
      <header className="text-center mb-4">
          <h1>Ranking Torów Kartingowych</h1>
      </header>
      <Daisytable />  
      ;
    </main>
  }