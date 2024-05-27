import styled from '../stylesheets/WelcomeSection.module.css'
import me from '../assets/my-face.png';

const WelcomeSection = () => {
    return(
        <div className={styled.divWrapper}>
            <header className={styled.header}>
                <h2 className={styled.title}>
                    Welcome
                </h2>
            </header>
            <div className={styled.div}>
                <h1>
                    Selma Brattli
                </h1>
                <p className={styled.subtitle}>
                    Front-end developer
                </p>
                <div className={styled.svgWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="80" viewBox="0 0 140 80" fill="none">
                        <path d="M137.5 10V62.5M137.5 65V62.5M137.5 62.5H122.5M122.5 62.5H120M122.5 62.5V77.5M122.5 77.5V80M122.5 77.5H115M115 72.5H105M105 67.5H95M95 62.5H2.5M2.5 62.5H0M2.5 62.5V2.5M2.5 2.5V0M2.5 2.5H130M130 7.5H135" stroke="black" strokeWidth="5"/>
                        <text x="20" y="43" fontSize="14" fill="black">it's me</text>
                    </svg>
                </div>
                <div>
                    <img src={me} alt="my face image" />
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection;