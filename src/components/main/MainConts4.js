export function MainConts4() {
    const url = process.env.PUBLIC_URL;
    return (
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
                <div className="moreBtn">
                    SEE MORE WORKS
                    <span className="arrow"></span>
                </div>
            </div>
        </section>
    )
}

export default MainConts4;