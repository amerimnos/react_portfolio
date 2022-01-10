function Youtube() {
    return (

        <section className="youtubeConts">
            <div className="inner">
                <aside>
                    <h1>Viedo board</h1>
                    <ul className="menu">
                        <li className="tit">MENU</li>
                        <li className="item">
                            <span class="material-icons-outlined">home</span>
                            Discover
                        </li>
                        <li className="item">
                            <span class="material-icons-outlined">trending_up</span>
                            Trending
                        </li>
                        <li className="item">
                            <span class="material-icons-outlined">bookmark</span>
                            Playlist
                        </li>
                    </ul>
                    <ul className="category">
                        <li className="tit">CATEGORY</li>
                        <li className="item">
                            <span class="material-icons-outlined">live_tv</span>
                            Live Stream
                        </li>
                        <li className="item">
                            <span class="material-icons-outlined">park</span>
                            Nature
                        </li>
                        <li className="item">
                            <span class="material-icons-outlined">library_music</span>
                            Music
                        </li>
                    </ul>
                </aside>
                <main>
                    <div className="topConts">
                        <label htmlFor="youtubeSearch">
                            Youtube Search button
                            <input type="text" name="youtubeSearch" id="youtubeSearch" placeholder="Search" />
                            <input type="button" value="youtube search button" />
                        </label>
                        <div className="theme">
                            <input type="checkbox" name="" id="themeCheck" />
                            <label htmlFor="themeCheck"></label>
                            <span>Night Mode</span>
                        </div>
                    </div>
                    <h2 className="constTit">Discover</h2>
                    <ul className="videosConts1">
                        <li className="item1">
                            <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="tit">How to do Basic Jumping and how to lading safely</div>
                            <div className="conts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequuntur!</div>
                        </li>
                        <li className="item2">
                            <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="tit">How to do Basic Jumping and how to lading safely</div>
                        </li>
                    </ul>
                    <h2 className="constTit2">Most Watched</h2>
                    <ul className="videosConts2">
                        <li className="item">
                            <div className="iframeWrap">
                                <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li className="item">
                            <div className="iframeWrap">
                                <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li className="item">
                            <div className="iframeWrap">
                                <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li className="item">
                            <div className="iframeWrap">
                                <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li className="item">
                            <div className="iframeWrap">
                                <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li className="item">
                            <div className="iframeWrap">
                                <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li className="item">
                            <div className="iframeWrap">
                                <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="bottomTxt">How to do Basic Jumping and how to lading safely</div>
                        </li>
                        <li className="item">
                            <div className="iframeWrap">
                                <iframe src="https://www.youtube.com/embed/KMHgowSN-Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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