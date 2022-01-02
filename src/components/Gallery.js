function Gallery() {

    const url = process.env.PUBLIC_URL;

    return (
        <>
            <div className="galleryConts1">
                <div className="outLine"></div>
                <ul className="inner">
                    <li className="item1">
                        <div className="gallerySwiper">
                            <div className="slide">
                                <img src={url + "/img/gallery_pic01.jpg"} alt="pic1" />
                            </div>
                            {/* <img src={url+"/img/gallery_pic02.jpg"} alt="pic2" />
                            <img src={url+"/img/gallery_pic03.jpg"} alt="pic3" /> */}
                        </div>
                        <h2>THE CLIENT GOALS //</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni, corporis labore ab vero fugit delectus, dolor veniam architecto veritatis ducimus, quisquam molestiae aliquid laboriosam nihil. non labore doloribus, illum nobis enim possimus.</p>
                        <div className="viewBtn">
                            VIEW DETAILS <span class="material-icons-outlined">east</span>
                        </div>
                    </li>
                    <li className="itemWrap">
                        <div className="item2">
                            <h1><em>Stylish</em> Content Curators <em>& Honest</em> Storytellers</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ea hic itaque velit libero porro harum nam vitae, illo at numquam dolore expedita sunt vel minima nemo optio! Nostrum perspiciatis tempore cupiditate nihil qui, rem atque quam voluptate optio possimus.</p>
                        </div>

                        <ul className="item3">
                            <li className="imgWrap">
                                <img src={url + "/img/gallery_pic04.jpg"} alt="pic4" />
                            </li>
                            <li className="imgTxt">
                                <div>2021 of the Year // <em>Lejardin</em></div>
                                <span class="material-icons-outlined">east</span>
                            </li>
                        </ul>
                    </li>

                </ul>
                <div className="outLine"></div>
            </div>
            <div className="galleryConts2">
                <ul className="inner">
                    <li className="left">
                        <div className="tit">
                            <h1>MODERN</h1>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas?
                                <div className="inputWrap">
                                    <input type="text" placeholder="Search..." />
                                    <input type="button" />
                                </div>
                            </div>
                        </div>
                        <ul className="masonry">
                            <li>
                                <div className="imgWrar">
                                    <img src="" alt="" />
                                </div>
                                <div className="tit">windows 11</div>
                                <p className="profile">Miscrosoft</p>
                            </li>
                            <li>
                                <div className="imgWrar">
                                    <img src="" alt="" />
                                </div>
                                <div className="tit">windows 11</div>
                                <p className="profile">Miscrosoft</p>
                            </li>
                        </ul>
                    </li>
                    <li className="line">
                        <img src={url + "/img/line.svg"} alt="" />
                    </li>
                    <li className="right">
                        <h1>MODERN</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas?</p>
                        <div className="inputWrap">
                            <input type="text" placeholder="Search..." />
                            <input type="button" />
                        </div>
                        <ul className="masonry">
                            <li>
                                <div className="imgWrar">
                                    <img src="" alt="" />
                                </div>
                                <div className="tit">windows 11</div>
                                <p className="profile">Miscrosoft</p>
                            </li>
                            <li>
                                <div className="imgWrar">
                                    <img src="" alt="" />
                                </div>
                                <div className="tit">windows 11</div>
                                <p className="profile">Miscrosoft</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Gallery;