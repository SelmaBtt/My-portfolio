import styled from '../../stylesheets/Second_section_stylesheets/Experience.module.css'

const Skills = () => {
    return(
        <div>
            <header className={styled.header}>
                <h1>Skills</h1>
            </header>
            <div className={styled.textContainer}>
            <ul>
                <li>HTML & CSS</li>
                <li>JavaScript <span>(React.js, Node, Express)</span></li>
                <li>Version Control <span>(Git, Github)</span></li>
                <li>Design & Prototyping <span>(Figma)</span></li>
                <li>Testing <span>(Cypress)</span></li>
                <li>Databases <span>(MySQL, SQL)</span></li>
                <li>Build Tools <span>(Vite)</span></li>
                <li>API Integration</li>
            </ul>
            </div>
        </div>
    )
}

export default Skills;