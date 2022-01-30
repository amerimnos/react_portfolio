
import { useEffect, useRef } from 'react';
import { ReactComponent as BgIcon2 } from '../main_bg.svg';
export function MainConts2(props) {

    let conts2 = useRef(null);
    useEffect(
        () => {
            props.SetPos1(conts2.current.offsetTop)
            window.addEventListener('resize', () => {
                props.SetPos1(conts2.current.offsetTop)
            })

            return (
                ()=>{
                    window.removeEventListener('resize', () => {
                        props.SetPos1(conts2.current.offsetTop)
                    })
                }
            )
        }, []
    )

    return (
        <section ref={conts2} className="mainConts2">
            <div className="inner">
                <h1 className="tit">We provide you the Best services</h1>
                <ul className="conts">
                    <li className="item">
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
                    <li className="item">
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
                    <li className="item">
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
                    <li className="item">
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