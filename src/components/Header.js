import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

    const clickStyle = { color: "#2bae29" };
    const gnb = useRef(null);
    const line = useRef(null);

    function lineMove(e) {

        line.current.classList.add('on');

        //우선 마우스 올릴시 요소의 left,top 좌표 구함
        let elLeft = e.target.getBoundingClientRect().left;
        let elTop = e.target.getBoundingClientRect().top;

        //부모의 left,top 좌표 구함
        let parentLeft = e.target.closest('.gnb').getBoundingClientRect().left;
        let parentTop = e.target.closest('.gnb').getBoundingClientRect().top;

        //부모와 해당 요소의 left, top을 뺌.
        let moveLeft = elLeft - parentLeft;
        let moveTop = elTop - parentTop;

        // 짝대기에 위치값 대입
        line.current.style.left = moveLeft + 'px';
        line.current.style.top = moveTop+30 + 'px';

        //마우스 올린 해당 요소의 넓이 구하기.
        let elwidth = e.target.getBoundingClientRect().width;

        //짝대기 넓이에 대입하기.
        line.current.style.width = elwidth+'px';

    }

    return (
        <header>
            <div className="inner">
                <h1 className="logo"><NavLink exact to="/">Amerimnos</NavLink><span>.</span></h1>
                <ul ref={gnb} onMouseLeave={()=>{line.current.classList.remove('on')}} className="gnb">
                    <li ref={line} className="line"></li>
                    <li><NavLink exact activeStyle={clickStyle} onMouseEnter={lineMove} to="/department">Department</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} onMouseEnter={lineMove} to="/community">Community</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} onMouseEnter={lineMove} to="/gallery">Gallery</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} onMouseEnter={lineMove} to="/youtube">Youtube</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} onMouseEnter={lineMove} to="/location">Location</NavLink></li>
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