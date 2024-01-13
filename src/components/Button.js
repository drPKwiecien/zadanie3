import Link from 'next/link';


export default function Button({href}) {
    return (
        <Link href={href} passHref>
            <button className="btn bg-oceanBlue text-white">Znajdź najlepszy tor!</button>
        </Link>    
    );
}