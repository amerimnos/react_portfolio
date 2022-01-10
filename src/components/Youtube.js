function Youtube() {
    return (

        <section className="youtubeConts">
            <div className="inner">
                <aside>
                    <h1>Viedo board</h1>
                    <ul className="menu">
                        <li className="tit">MENU</li>
                        <li className="item">
                            <span>아이콘</span>
                            Discover
                        </li>
                        <li className="item">
                            <span>아이콘</span>
                            Trending
                        </li>
                        <li className="item">
                            <span>아이콘</span>
                            Playlist
                        </li>
                    </ul>
                    <ul className="category">
                        <li className="tit">CATEGORY</li>
                        <li className="item">
                            <span>아이콘</span>
                            Live Stream
                        </li>
                        <li className="item">
                            <span>아이콘</span>
                            Nature
                        </li>
                        <li className="item">
                            <span>아이콘</span>
                            Music
                        </li>
                    </ul>
                </aside>
                <main>
                    <div className="topConts">
                        <label htmlFor="youtubeSearch">
                            Youtube Search button
                            <input type="text" name="youtubeSearch" id="youtubeSearch" placeholder="Search" />
                            <input type="button" value="" />
                        </label>
                        <div className="theme">
                            <button type="button"></button>
                            <span>Night Mode</span>
                        </div>
                    </div>
                    <h2>Discover</h2>
                    <ul className="videosConts1">
                        <li>
                            <div className="videoWrap">
                                <iframe src="test" frameborder="0" title="videos"></iframe>
                            </div>
                            <div className="tit">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li>
                            <div className="videoWrap">
                                <iframe src="test" frameborder="0" title="videos"></iframe>
                            </div>
                            <div className="tit">How to do Basic Jumping and how to lading safely</div>
                        </li>
                    </ul>
                    <h2>Discover</h2>
                    <ul className="videosConts2">
                        <li>
                            <div className="videoWrap">
                                <iframe src="test" frameborder="0" title="videos"></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li>
                            <div className="videoWrap">
                                <iframe src="test" frameborder="0" title="videos"></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li>
                            <div className="videoWrap">
                                <iframe src="test" frameborder="0" title="videos"></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li>
                            <div className="videoWrap">
                                <iframe src="test" frameborder="0" title="videos"></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                    </ul>
                </main>
            </div>
        </section>
    )
}
export default Youtube;