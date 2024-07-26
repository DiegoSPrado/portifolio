import Link from "next/link"
import { Karla } from "next/font/google";

const KarlaPro = Karla({ subsets: ["latin"] });
export default function Header() {
    return (
        <div className={`max-w-prose m-auto ${KarlaPro.className} `}>
            <nav className='flex items-center justify-between '>
                <a  className='flex flex-col font-bold p-[10px]'>
                   DiegoSPrado
                    <span className='font-normal'>Front-end Developer</span>
                </a>
                <div className='linkHeader '>
                    <Link href={"/"}>
                        <p>Home</p>
                    </Link>
                    <Link href={"/about"}>
                        <p>Sobre </p>
                    </Link>
                    <Link href={"/projetos/projects"}>
                        <p>Projetos</p>
                    </Link>
                </div>
                
            </nav>
        </div>
    )
}