import styled from "../../stylesheets/Second_section_stylesheets/AboutMe.module.css"

const AboutMe = () => {
    return(
        <div>
            <header className={styled.header}>
                <h1>About me</h1>
            </header>
            <div className={styled.textWrapper}>
                <p>
                    Hi there! I'm a passionate front end developer student with a knack for detail and dedication. 
                    With a background in service across various industries, I bring a unique perspective to my development work. I thrive on crafting visually appealing and user-friendly interfaces that enhance user experience, creating intuitive designs that leave a lasting impact.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;