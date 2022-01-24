import { ReactComponent as BgIcon1 } from '../main_bg.svg';
export function MainConts1() {
    const url = process.env.PUBLIC_URL;
    return (
        <section className="mainConts1">
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