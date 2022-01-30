import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickStyle = { color: "#2bae29" };
    const clickStyle1 = { color: "#2bae29", border: "solid 1px #2bae29" };
    const header = useRef(null);
    const logo = useRef(null);
    const gnb = useRef(null);
    const mobileBtn = useRef(null);
    const line = useRef(null);



    function mobileMenuActive(e) {
        if (document.documentElement.clientWidth < 992) {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            } else {
                setIsMenuOpen(true);
            }


            mobileBtn.current.classList.toggle("on");
            document.querySelector('body').classList.toggle("isScroll");
            if (props.menuMobile === 'mobile') return props.setMenuMobile('');
            props.setMenuMobile('mobile');
        }
    }

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
        line.current.style.top = moveTop + 30 + 'px';

        //마우스 올린 해당 요소의 넓이 구하기.
        let elwidth = e.target.getBoundingClientRect().width;

        //짝대기 넓이에 대입하기.
        line.current.style.width = elwidth + 'px';
    }

    function firstLoading() {
        props.setCommuFirstContsIsActive('on');
    }

    return (
        <header ref={header} className={`${props.frame} ${props.menuMobile}`}>
            <div className="inner">
                <h1 ref={logo} onClick={
                    isMenuOpen
                        ?
                        e => { mobileMenuActive(e) }
                        :
                        null
                } className="logo"><NavLink exact to="/">Amerimnos</NavLink><span>.</span></h1>
                <ul ref={gnb} onMouseLeave={() => { line.current.classList.remove('on') }} className="gnb">
                    <li ref={line} className="line"></li>
                    <li><NavLink activeStyle={clickStyle} onClick={mobileMenuActive} onMouseEnter={lineMove} to="/department">Department</NavLink></li>
                    <li><NavLink activeStyle={clickStyle} onClick={() => { firstLoading(); mobileMenuActive() }} onMouseEnter={lineMove} to="/community">Community</NavLink></li>
                    <li><NavLink activeStyle={clickStyle} onClick={mobileMenuActive} onMouseEnter={lineMove} to="/gallery">Gallery</NavLink></li>
                    <li><NavLink activeStyle={clickStyle} onClick={mobileMenuActive} onMouseEnter={lineMove} to="/youtube">Youtube</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} onClick={mobileMenuActive} onMouseEnter={lineMove} to="/location">Location</NavLink></li>
                </ul>
                <NavLink className="join" exact activeStyle={clickStyle1} onClick={mobileMenuActive} to="/Join" data-text="Join">
                    <span>J</span>
                    <span>o</span>
                    <span>i</span>
                    <span>n</span>
                    <span className="material-icons-round">arrow_forward_ios</span>
                </NavLink>
                <button ref={mobileBtn} onClick={mobileMenuActive} className="totalMenuBtn"></button>
            </div>
        </header>
    )
}

export default Header;