import styled from '../../stylesheets/Project_stylesheets/FigmaContent.module.css';
import allProjects from '../../assets/FigmaList.js';
import { useState } from 'react';

const FigmaContent = () => {

    const [figProject] = useState(allProjects);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlideHandler = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === figProject.length - 1 ? 0 : prevIndex + 1
        );
    };

    const previousSlideHandler = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? figProject.length - 1 : prevIndex - 1
        );
    };

    const currentFigProject = figProject[currentIndex];

    return(
        <div className={styled.contentWrapper}>
            <a className={styled.linkBtn} href={currentFigProject.src}>
                <svg xmlns="http://www.w3.org/2000/svg" width="215" height="46" viewBox="0 0 215 46" fill="none">
                    <path d="M10.5 3L205 2.5M207.5 5V10M212.5 10V35M207.5 35V40M205 42.5L10.5 43M8 40.5V35.5M3 35.5V10.5M8 10.5V5.5" stroke="#6B6B6B" strokeWidth="5"/>
                    <text x="32" y="32" fontSize="20" fill="black">Link to Figma</text>
                </svg>
            </a>
            <h2 className={styled.figTitle}>{currentFigProject.title}</h2>
            <p className={styled.description}>{currentFigProject.description}</p>
            <img className={styled.img} src={currentFigProject.img} alt="" />

            {/* Buttons */}
            <svg className={styled.preBtn} onClick={previousSlideHandler} xmlns="http://www.w3.org/2000/svg" width="106" height="66" viewBox="0 0 106 66" fill="none">
                <path d="M15.5 3H90.5M90.5 8H95.5M98 10.5V20.5M103 20.5V45.5M98 45.5V55.5M93 55.5V60.5M90.5 63H15.5M15.5 58H10.5M8 55.5V45.5M3 45.5V20.5M8 20.5V10.5M13 10.5V5.5M50.5 18H45.5M45.5 23H40.5M40.5 28H35.5M35.5 33H30.5M40.5 38H35.5M45.5 43H40.5M50.5 48H45.5M70.5 48H65.5M65.5 43H60.5M60.5 38H55.5M55.5 33H50.5M60.5 28H55.5M65.5 23H60.5M70.5 18H65.5" stroke="#6B6B6B" strokeWidth="5"/>
            </svg>
            <svg className={styled.nexBtn} onClick={nextSlideHandler} xmlns="http://www.w3.org/2000/svg" width="106" height="66" viewBox="0 0 106 66" fill="none">
                <path d="M15.5 3H90.5M90.5 8H95.5M98 10.5V20.5M103 20.5V45.5M98 45.5V55.5M93 55.5V60.5M90.5 63H15.5M15.5 58H10.5M8 55.5V45.5M3 45.5V20.5M8 20.5V10.5M13 10.5V5.5M36 17.5H41M41 22.5H46M46 27.5H51M51 32.5H56M46 37.5H51M41 42.5H46M36 47.5H41M56 47.5H61M61 42.5H66M66 37.5H71M71 32.5H76M66 27.5H71M61 22.5H66M56 17.5H61" stroke="#6B6B6B" strokeWidth="5"/>
            </svg>
        </div>
    )
}

export default FigmaContent;