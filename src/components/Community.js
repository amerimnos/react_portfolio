function Community() {
    return (
        <section className="commuConts">
            <div className="inner">
                <article className="topConts">
                    <h1>Hello, what can we do for you?</h1>
                    <p>Search our help center quick answers</p>

                    <div className="searchWrap">
                        <input className="search" type="text" placeholder="Start typing your search..." />
                        <label htmlFor="searchBtnLabel"></label>
                        <input className="searchBtn" id="searchBtn" type="button" value="" name="commuTotalSearch" />
                    </div>
                </article>
                <article className="tab">
                    <a href="#">
                        <i>아이콘</i>
                        FAQ
                    </a>
                    <a href="#">
                        <i>아이콘</i>
                        NOTICE
                    </a>
                    <a href="#">
                        <i>아이콘</i>
                        COMMUNITY
                    </a>
                </article>
                <article className="bottomConts">
                    <a href="#n">
                        <span>icon</span>
                        <ul className="txt">
                            <li>purchasing Questions</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, nulla.</li>
                        </ul>
                        <span className="viewIcon"></span>
                    </a>
                    <a href="#n">
                        <span>icon</span>
                        <ul className="txt">
                            <li>purchasing Questions</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, nulla.</li>
                        </ul>
                        <span className="viewIcon"></span>
                    </a>
                    <a href="#n">
                        <span>icon</span>
                        <ul className="txt">
                            <li>purchasing Questions</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, nulla.</li>
                        </ul>
                        <span className="viewIcon"></span>
                    </a>
                </article>


            </div>
        </section>
    )
}
export default Community;