import Link from "next/link"
import { Karla } from "next/font/google";

const KarlaPro = Karla({ subsets: ["latin"] });
export default function Header() {
    return (
        <div className={`max-w-prose m-auto ${KarlaPro.className} `}>
            <nav className='flex items-center justify-between '>
                <Link  className='flex flex-col font-bold p-[10px]' href={'/'}>
                   DiegoSPrado
                    <span className='font-normal'>Software Engineer</span>
                </Link>
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