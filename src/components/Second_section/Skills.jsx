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
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>GitHub</li>
                    <li>API</li>
                    <li>Figma</li>
                    <li>Node</li>
                    <li>Cypress</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;