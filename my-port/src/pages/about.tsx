import Header from "@/components/Header";
import { Karla } from "next/font/google";

const KarlaPro = Karla({ subsets: ["latin"] });

export default function about() {
    return (
        <div className={`${KarlaPro.className}`}>
            <Header/>
            <div className='aboutDiv'>
                <h1 className='font-bold text-left'>Sobre</h1>
                <p>
                    Me chamo Diego Prado, tenho 21 anos, faço faculdade de engenharia de software, e sou um desenvolvedor júnior.
                Tenho experiência na área de web developer, utilizando o JavaScript e o TypeScript como base, além de seus frameworks, NodeJs e NextJs.   
                </p>
                <p>
                    Obrigado por visitar meu website. Espero que você o ache informativo e agradável. Você pode me contatar pelo <span className="spanEmail">diego-santosprado@gmail.com</span>
                </p>
            </div>
        </div>
    )
}