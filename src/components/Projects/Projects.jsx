import styled from '../../stylesheets/Project_stylesheets/Projects.module.css'
import { useState } from "react"
import CodeHeader from './CodeHeader'
import CodeContent from './CodeContent'
import FigmaHeader from './FigmaHeader'
import FigmaContent from './FigmaContent'

const Projects = () => {

    const [isCodeTrue, setIsCodeTrue] = useState(true)
    const [isFigmaTrue, setIsFigmaTrue] = useState(true)

    return(
        <div className={styled.container}>
            <header className={styled.header}>
                { isCodeTrue && <CodeHeader /> }
                { isFigmaTrue && <FigmaHeader /> }
                <h1>Projects</h1>
                <svg className={styled.larrow} xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 15 25" fill="none">
                    <path d="M15 2.5H10M10 7.5H5M5 12.5H0M10 17.5H5M15 22.5H10" stroke="white" strokeWidth="5"/>
                </svg>
                <svg className={styled.rarrow} xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 15 25" fill="none">
                    <path d="M0 2.5H5M5 7.5H10M10 12.5H15M5 17.5H10M0 22.5H5" stroke="white" strokeWidth="5"/>
                </svg>
            </header>

            <div className={styled.contentContainer}>
                { isCodeTrue && <CodeContent /> }
                { isFigmaTrue && <FigmaContent /> }
            </div>
        </div>
    )
}

export default Projects;