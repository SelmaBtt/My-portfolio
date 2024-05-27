import styled from '../../stylesheets/Project_stylesheets/CodeContent.module.css';
import  allProjects from '../../assets/ProjectList.js';
import { useState } from 'react';

const CodeContent = () => {

    const [projects] = useState(allProjects)
    
    return(
        <div className={styled.contentWrapper}>
            { projects && projects.map((project, idx) => (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path d="M22.5 15V10M22.5 35V20M10 2.5H35M37.5 5V10M42.5 10V35M37.5 35V40M35 42.5H10M7.5 40V35M2.5 35V10M7.5 10V5" stroke="#6B6B6B" strokeWidth="5"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="215" height="46" viewBox="0 0 215 46" fill="none">
                        <path d="M10.5 3L205 2.5M207.5 5V10M212.5 10V35M207.5 35V40M205 42.5L10.5 43M8 40.5V35.5M3 35.5V10.5M8 10.5V5.5" stroke="#6B6B6B" strokeWidth="5"/>
                        <text x="50" y="32" fontSize="20" fill="black">Live demo</text>
                    </svg>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <img className={styled.img} src={project.img} alt="project image" />
                </>
            ))}
        </div>
    )
}

export default CodeContent;