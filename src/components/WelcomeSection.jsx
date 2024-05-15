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
                <p>
                    Front-end developer
                </p>
                <div>
                    <img src={me} alt="my face image" />
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection;