import SvgIcon from "./SvgIcon";
import styled from '../../stylesheets/Nav.module.css'
import { useState } from "react";

const Nav = () => {
    const [isStartTrue, setIsStartTrue] = useState(false)
    const [isAboutMeTrue, setIsAboutMeTrue] = useState(false)
    const [isProjectsTrue, setIsProjectsTrue] = useState(false)
    const [isContactTrue, setIsContactTrue] = useState(false)

    return(
        <div className={styled.NavWrapper}>
            <div
            onMouseEnter={() => setIsStartTrue(true)}
            onMouseLeave={() => setIsStartTrue(false)}>
                <SvgIcon />
                {isStartTrue && 
                    <div className={styled.startModal} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <h2>Start</h2>
                    </div>
                }
            </div>
            <div
            onMouseEnter={() => setIsAboutMeTrue(true)}
            onMouseLeave={() => setIsAboutMeTrue(false)}>
                <SvgIcon />
                {isAboutMeTrue && 
                    <div className={styled.aboutMeModal} onClick={() => window.scrollTo({ top: 1600, behavior: "smooth" })}>
                        <h2>About me</h2>
                    </div>
                }
            </div>
            <div
            onMouseEnter={() => setIsProjectsTrue(true)}
            onMouseLeave={() => setIsProjectsTrue(false)}>
                <SvgIcon />
                {isProjectsTrue && 
                    <div className={styled.projectsModal} onClick={() => window.scrollTo({ top: 2900, behavior: "smooth" })}>
                        <h2>Projects</h2>
                    </div>
                }
            </div>
            <div
            onMouseEnter={() => setIsContactTrue(true)}
            onMouseLeave={() => setIsContactTrue(false)}>
                <SvgIcon />
                {isContactTrue && 
                    <div className={styled.contactModal} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
                        <h2>Contact</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default Nav;