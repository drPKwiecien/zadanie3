import Link from 'next/link';
import Image from 'next/image';

export function TrackSummary({ rank, name, type, date, score, imageUrl, url, city }) {
    return (
        <div>
          <Link href={url} className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="w-full md:w-80">
                  <Image 
                    className="object-cover w-full rounded-t-lg h-96 md:h-48 md:rounded-none md:rounded-s-lg" 
                    src={imageUrl}
                    width={384}
                    height={384}
                    alt=""
                  />
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                  <div className="flex justify-between mb-3">
                      <p className="font-normal text-gray-700 dark:text-gray-400">{type}</p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p className="mb-3 text-lg font-bold text-gray-700 dark:text-gray-400">Ocena: {score}</p>
                    <p className="mb-3 text-gray-700 dark:text-gray-400">{city}</p>
                  </div>
              </div>
          </Link>
        </div>
    )
}


