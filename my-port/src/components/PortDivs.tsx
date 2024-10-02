
import React from "react"
import { RiNextjsFill, RiTailwindCssFill,  } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { MdArrowOutward } from "react-icons/md";

interface PortDivs {
    children: any,
    projName: string
}

export default function PortDivs(props:PortDivs) {
    return (
        <>
         <div className="projTecsText">
            <span className="font-bold mr-2 block text-center">{props.projName}</span>
            <span className="projectSpan">Next Js <RiNextjsFill className="iconProject" size={25}/></span>
            <span className="projectSpan">TailwildCSS <RiTailwindCssFill className="iconProject"/></span>
            <span className="projectSpan">TypeScript  <SiTypescript className="iconProject"/></span>
        </div>
            <div className='ImagesProject'>
                <span className='fraseOpa'>Acesse o site clicando aqui <MdArrowOutward className="iconProject"/></span>
                
            </div>
        </>
    )
}