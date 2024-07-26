import { ReactElement } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface SectionsProps {
    icon: any,
    rede: string
}

export default function Sections(props:SectionsProps) {
    return (
        <div className='sectionStyle'>
            <div className='m-[4px]'>
                {props.icon}
            </div>
            <div>
                <p>{props.rede}</p>
            </div>
            
            <div className='absolute top-1/4 right-1 '>
                <FiArrowUpRight size={'1.4em'}/>
            </div>
        </div>
    )
}