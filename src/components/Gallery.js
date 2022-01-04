import axios from "axios";
import Masonry from 'react-masonry-component';
import { useEffect, useRef, useState } from "react";


function Gallery() {

    const [item1, setItem1] = useState([]);
    const [item2, setItem2] = useState([]);
    const [popOpen, setPopOpen] = useState(false);
    const [masonryResize, setMasonryResize] = useState(false);
    const [popSrc, setPopSrc] = useState(null);
    
    const galleryConts2 = useRef(null);
    const right = useRef(null);
    const left = useRef(null);
    const inputTxt1 = useRef(null);
    const inputTxt2 = useRef(null);
    const btn1 = useRef(null);
    const btn2 = useRef(null);
    const loadingElm = useRef(null);

    const url = process.env.PUBLIC_URL;
    const key = "685857eeaf8d03e0fb14b241dc08754c";
    const method = "flickr.photos.search";
    const per_page = "20";
    let tag1 = "modern";
    let tag2 = "landscape";
    let flickrUrl1 = `https://www.flickr.com/services/rest/?&method=${method}&format=json&api_key=${key}&per_page=${per_page}&tags=${tag1}&nojsoncallback=1&privacy_filter=1`;
    let flickrUrl2 = `https://www.flickr.com/services/rest/?&method=${method}&format=json&api_key=${key}&per_page=${per_page}&tags=${tag2}&nojsoncallback=1&privacy_filter=1`;

    const masonryOptions1 = {
        transitionDuration: '0.4s',
        itemSelector: '.gridItem1',
        gutter: 0,
    };
    const masonryOptions2 = {
        transitionDuration: '0.4s',
        itemSelector: '.gridItem2',
        gutter: 0,
    };

    useEffect(() => {
        getFlickr1(flickrUrl1);
        getFlickr2(flickrUrl2);
    }, [])

    
    function loadingOn() {
        loadingElm.current.classList.add("on");
    }
    function loadingOff() {
        loadingElm.current.classList.remove("on");
    }

    function getFlickr1(url) {
        
        loadingOn();
        axios.get(url).then(
            (json) => {
                loadingOff();
                console.log(json.data.photos.photo);
                setItem1(json.data.photos.photo);
            }
        );
    }

    function getFlickr2(url) {
        loadingOn();
        axios.get(url).then(
            (json) => {
                loadingOff();
                console.log(json.data.photos.photo);
                setItem2(json.data.photos.photo);
            }
        );
    }

    function mouseInRight() {
        setMasonryResize(false);
        galleryConts2.current.classList.add('dark');
        right.current.classList.add('on');
        right.current.classList.remove('off');
        left.current.classList.remove('on');
        left.current.classList.add('off');

        setTimeout(function () {
            setMasonryResize(true);
        }, 1000)

    }
    function mouseInLeft() {
        setMasonryResize(false);
        galleryConts2.current.classList.remove('dark');
        left.current.classList.add('on');
        left.current.classList.remove('off');
        right.current.classList.remove('on');
        right.current.classList.add('off');
        setTimeout(function () {
            setMasonryResize(true);
        }, 1000)
    }

    function search(e) {

        if (e.target === inputTxt1.current) {

            if (e.code === 'Enter') {
                tag1 = e.currentTarget.value;
                let flickrUrl1 = `https://www.flickr.com/services/rest/?&method=${method}&format=json&api_key=${key}&per_page=${per_page}&tags=${tag1}&nojsoncallback=1&privacy_filter=1`;
                getFlickr1(flickrUrl1);
            }
        } else if (e.target === inputTxt2.current) {

            if (e.code === 'Enter') {
                tag2 = e.currentTarget.value;
                let flickrUrl2 = `https://www.flickr.com/services/rest/?&method=${method}&format=json&api_key=${key}&per_page=${per_page}&tags=${tag2}&nojsoncallback=1&privacy_filter=1`;
                getFlickr2(flickrUrl2);
            }

        }
    }

    function searchBtn(e) {

        if (e.target === btn1.current) {

            let tag1 = inputTxt1.current.value;
            let flickrUrl1 = `https://www.flickr.com/services/rest/?&method=${method}&format=json&api_key=${key}&per_page=${per_page}&tags=${tag1}&nojsoncallback=1&privacy_filter=1`;
            getFlickr1(flickrUrl1);
        } else {

            let tag2 = inputTxt2.current.value;
            let flickrUrl2 = `https://www.flickr.com/services/rest/?&method=${method}&format=json&api_key=${key}&per_page=${per_page}&tags=${tag2}&nojsoncallback=1&privacy_filter=1`;
            getFlickr2(flickrUrl2);

        }
    }

    function popupOpen(e) {
        setPopOpen(true);
        let popSrc = e.currentTarget.firstElementChild.firstElementChild.getAttribute('src');
        popSrc = popSrc.replace('z.jpg', 'b.jpg');
        setPopSrc(popSrc);
    }

    function popClose(e) {
        setPopOpen(false);
    }

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
                            VIEW DETAILS <span className="material-icons-outlined">east</span>
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
                                <span className="material-icons-outlined">east</span>
                            </li>
                        </ul>
                    </li>

                </ul>
                <div className="outLine"></div>
            </div>
            <div ref={galleryConts2} className="galleryConts2">
                <ul className="inner">
                    <li ref={left} className="left on" onMouseEnter={mouseInLeft}>
                        <div className="tit">
                            <h1>MODERN</h1>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas.
                                <div className="inputWrap">
                                    <input ref={inputTxt1} onKeyDown={search} type="text" placeholder="Enter the tag." name="search" val="" />
                                    <input ref={btn1} onClick={searchBtn} type="button" value="Search" name="searchBtn1" />
                                </div>
                            </div>
                        </div>
                        <Masonry
                            className={'masonry'} // default ''
                            elementType={'ul'} // default 'div'
                            options={masonryOptions1} // default {}
                            disableImagesLoaded={false} // default false
                            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                            enableResizableChildren={masonryResize} //부모 가로 사이즈에 반응함.
                        >
                            {
                                item1.map((el, index) => {
                                    let photoUrl = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_z.jpg`;
                                    let buddyIcon = `http://farm66.staticflickr.com/${el.server}/buddyicons/${el.owner}.jpg`;
                                    let titLeng = el.title.length;
                                    return (
                                        <li onClick={popupOpen} className="gridItem1" key={index}>
                                            <div className="imgWrap">
                                                <img src={photoUrl} alt="" />
                                            </div>
                                            <div className="tit">
                                                <img src={buddyIcon} alt="" />
                                                {(titLeng > 20) ? el.title.slice(0, 40) + "..." : el.title}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </Masonry>
                    </li>
                    <li className="line">
                        <img src={url + "/img/line.svg"} alt="" />
                    </li>
                    <li ref={right} className="right off" onMouseEnter={mouseInRight}>
                        <div className="tit">
                            <h1>lANDSCAPE</h1>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas.
                                <div className="inputWrap">
                                    <input ref={inputTxt2} onKeyDown={search} type="text" placeholder="Enter the tag." name="search2" val="" />
                                    <input ref={btn2} onClick={searchBtn} type="button" value="Search" name="searchBtn2" />
                                </div>
                            </div>
                        </div>

                        <Masonry
                            className={'masonry'} // default ''
                            elementType={'ul'} // default 'div'
                            options={masonryOptions2} // default {}
                            disableImagesLoaded={false} // default false
                            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                            enableResizableChildren={masonryResize} //부모 가로 사이즈에 반응함.
                        >
                            {
                                item2.map((el, index) => {
                                    let photoUrl = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_z.jpg`;
                                    let buddyIcon = `http://farm66.staticflickr.com/${el.server}/buddyicons/${el.owner}.jpg`;
                                    let titLeng = el.title.length;
                                    return (
                                        <li onClick={popupOpen} className="gridItem2" key={index}>
                                            <div className="imgWrap">
                                                <img src={photoUrl} alt="" />
                                            </div>
                                            <div className="tit">
                                                <img src={buddyIcon} alt="" />
                                                {(titLeng > 20) ? el.title.slice(0, 40) + "..." : el.title}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </Masonry>

                    </li>
                </ul>
                
               <div ref={loadingElm} className="loadingWrap">
                    <div className="loading"></div>
               </div>
            
            </div>

            {popOpen ? <Pop></Pop> : null}
        </>
    )


    function Pop() {
        return (
            <aside className="galleryPop">
                <span onClick={popClose} className="close">close</span>
                <img src={popSrc} alt="img" />
            </aside>
        )
    }
}

export default Gallery;