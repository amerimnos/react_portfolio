
/* 
/react_portfolio#/community 에서 새로고침시 스테이트 값 유지를 못하므로, 추후에 로콜스토리지나 리덕스 라이브러리 배우면 그때 적용 하자!
*/

import { Route, NavLink } from 'react-router-dom';
import Faq from './Faq';
import NoticeBoard from './NoticeBoard';
import FreeBoard from './FreeBoard';
import { useEffect, useRef, useState } from "react";

function Community(props) {

    const topConts = useRef(null);
    const commuFirstConts = useRef(null);

    const imgUrl = process.env.PUBLIC_URL;
    const commuTabStyle = {
        backgroundColor: "#234c22",
        color: "#fff",
    }

    useEffect(() => {
        if (props.commuFirstContsIsActive === 'on') {
            topConts.current.classList.remove("on");
            commuFirstConts.current.classList.add('on');
        }
    }, [props.commuFirstContsIsActive])


    function tabActive(e) {
        topConts.current.classList.add("on");
        commuFirstConts.current.classList.remove("on");
        props.setCommuFirstContsIsActive(null);
    }

    return (
        <section className="commuConts">
            <div className="inner">
                <article ref={topConts} className="topConts">
                    <h1>Hello, what can we do for you?</h1>
                    <p>Search our help center quick answers</p>

                    <div className="searchWrap">
                        <input onClick={() => { alert('준비중 입니다.') }} className="search" type="text" placeholder="Start typing your search..." />
                        <label htmlFor="searchBtnLabel"><i className="fas fa-search"></i></label>
                        <input className="searchBtn" id="searchBtn" type="button" value="" name="commuTotalSearch" />
                    </div>

                    <ul className="bgIcon1">
                        <li className="binCircle"></li>
                        <li className="circle"></li>
                        <li className="dividCircle"></li>
                        <li className="sRectangle"></li>
                        <li className="bRectangle"></li>
                    </ul>
                    <ul className="bgIcon2">
                        <li className="sCircle"></li>
                        <li className="bCircle"></li>
                        <li className="dividCircle"></li>
                        <li className="rectangle"></li>
                    </ul>
                </article>
                <article className="tab">
                    <NavLink onClick={tabActive} activeStyle={commuTabStyle} to="/community/faq">
                        <img src={`${imgUrl}/img/Community_icon.svg`} alt="" />
                        FAQ
                    </NavLink>
                    <NavLink onClick={tabActive} activeStyle={commuTabStyle} to="/community/notice">
                        <span className="material-icons">article</span>
                        NOTICE
                    </NavLink>
                    <NavLink onClick={tabActive} activeStyle={commuTabStyle} to="/community/free">
                        <img src={`${imgUrl}/img/qna_icon.svg`} alt="" />
                        COMMUNITY
                    </NavLink>
                </article>
                <article className="bottomConts">

                    <Route path="/community/faq" component={Faq}></Route>
                    <Route path="/community/notice" component={NoticeBoard}></Route>
                    <Route path="/community/free" component={FreeBoard}></Route>

                    <div className="firstConts" ref={commuFirstConts}>
                        <NavLink onClick={tabActive} activeStyle={commuTabStyle} to="/community/faq">
                            <span className="leftIcon material-icons">announcement</span>
                            <ul className="txt">
                                <li>purchasing Questions</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, nulla.</li>
                            </ul>
                            <span className="viewIcon"></span>
                        </NavLink>
                        <NavLink onClick={tabActive} activeStyle={commuTabStyle} to="/community/notice">
                            <span className="leftIcon material-icons">article</span>
                            <ul className="txt">
                                <li>Important guidance</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, nulla.</li>
                            </ul>
                            <span className="viewIcon"></span>
                        </NavLink>
                        <NavLink onClick={tabActive} activeStyle={commuTabStyle} to="/community/free">
                            <span className="leftIcon material-icons">check_circle</span>
                            <ul className="txt">
                                <li>Communication with customers</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, nulla.</li>
                            </ul>
                            <span className="viewIcon"></span>
                        </NavLink>

                    </div>
                </article>


            </div>
        </section>
    )
}
export default Community;