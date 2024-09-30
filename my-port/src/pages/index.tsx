import Header from "@/components/Header";
import { Karla } from "next/font/google";
import Sections from "@/components/Sections/Sections";
import { GoArrowRight } from "react-icons/go";
import { FaInstagram, FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";


const KarlaPro = Karla({ subsets: ["latin"] });

const Redes = [
  {
    id: 1,
    icone: <FaGithub size={'1.5em'}/>,
    rede: 'Github',
    link: 'https://github.com/DiegoSPrado'
  },
  {
    id: 2,
    icone: <FaLinkedin size={'1.5em'}/>,
    rede: 'Linkedin',
    link: 'https://www.linkedin.com/in/diego-santos-do-prado-a111172b0/'
  },
  {
    id: 3,
    icone: <FaInstagram size={'1.5em'}/>,
    rede: 'Instagram',
    link: 'https://www.instagram.com/die_prado/?hl=pt-br'
  },
  {
    id: 4,
    icone: <FaSpotify size={'1.5em'}/>,
    rede: 'Spotify',
    link: 'https://open.spotify.com/user/chegadeschool?si=8fc3d48a3e234126'
  }
]
export default function Home() {
  return (
    <main className={`${KarlaPro.className}`}> 
    <Header/>
      
      <div className='flex flex-col items-center  max-w-prose mx-auto  m-auto'>
      { Redes.map((e) => {
        return (
          <Sections key={e.id} icon={e.icone} rede={e.rede} link={e.link}/>
        )
      })}
      <div className='flex gap-40'>
          <div className="texto">
              <Link href={'/projetos/projects'}>
                <p>Explore meus projetos 
                  <GoArrowRight className={'inline'}/>
                </p>
              </Link>
              <Link href={'/'}>
                <p>YeasyMusic - em construção -  
                  <GoArrowRight className={'inline'}/>
                  </p>
              </Link> 
              <Link href={'/about'}>
                <p>Venha me conhecer 
                  <GoArrowRight className={'inline'}/>
                </p>
              </Link>
          </div>
          <div className='flex flex-col '>
            <a href="#" className="bg-slate-900 text-white items-center p-[20px] hover:bg-slate-800">Baixe meu CV
            <FiDownload className='inline-block ml-[10px]' />
            </a> 
            <p className='text-zinc-600'>Apenas uma página.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
