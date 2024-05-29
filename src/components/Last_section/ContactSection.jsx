import styles from '../../stylesheets/Last_section/ContactSection.module.css';
import DotsAnimation from './DotsAnimation';

const ContactSection = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}></header>
            <div className={styles.contentWrapper}>
                <div className={styles.speechBubble}>
                    <DotsAnimation />
                    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="440" viewBox="0 0 640 440" fill="none">
                        <path d="M5 5H570M570 15H580M580 25H590M590 35H600M600 45H610M610 55H620M620 65H630M635 70V365M635 370V365M635 365H260M260 375H250M250 385H230M230 395H220M220 405H200M200 415H180M180 425H170M170 435H155M150 435H155M155 435V365M155 360V365M155 365H5M0 365H5M5 365V0" stroke="black" strokeWidth="10"/>
                        <text x="50" y="190" fontSize="50" fill="black">Let's</text>
                        <text x="50" y="250" fontSize="50" fill="black">Connect</text>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
