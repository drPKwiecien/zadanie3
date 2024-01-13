import Link from 'next/link';


export default function Button({href,copy}) {
    return (
        <Link href={href} passHref>
            <button className="btn bg-oceanBlue text-white">{copy}</button>
        </Link>    
    );
}