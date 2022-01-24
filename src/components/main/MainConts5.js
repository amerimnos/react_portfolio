import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";

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
                                                <HashLink smooth to="/community/notice#section_start">
                                                    READ MORE
                                                </HashLink>
                                                <span className="arrow"></span>
                                            </li>
                                            <li className="date">{el.time}</li>
                                        </ul>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                <div className="moreBtn">
                    <HashLink smooth to="/community/notice#section_start">
                        Read All News
                    </HashLink>
                    <span className="arrow"></span>
                </div>
            </div>
        </section>
    )
}

export default MainConts5;