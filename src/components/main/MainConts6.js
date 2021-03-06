import { ReactComponent as BgIcon2 } from '../main_bg02.svg';
import { ReactComponent as KoreaLogo } from '../KoreaLogo.svg';
import { ReactComponent as NaverLogo } from '../NaverLogo.svg';
import { ReactComponent as KakaoLogo } from '../KakaoLogo.svg';
import { ReactComponent as GoogleLogo } from '../GoogleLogo.svg';
import { ReactComponent as EmartLogo } from '../EmartLogo.svg';
import { ReactComponent as LgLogo } from '../LgLogo.svg';
import { ReactComponent as MicrosoftLogo } from '../MicrosoftLogo.svg';
import { ReactComponent as SamsungLogo } from '../SamsungLogo.svg';
import { useEffect, useRef } from 'react';

export function MainConts6(props) {

    let conts6 = useRef(null);
    function handleResize() {
        props.SetPos5(conts6.current.offsetTop)
    }
    useEffect(
        () => {
            props.SetPos5(conts6.current.offsetTop)
            window.addEventListener('resize', handleResize)
            return (
                ()=>{
                    window.removeEventListener('resize', handleResize)
                }
            )
        }, []
    )
    return (
        <section ref={conts6} className="mainConts6">
            <div className="inner1">
                <div className="cont">
                    <h1 className='tit'>Let's make something great!</h1>
                    <div className="right">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quis ullam consequuntur accusantium!</p>
                        <div className="moreBtn">
                            SAY H!
                            <span className="arrow"></span>
                        </div>
                    </div>
                    <BgIcon2 className='bg1' />
                    <BgIcon2 className='bg2' />
                </div>
            </div>
            <div className="inner2">
                <div className="tit">_Trusted by</div>
                <div className="banner">
                    <a href="https://www.president.go.kr" target={`_blank`}><KoreaLogo /></a>
                    <a href="https://www.navercorp.com" target={`_blank`}><NaverLogo /></a>
                    <a href="https://www.kakaocorp.com" target={`_blank`}><KakaoLogo /></a>
                    <a href="https://www.google.co.kr" target={`_blank`}><GoogleLogo /></a>
                    <a href="http://www.emartcompany.com/ko/main.do" target={`_blank`}><EmartLogo /></a>
                    <a href="https://www.lg.co.kr" target={`_blank`}><LgLogo /></a>
                    <a href="https://www.microsoft.com/ko-kr" target={`_blank`}><MicrosoftLogo /></a>
                    <a href="https://www.samsung.com/sec/aboutsamsung/home" target={`_blank`}><SamsungLogo /></a>
                </div>
            </div>
        </section>
    )
}

export default MainConts6;