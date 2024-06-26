import styles from '../../stylesheets/Last_section/ContactSection.module.css';
import DotsAnimation from './DotsAnimation';
import mailLogo from '../../assets/mailLogo.png';
import gitHubLogo from '../../assets/github.png';
import linkedInLogo from '../../assets/linkedin.png';

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

                {/* My socials */}
                <div className={styles.media}>
                    <a href="mailto:selma@brattli.nu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="235" height="150" viewBox="0 0 235 150" fill="none">
                            <path d="M202.5 10V7.5M220 7.5H217.5M202.5 7.5V2.5H200H35H32.5M202.5 7.5H217.5M217.5 7.5V15M220 12.5H222.5M225 12.5H222.5M222.5 12.5V17.5M222.5 20V17.5M222.5 17.5H227.5M230 17.5H227.5M227.5 17.5V27.5M227.5 30V27.5M227.5 27.5H232.5M235 27.5H232.5M232.5 27.5V122.5M232.5 125V122.5M232.5 122.5H227.5M225 122.5H227.5M227.5 122.5V132.5M227.5 135V132.5M227.5 132.5H222.5M220 132.5H222.5M222.5 132.5V137.5M222.5 140V137.5M222.5 137.5H217.5M215 137.5H217.5M217.5 137.5V142.5M217.5 145V142.5M217.5 142.5H202.5M200 142.5H202.5M202.5 142.5V147.5M202.5 150V147.5M202.5 147.5H32.5M30 147.5H32.5M32.5 147.5V142.5M32.5 140V142.5M32.5 142.5H17.5M15 142.5H17.5M17.5 142.5V137.5M17.5 135V137.5M17.5 137.5H12.5M10 137.5H12.5M12.5 137.5V132.5M12.5 130V132.5M12.5 132.5H7.5M5 132.5H7.5M7.5 132.5V122.5M7.5 120V122.5M7.5 122.5H2.5M0 122.5H2.5M2.5 122.5V27.5M2.5 25V27.5M2.5 27.5L7.5 27.5603M10 27.5905L7.5 27.5603M7.5 27.5603V17.5M7.5 15V17.5M7.5 17.5H12.5M15 17.5H12.5M12.5 17.5V12.5M12.5 10V12.5M12.5 12.5H17.5M20 12.5H17.5M17.5 12.5V7.5M17.5 5V7.5M17.5 7.5H32.5M35 7.5H32.5M32.5 7.5V2.5M32.5 0V2.5" stroke="#6B6B6B" strokeWidth="5"/>
                            <image href={mailLogo} x="74" y="35" height="80" width="80" />
                        </svg>
                    </a>
                    <a href="https://github.com/SelmaBtt" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="235" height="150" viewBox="0 0 235 150" fill="none">
                            <path d="M202.5 10V7.5M220 7.5H217.5M202.5 7.5V2.5H200H35H32.5M202.5 7.5H217.5M217.5 7.5V15M220 12.5H222.5M225 12.5H222.5M222.5 12.5V17.5M222.5 20V17.5M222.5 17.5H227.5M230 17.5H227.5M227.5 17.5V27.5M227.5 30V27.5M227.5 27.5H232.5M235 27.5H232.5M232.5 27.5V122.5M232.5 125V122.5M232.5 122.5H227.5M225 122.5H227.5M227.5 122.5V132.5M227.5 135V132.5M227.5 132.5H222.5M220 132.5H222.5M222.5 132.5V137.5M222.5 140V137.5M222.5 137.5H217.5M215 137.5H217.5M217.5 137.5V142.5M217.5 145V142.5M217.5 142.5H202.5M200 142.5H202.5M202.5 142.5V147.5M202.5 150V147.5M202.5 147.5H32.5M30 147.5H32.5M32.5 147.5V142.5M32.5 140V142.5M32.5 142.5H17.5M15 142.5H17.5M17.5 142.5V137.5M17.5 135V137.5M17.5 137.5H12.5M10 137.5H12.5M12.5 137.5V132.5M12.5 130V132.5M12.5 132.5H7.5M5 132.5H7.5M7.5 132.5V122.5M7.5 120V122.5M7.5 122.5H2.5M0 122.5H2.5M2.5 122.5V27.5M2.5 25V27.5M2.5 27.5L7.5 27.5603M10 27.5905L7.5 27.5603M7.5 27.5603V17.5M7.5 15V17.5M7.5 17.5H12.5M15 17.5H12.5M12.5 17.5V12.5M12.5 10V12.5M12.5 12.5H17.5M20 12.5H17.5M17.5 12.5V7.5M17.5 5V7.5M17.5 7.5H32.5M35 7.5H32.5M32.5 7.5V2.5M32.5 0V2.5" stroke="#6B6B6B" strokeWidth="5"/>
                            <image href={gitHubLogo} x="74" y="35" height="80" width="80" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/selma-brattli-a6378628a" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="235" height="150" viewBox="0 0 235 150" fill="none">
                            <path d="M202.5 10V7.5M220 7.5H217.5M202.5 7.5V2.5H200H35H32.5M202.5 7.5H217.5M217.5 7.5V15M220 12.5H222.5M225 12.5H222.5M222.5 12.5V17.5M222.5 20V17.5M222.5 17.5H227.5M230 17.5H227.5M227.5 17.5V27.5M227.5 30V27.5M227.5 27.5H232.5M235 27.5H232.5M232.5 27.5V122.5M232.5 125V122.5M232.5 122.5H227.5M225 122.5H227.5M227.5 122.5V132.5M227.5 135V132.5M227.5 132.5H222.5M220 132.5H222.5M222.5 132.5V137.5M222.5 140V137.5M222.5 137.5H217.5M215 137.5H217.5M217.5 137.5V142.5M217.5 145V142.5M217.5 142.5H202.5M200 142.5H202.5M202.5 142.5V147.5M202.5 150V147.5M202.5 147.5H32.5M30 147.5H32.5M32.5 147.5V142.5M32.5 140V142.5M32.5 142.5H17.5M15 142.5H17.5M17.5 142.5V137.5M17.5 135V137.5M17.5 137.5H12.5M10 137.5H12.5M12.5 137.5V132.5M12.5 130V132.5M12.5 132.5H7.5M5 132.5H7.5M7.5 132.5V122.5M7.5 120V122.5M7.5 122.5H2.5M0 122.5H2.5M2.5 122.5V27.5M2.5 25V27.5M2.5 27.5L7.5 27.5603M10 27.5905L7.5 27.5603M7.5 27.5603V17.5M7.5 15V17.5M7.5 17.5H12.5M15 17.5H12.5M12.5 17.5V12.5M12.5 10V12.5M12.5 12.5H17.5M20 12.5H17.5M17.5 12.5V7.5M17.5 5V7.5M17.5 7.5H32.5M35 7.5H32.5M32.5 7.5V2.5M32.5 0V2.5" stroke="#6B6B6B" strokeWidth="5"/>
                            <image href={linkedInLogo} x="74" y="35" height="80" width="80" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
