import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <ul className="inner">
                <li className="info">
                    <h1 className="logo"><NavLink exact to="/">Amerimnos</NavLink><span>.</span></h1>
                    <p>We are a digital agency based on California.</p>
                    <div className="sns">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-connectdevelop"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </li>
                <li className="nav">
                    <h2>Links</h2>
                    <ul className="list">
                        <li><NavLink exact to="/department">Department</NavLink></li>
                        <li><NavLink exact to="/community">Community</NavLink></li>
                        <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                        <li><NavLink exact to="/youtube">Youtube</NavLink></li>
                        <li><NavLink exact to="/location">Location</NavLink></li>
                        <li><NavLink exact to="/join">Join</NavLink></li>
                    </ul>
                </li>
                <li className="nav">
                    <h2>Legal</h2>
                    <ul className="list">
                        <li><NavLink exact to="/privacy">Privacy Policy</NavLink></li>
                        <li><NavLink exact to="/terms">Terms of Conditions</NavLink></li>
                        <li><NavLink exact to="/faq">Faq</NavLink></li>
                        <li><NavLink exact to="/help">Help Center</NavLink></li>
                    </ul>
                </li>
                <li className="contactUs">
                    <ul className="list">
                        <li>DM us on: <span><a href="mailto:anthimus3@gmail.com">anthimus3@gmail.com</a></span></li>
                        <li>Call us on: <span><a href="tel:010 1234 1234">010 1234 1234</a></span></li>
                        <li>Find us: <span>767 5th Street,<br/>Sadngro, Dealim Apt</span></li>
                    </ul>
                </li>
                <li className="copy">&copy; Amerimnos agency 2022. All rights reserved.</li>
            </ul>
        </footer>
    )
}

export default Footer;