import styled from "../../stylesheets/Second_section_stylesheets/Experience.module.css"

const Languages = () => {
    return(
        <div className={styled.container}>
            <header className={styled.header}>
                <h1>Languages</h1>
            </header>
            <div className={styled.textContainer}>
                <ul>
                    <li>Swedish</li>
                    <li>English</li>
                    <li>Norwegian</li>
                </ul>
            </div>
        </div>
    )
}

export default Languages;