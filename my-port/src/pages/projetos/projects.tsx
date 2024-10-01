import Header from "@/components/Header";
import Image from "next/image";

import { RiNextjsFill, RiTailwindCssFill,  } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
export default function projects() {
    return (
        <div>
            <Header/>
            <section className='m-auto mx-auto flex flex-col items-center' >
                <h1 className=' text-center m-5'>Projetos</h1>
                <div>
                    <div >
                        <div className="projTecsText">
                            <span className="font-bold mr-2 block text-center">Meu Portifólio</span>
                            <span className="projectSpan">Next Js <RiNextjsFill className="iconProject" size={25}/></span>
                            <span className="projectSpan">TailwildCSS <RiTailwindCssFill className="iconProject"/></span>
                            <span className="projectSpan">TypeScript  <SiTypescript className="iconProject"/></span>
                        </div>
                        <div className='ImagesProject'>
                            <span className='fraseOpa'>Acesse o site clicando aqui <MdArrowOutward className="iconProject"/></span>
                            <Image src="/port-home.png" alt='Imagem do Home da página' width={500} height={500}></Image>
                        </div>
                    </div>
                    <div>
                        <div className="projTecsText">
                            <span className="font-bold mr-2 block text-center">YeasyMusic - Um Site para Amantes de Música</span>
                            <span className="projectSpan">Next Js <RiNextjsFill className="iconProject" size={25}/></span>
                            <span className="projectSpan">TailwildCSS <RiTailwindCssFill className="iconProject"/></span>
                            <span className="projectSpan">TypeScript  <SiTypescript className="iconProject"/></span>
                        </div>
                        <div className="ImagesProject">
                        <span className='fraseOpa'>Acesse o site clicando aqui <MdArrowOutward className="iconProject"/></span>
                        <Image src="/ksg.png" alt="Imagem  Ye Provisória" width={500} height={500}/>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}