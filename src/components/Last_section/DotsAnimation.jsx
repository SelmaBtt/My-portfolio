import React from 'react';
import styled from '../../stylesheets/Last_section/DotsAnimation.module.css';

const DotsAnimation = () => {
    return (
        <div className={styled.svgWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="50" viewBox="0 0 55 20" fill="none">
                <path d="M2.5 0V15M0 12.5H10M10 7.5H15M0 2.5H10" stroke="black" stroke-width="5"/>
                <path d="M22.5 0V15M20 12.5H30M30 7.5H35M20 2.5H30" stroke="black" stroke-width="5"/>
                <path d="M42.5 0V15M40 12.5H50M50 7.5H55M40 2.5H50" stroke="black" stroke-width="5"/>
            </svg>
        </div>
    );
};

export default DotsAnimation;
