import styled from '../../stylesheets/Project_stylesheets/Projects.module.css'
import { useContext } from 'react'
import { TrueFalseContext } from '../context/TrueFalseContextProvider'

const CodeHeader = () => {
    
    const { codeTabHandler } = useContext(TrueFalseContext);

    return(
        <>
            <div className={styled.codeTab}>
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="45" viewBox="0 0 160 45" fill="none">
                    <path d="M2.5 45V2.5H140M140 7.5H145M145 12.5H150M150 17.5H155M157.5 20V45" stroke="#9E9C9C" strokeWidth="5"/>
                    <path d="M5 20H155V45H5V20Z" fill="white"/>
                    <path d="M5 15H150V20H5V15Z" fill="white"/>
                    <path d="M5 10H145V15H5V10Z" fill="white"/>
                    <path d="M5 5H140V10H5V5Z" fill="white"/>
                    <text x="20" y="37" fontSize="16" fill="black">code</text>
                </svg>
            </div>
            <div className={styled.figmaTab} onClick={codeTabHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="45" viewBox="0 0 160 45" fill="none">
                    <path d="M2.5 45V2.5H140M140 7.5H145M145 12.5H150M150 17.5H155M157.5 20V45" stroke="#9E9C9C" strokeWidth="5"/>
                    <path d="M5 20H155V45H5V20Z" fill="#C0C0C0"/>
                    <path d="M5 15H150V20H5V15Z" fill="#C0C0C0"/>
                    <path d="M5 10H145V15H5V10Z" fill="#C0C0C0"/>
                    <path d="M5 5H140V10H5V5Z" fill="#C0C0C0"/>
                    <text x="20" y="37" fontSize="16" fill="black">figma</text>
                </svg>
            </div>
        </>
    )
}

export default CodeHeader;