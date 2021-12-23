import {NavLink} from 'react-router-dom';

function Header() {

    const clickStyle = {color: "red"};
    return(
        <header>
            <ul className="gnb">
                <li><NavLink exact activeStyle={clickStyle} to="/Community">Community</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/Department">Department</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/Youtube">Youtube</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/Gallery">Gallery</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/Location">Location</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/Join">Join</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;