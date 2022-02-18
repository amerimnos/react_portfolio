
import { useEffect, useRef } from 'react';
import { ReactComponent as BgIcon2 } from '../main_bg.svg';
import Animate from './../Animate';
export function MainConts2(props) {

    let conts2 = useRef(null);
    let tit = useRef(null);
    let mainConts2Item1 = useRef(null);
    let mainConts2Item2 = useRef(null);
    let mainConts2Item3 = useRef(null);
    let mainConts2Item4 = useRef(null);


    function handleResize() {
        props.SetPos1(conts2.current.offsetTop)
    }

    function handleScroll() {
        let isActive = true;
        if (isActive) {
            if (window.scrollY >= conts2.current.offsetTop && window.scrollY < conts2.current.offsetTop + 50) {
                isActive = false;
                new Animate(tit.current,
                    {
                        prop: 'transform',
                        duration: 1700,
                        value: 0,
                    }
                )
                new Animate(tit.current,
                    {
                        prop: 'opacity',
                        duration: 1700,
                        value: 1,
                    }
                )

                let items = conts2.current.querySelectorAll('.item')
                items.forEach((element, index) => {

                    setTimeout(() => {
                        new Animate(element,
                            {
                                prop: 'transform',
                                duration: 1000,
                                value: 0,
                                delay: index * 150
                            }
                        )
                        new Animate(element,
                            {
                                prop: 'opacity',
                                duration: 1000,
                                value: 1,
                                delay: index * 150
                            }
                        )
                    }, index * 300);
                });
            }
        }
    }


    useEffect(
        () => {
            props.SetPos1(conts2.current.offsetTop)
            window.addEventListener('resize', handleResize)
            window.addEventListener('scroll', handleScroll)
            return (
                () => {
                    window.removeEventListener('resize', handleResize)
                    window.removeEventListener('scroll', handleScroll)
                }
            )
        }, []

    )

    return (
        <section ref={conts2} className="mainConts2">
            <div className="inner">
                <h1 ref={tit} className="tit">We provide you the Best services</h1>
                <ul className="conts">
                    <li ref={mainConts2Item1} className="item">
                        <div className="top">
                            <span className="material-icons-sharp">content_copy</span>
                            <span className="num">01/</span>
                        </div>
                        <h2>Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in eius id sed. Asperiores laudantium repellendus animi molestiae.</p>
                        <div className="btn">
                            VIEW DETAIL
                            <span className="arrow"></span>
                        </div>
                    </li>
                    <li ref={mainConts2Item2} className="item">
                        <div className="top">
                            <span className="material-icons-outlined">computer</span>
                            <span className="num">02/</span>
                        </div>
                        <h2>Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in eius id sed. Asperiores laudantium repellendus animi molestiae.</p>
                        <div className="btn">
                            VIEW DETAIL
                            <span className="arrow"></span>
                        </div>
                    </li>
                    <li ref={mainConts2Item3} className="item">
                        <div className="top">
                            <span className="material-icons-outlined">campaign</span>
                            <span className="num">03/</span>
                        </div>
                        <h2>Marketing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in eius id sed. Asperiores laudantium repellendus animi molestiae.</p>
                        <div className="btn">
                            VIEW DETAIL
                            <span className="arrow"></span>
                        </div>
                    </li>
                    <li ref={mainConts2Item4} className="item">
                        <div className="top">
                            <span className="material-icons-outlined">edit</span>
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
    )
}

export default MainConts2;