import { useEffect, useRef } from 'react';
import { ReactComponent as BgIcon2 } from '../main_bg.svg';

function MainConts3(props) {

    let conts3 = useRef(null);
    function handleResize() {
        props.SetPos2(conts3.current.offsetTop)
    }

    useEffect(
        () => {
            props.SetPos2(conts3.current.offsetTop)
            window.addEventListener('resize', handleResize)
            return (
                ()=>{
                    window.removeEventListener('resize', handleResize)
                }
            )
        }, []
    )

    const url = process.env.PUBLIC_URL;
    return (
        <section ref={conts3} className="mainConts3">
            <div className="inner">
                <h1>Working process</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe earum accusamus beatae blanditiis illo maiores libero.</p>
                <ul className="conts">
                    <li className="process">
                        <div className="item">
                            <div className="left">
                                <div className="num">01.</div>
                                <span className="arrow"></span>
                            </div>
                            <div className="conts">
                                <h2>Research</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <div className="num">02.</div>
                                <span className="arrow"></span>
                            </div>
                            <div className="conts">
                                <h2>Research</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <div className="num">03.</div>
                                <span className="arrow"></span>
                            </div>
                            <div className="conts">
                                <h2>Research</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!</p>
                            </div>
                        </div>
                    </li>

                    <li className="imgWrap">
                        <img src={`${url}/img/mainConts03_01.webp`} alt="lorem" />
                    </li>
                    <li className="imgWrap">
                        <img src={`${url}/img/mainConts03_02.webp`} alt="lorem" />
                    </li>
                </ul>
            </div>
            <BgIcon2 className='bg3' />
        </section>
    )
}

export default MainConts3;