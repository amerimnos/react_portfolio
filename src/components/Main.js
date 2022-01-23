import { ReactComponent as BgIcon1 } from './main_bg.svg';
import { ReactComponent as BgIcon2 } from './main_bg02.svg';

function Main() {
    const url = process.env.PUBLIC_URL;
    return (
        <>
            <section className="mainConts1">
                <div className="inner">
                    <div className="topText">We are a digital agency based on California</div>
                    <h2>We build digital products for creative peoplpes</h2>
                    <div className="bottomTxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos fugit ipsa.</div>
                    <a href="#test" className="btn">SEE OUR WORKS
                        <span className="arrow"></span>
                    </a>
                    <div className="imgWrap">
                        <img src={`${url}/img/main_01.webp`} alt="lorem" />
                    </div>
                    <BgIcon1 className='bg' />
                </div>
            </section>
            <section className="mainConts2">
                <div className="inner">
                    <h1 className="tit">We provide you the Best services</h1>
                    <ul className="conts">
                        <li className="item">
                            <div className="top">
                                <span class="material-icons-sharp">content_copy</span>
                                <span className="num">01/</span>
                            </div>
                            <h2>Design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in eius id sed. Asperiores laudantium repellendus animi molestiae.</p>
                            <div className="btn">
                                VIEW DETAIL
                                <span className="arrow"></span>
                            </div>
                        </li>
                        <li className="item">
                            <div className="top">
                                <span class="material-icons-outlined">computer</span>
                                <span className="num">02/</span>
                            </div>
                            <h2>Development</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in eius id sed. Asperiores laudantium repellendus animi molestiae.</p>
                            <div className="btn">
                                VIEW DETAIL
                                <span className="arrow"></span>
                            </div>
                        </li>
                        <li className="item">
                            <div className="top">
                                <span class="material-icons-outlined">campaign</span>
                                <span className="num">03/</span>
                            </div>
                            <h2>Marketing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in eius id sed. Asperiores laudantium repellendus animi molestiae.</p>
                            <div className="btn">
                                VIEW DETAIL
                                <span className="arrow"></span>
                            </div>
                        </li>
                        <li className="item">
                            <div className="top">
                                <span class="material-icons-outlined">edit</span>
                                <span className="num">04/</span>
                            </div>
                            <h2>Content Writing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in eius id sed. Asperiores laudantium repellendus animi molestiae.</p>
                            <div className="btn">
                                VIEW DETAIL
                                <span className="arrow"></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <BgIcon2 className='bg2' />
            </section>
            <section className="mainConts3">
                <div className="inner">
                    <h1>Working process</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe earum accusamus beatae blanditiis illo maiores libero.</p>
                    <ul className="conts">
                        <li className="process">
                            <div className="item">
                                <div className="left">
                                    <div className="num">01.</div>
                                    <spna className="arrow"></spna>
                                </div>
                                <div className="conts">
                                    <h2>Research</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="left">
                                    <div className="num">02.</div>
                                    <spna className="arrow"></spna>
                                </div>
                                <div className="conts">
                                    <h2>Research</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="left">
                                    <div className="num">03.</div>
                                    <spna className="arrow"></spna>
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
            <section className="mainConts4">
                <div className="inner">
                    <h1>Some of our creative works</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis architecto amet ullam!</p>
                    <ul className="conts">
                        <li className="item">
                            <div className="imgWrap">
                                <img src={`${url}/img/mainConts03_01.webp`} alt="lorem" />
                            </div>
                            <h2>Banking App UI Kit
                                <span>_APP DESIGN</span>
                            </h2>
                            <div className="btn">FULL Case Study
                                <span className="arrow"></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="seeMoreBtn">
                    <span className="arrow"></span>
                </div>
            </section>
        </>
    )
}
export default Main;