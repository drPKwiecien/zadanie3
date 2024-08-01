import Tracklist from "../components/Tracklist3";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Test() {
    return (
        <main className={`flex-col items-center ml-8 mr-8 ${inter.className}`}>
            <header className="prose text-center mb-5 mt-2 font-bold">
                <h1>🏁 Ranking Torów Kartingowych 🏁</h1>
            </header>
            <Tracklist className="m-1" />
        </main>
    );
}
