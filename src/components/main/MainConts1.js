/* import { useEffect, useRef } from 'react'; */
import { ReactComponent as BgIcon1 } from '../main_bg.svg';
export function MainConts1(/* props */) {
    const url = process.env.PUBLIC_URL;

    /* let conts1 = useRef(null);
    useEffect(
        () => {
            props.SetPos1(conts1.current.offsetTop)
            window.addEventListener('resize', () => {
                props.SetPos1(conts1.current.offsetTop)
            })

            return (
                ()=>{
                    window.removeEventListener('resize', () => {
                        props.SetPos1(conts1.current.offsetTop)
                    })
                }
            )
        }, []
    ) */

    return (
        <section /* ref={conts1} */ className="mainConts1">
            <div className="inner">
                <div className="topText">We are a digital agency based on Korea</div>
                <h2>We build digital products for creative peoples</h2>
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
    )
}

export default MainConts1;