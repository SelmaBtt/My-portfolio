import styled from '../stylesheets/WelcomeSection.module.css'

const WelcomeSection = () => {
    return(
        <div className={styled.divWrapper}>
            <header className={styled.header}>
                <h1 className={styled.title}>
                    Welcome
                </h1>
            </header>
        </div>
    )
}

export default WelcomeSection;