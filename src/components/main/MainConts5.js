export function MainConts5() {
    const url = process.env.PUBLIC_URL;
    return (
        <section className="mainConts5">
            <div className="inner">
                <h1>Our Lastest News</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe earum accusamus beatae blanditiis illo maiores libero.</p>
                <ul className="conts">
                    <li className="item">
                        <div className="imgWrap">
                            <img src={`${url}/img/mainConts03_01.webp`} alt="lorem" />
                        </div>
                        <h2>Why your client needs a responsive website</h2>
                        <ul className="bottom">
                            <li className="btn">
                                READ MORE
                                <span className="arrow"></span>
                            </li>
                            <li className="date">April 30, 2022</li>
                        </ul>
                    </li>
                    <li className="item">
                        <div className="imgWrap">
                            <img src={`${url}/img/mainConts03_01.webp`} alt="lorem" />
                        </div>
                        <h2>Why your client needs a responsive website</h2>
                        <ul className="bottom">
                            <li className="btn">
                                READ MORE
                                <span className="arrow"></span>
                            </li>
                            <li className="date">April 30, 2022</li>
                        </ul>
                    </li>
                    <li className="item">
                        <div className="imgWrap">
                            <img src={`${url}/img/mainConts03_01.webp`} alt="lorem" />
                        </div>
                        <h2>Why your client needs a responsive website</h2>
                        <ul className="bottom">
                            <li className="btn">
                                READ MORE
                                <span className="arrow"></span>
                            </li>
                            <li className="date">April 30, 2022</li>
                        </ul>
                    </li>
                </ul>
                <div className="moreBtn">
                    Read All News
                    <span className="arrow"></span>
                </div>
            </div>
        </section>
    )
}

export default MainConts5;