import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function MainConts5() {

    const data = useSelector(state => state.noticeReducer.notice)
    console.log('data', data);

    return (
        <section className="mainConts5">
            <div className="inner">
                <h1>Our Lastest Notice</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe earum accusamus beatae blanditiis illo maiores libero.</p>
                <ul className="conts">
                    {
                        data.map(
                            (el, index) => {
                                return (
                                    <li key={index} className="item">
                                        <h2>{el.title}</h2>
                                        <div className="txt">
                                            {el.contents}
                                        </div>
                                        <ul className="bottom">
                                            <li className="btn">
                                                READ MORE
                                                <span className="arrow"></span>
                                            </li>
                                            <li className="date">{el.time}</li>
                                        </ul>
                                    </li>
                                )
                            }
                        )
                    }
                    {/* <li className="item">
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
                    </li> */}
                </ul>
                <div className="moreBtn">
                    {/* <Link to={{
                        pathname: "/community/notice",
                        hash: "#section_start",
                        state: { fromDashboard: false }
                    }}>Read All News</Link>
 */}
                    <Link to="/community/notice">Read All News</Link>
                    <span className="arrow"></span>
                </div>
            </div>
        </section>
    )
}

export default MainConts5;