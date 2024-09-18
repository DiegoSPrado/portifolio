import Header from "@/components/Header";

export default function about() {
    return (
        <div>
            <Header/>
            <div className='text-center text-lg p-3 '>
                <h1 className='font-bold '>Sobre</h1>
                <p>Me chamo Diego Prado, tenho 21 anos, faço faculdade de engenharia de software, e sou um desenvolvedor júnior.</p> 
                <p>Tenho experiência na área de web developer, utilizando o JavaScript e o TypeScript como base, além de seus frameworks, NodeJs e NextJs.   
                </p>
            </div>
        </div>
    )
}