import SvgIcon from "./SvgIcon";
import styled from '../../stylesheets/Nav.module.css'

const Nav = () => {
    return(
        <div className={styled.NavWrapper}>
            <SvgIcon />
            <SvgIcon />
            <SvgIcon />
            <SvgIcon />
        </div>
    )
}

export default Nav;