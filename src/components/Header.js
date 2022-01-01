import { NavLink } from 'react-router-dom';

function Header() {

    const clickStyle = { color: "red" };
    return (
        <header>
            <div className="inner">
                <h1 className="logo"><NavLink exact to="/">Amerimnos</NavLink><span>.</span></h1>
                <ul className="gnb">
                    <li><NavLink exact activeStyle={clickStyle} to="/department">Department</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/community">Community</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/gallery">Gallery</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/youtube">Youtube</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/location">Location</NavLink></li>
                </ul>
                <NavLink className="join" exact activeStyle={clickStyle} to="/Join">
                    Join <span class="material-icons-round">arrow_forward_ios</span>
                </NavLink>
                <div className="totalMenuBtn"></div>
                <ul className="totalMenuConts">
                    <li><NavLink exact activeStyle={clickStyle} to="/department">Department</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/community">Community</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/gallery">Gallery</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/youtube">Youtube</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/location">Location</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/join">Join</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;