import Header from "@/components/Header";
import Image from "next/image";
import PortDivs from "@/components/PortDivs";
export default function projects() {
    return (
        <div>
            <Header/>
            <section className='m-auto mx-auto flex flex-col items-center' >
                <h1 className=' text-center m-5'>Projetos</h1>
                <div>
                    <div >
                       <PortDivs projName="Meu Portifólio">
                            <Image src="./imgs/portimg.png" alt="Imagem do portifólio" width={500} height={500}/>
                       </PortDivs>
                    </div>
                    <div>
                        <PortDivs projName="YeasyMusic - Um site para amantes de música">
                            <Image src="/ksg.png" alt="Imagem  Ye Provisória" width={500} height={500}/>
                        </PortDivs>
                        
                        
                    </div>
                    
                </div>
            </section>
        </div>
    )
}