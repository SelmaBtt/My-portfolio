import styled from "../stylesheets/SmileIcon.module.css"

const SmileIcon = () => {
    return(
        <div className={styled.svgWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="60" viewBox="0 0 90 60" fill="none">
                <g clip-path="url(#clip0_52_880)">
                    <path d="M25.5 19.5H20.5M18 22V27M20.5 29.5H25.5M28 22V27M33.5 33H38.5M38.5 38H43.5C47.5 38 51.8333 38 53.5 38M56 35.5V31.5V31V30.5M61.5 24.5H66.5M66.5 29.5H71.5M74 27V22M71.5 19.5H66.5M14.5 4H9.5M9.5 9H4.5M7 11.5V16.5M2 16.5V18.5V20.5V25.5V28V30.5V35.5V40.5M7 40.5V45.5V50.5M12 50.5V55.5M87.5 16.5V22V40.5M82.5 40.5V50.5M77.5 50.5V55.5M82.5 16.5V9M77.5 9V4" stroke="white" stroke-width="5"/>
                </g>
                <defs>
                    <clipPath id="clip0_52_880">
                        <rect width="90" height="60" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default SmileIcon;