import { ReactComponent as BgIcon2 } from '../main_bg02.svg';
import { ReactComponent as KoreaLogo } from '../KoreaLogo.svg';
import { ReactComponent as NaverLogo } from '../NaverLogo.svg';
import { ReactComponent as KakaoLogo } from '../KakaoLogo.svg';
import { ReactComponent as GoogleLogo } from '../GoogleLogo.svg';

export function MainConts6() {
    return (
        <section className="mainConts6">
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
                </div>
            </div>
        </section>
    )
}

export default MainConts6;