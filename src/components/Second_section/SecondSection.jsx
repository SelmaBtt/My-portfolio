import AboutMe from "./AboutMe";
import Languages from "./Languages";
import Skills from "./Skills";
import styled from '../../stylesheets/Second_section_stylesheets/SecondSection.module.css'

const SecondSection = () => {
    return(
        <div className={styled.container}>
            <div className={styled.firstElement}>
                <AboutMe />
            </div>
            <div className={styled.secondElement}>
                <Languages />
            </div>
            <div className={styled.thirdElement}>
                <Skills />
            </div>
        </div>
    )
}

export default SecondSection;