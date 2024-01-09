import Link from 'next/link';


export default function TableButton({href}) {
    return (
        <Link href={href} passHref>
            <button className="btn bg-oceanBlue text-white">Przeczytaj!</button>
        </Link>    
    );
}
