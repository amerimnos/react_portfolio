import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

function Youtube() {

    const [youtubeDate, setYoutubeDate] = useState([]);
    const [youtubeDate2, setYoutubeDate2] = useState([]);
    const [iframeUrl, setIframeUrl] = useState('');
    const [isPop, setIsPop] = useState('');

    const yourtubeData = useSelector(state => state.youtubeReducer.youtube);

    const url2 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDYryAlh_1CQbDxO0qTjpOkUrOnX9m12lY&playlistId=PLZ1bji2Kya5NAWrSjX0zKEI_DdF3ndZr3&maxResults=12';
    const mode = localStorage.getItem('mode');

    let youtubeConts = useRef(null);
    let modeBtn = useRef(null);
    let modeText = useRef(null);
    let category = useRef(null);
    let loadingWrap = useRef(null);
    let videosConts2 = useRef(null);


    function handleCheck() {
        modeBtn.current.classList.toggle('dark');
        localStorage.setItem('mode', 'dark');
        youtubeConts.current.classList.add('dark');
        modeText.current.innerText = 'Dark Mode';

        if (!modeBtn.current.classList.contains('dark')) {
            localStorage.removeItem('mode');
            youtubeConts.current.classList.remove('dark');
            modeText.current.innerText = 'Day Mode';
        }
    }

    useEffect(() => {
        loadingWrap.current.classList.add('on');
        videosConts2.current.classList.remove('on');

        if (mode === 'dark') {
            modeBtn.current.classList.add('dark');
            modeText.current.innerText = 'Dark Mode';

            //dark 모드로 변경시 모든 요소에 transition을 걸었기 때문에 
            //처음 이 페이지 들어 올때 0.8간 화이트 모드에서 다크 모드로 변환시 트렌지션이 발생하여 보기 이상함.
            //따라서, 처음 이 페이지 들어 올때 다크모드로 볼 수 있도록 fast 클래스를 추가해서 css에서 인지할 수 있하고
            //인지할 수 있는 시간(0.1초)이 끝나면 바로 제거함.
            youtubeConts.current.className = 'youtubeConts dark fast';
            setTimeout(() => {
                youtubeConts.current.className = 'youtubeConts dark';
            }, 100);
        }

        setTimeout(() => {
            loadingWrap.current.classList.remove('on');
            setYoutubeDate(yourtubeData);
            videosConts2.current.classList.add('on');
        }, 1000);


        axios
            .get(url2)
            .then(
                json => {
                    setYoutubeDate2(json.data.items);
                }
            )
    }, []);

    // 랜더링 후 실행 되는 꼼수
    /* setTimeout(() => {
        console.log('4.2 last!');
        setMainContsUrl(youtubeDate[0].snippet.thumbnails.standard.url);
        setMainContstit(youtubeDate[0].snippet.title);
    }, 0); */

    function handelUrl(e, playList) {
        loadingWrap.current.classList.add('on');
        videosConts2.current.classList.remove('on');

        let lists = category.current.children;
        for (const iterator of lists) {
            iterator.classList.remove('on');
        }
        e.target.classList.add('on');

        let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDYryAlh_1CQbDxO0qTjpOkUrOnX9m12lY&playlistId=${playList}&maxResults=12`;
        axios
            .get(url)
            .then(
                json => {
                    videosConts2.current.classList.add('on');
                    setYoutubeDate(json.data.items);
                }
            ).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    alert('점검중 입니다. 다른 카테고리를 이용해주세요.');
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        setTimeout(() => {
            loadingWrap.current.classList.remove('on');

        }, 1000);
    }

    return (
        <section ref={youtubeConts} className="youtubeConts">

            {/* {
                (() => {
                    console.log(1);
                })()
            } */}

            <div className="inner">
                <aside>
                    <h1>Viedo board</h1>
                    {/* <ul className="menu">
                        <li className="tit">MENU</li>
                        <li className="item">
                            <span className="material-icons-outlined">home</span>
                            Discover
                        </li>
                        <li className="item">
                            <span className="material-icons-outlined">trending_up</span>
                            Trending
                        </li>
                        <li className="item">
                            <span className="material-icons-outlined">bookmark</span>
                            Playlist
                        </li>
                    </ul> */}
                    <ul ref={category} className="category">
                        <li className="tit">CATEGORY</li>
                        <li className="item" onClick={e => { handelUrl(e, 'PLZ1bji2Kya5Nq-8cthrUIVyK2MsqE42K9'); }}>
                            <span className="material-icons-outlined">pets</span>
                            Animals
                        </li>
                        <li className="item" onClick={e => { handelUrl(e, 'PLZ1bji2Kya5N0QGDU9TL2_L7mrKoDJE7d'); }}>
                            <span className="material-icons-outlined">park</span>
                            Nature
                        </li>
                        <li className="item" onClick={e => { handelUrl(e, 'PLZ1bji2Kya5PE0mfTGlIULHFyl24Xcnt_'); }}>
                            <span className="material-icons-outlined">library_music</span>
                            Music
                        </li>
                    </ul>
                </aside>
                <main>
                    <div className="topConts">
                        <label htmlFor="youtubeSearch">
                            Youtube Search button

                            {/* 검색 기능 구현 예정 : https://thisisspear.tistory.com/40 */}
                            <input onClick={() => { alert('get ready') }} type="text" name="youtubeSearch" id="youtubeSearch" placeholder="Search" />
                            <input type="button" value="youtube search button" />
                        </label>
                        <div className="theme">
                            {/* <input ref={modeBtn} type="modeBtn" name="" id="themeCheck" onChange={()=>{handleCheck();}}/>
                            <label htmlFor="themeCheck" tabIndex="0" onKeyDown={
                                e => { if (e.key === "Enter") e.target.click(); }
                            }></label> */}
                            <button ref={modeBtn} type="button" aria-label="dark mode button" onClick={() => { handleCheck(); }}></button>
                            <span ref={modeText}>Day Mode</span>
                        </div>
                    </div>
                    <h2 className="constTit">Discover</h2>
                    <ul className="videosConts1">

                        {
                            youtubeDate2.map((el, index) => {

                                return (
                                    <li key={index} onClick={
                                        () => {
                                            setIsPop('on');
                                            setIframeUrl(`https://www.youtube.com/embed/${youtubeDate2[index].snippet.resourceId.videoId}`)
                                        }
                                    } className="vidItem" data-index={index}>
                                        <img src={el.snippet.thumbnails.standard.url} alt="" />
                                        <div className="tit">{el.snippet.title}</div>
                                        {/* <div className="conts">
                                            <div className="ellipsis">{el.snippet.description}</div>
                                        </div> */}
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <h2 className="constTit2">Ours Playlist</h2>
                    <ul ref={videosConts2} className="videosConts2">

                        {
                            youtubeDate.map((el, index) => {
                                // let tit = el.snippet.title
                                // let titLen = el.snippet.title.length;
                                // if(titLen > 40) tit = tit.substr(0,35)+'...';

                                return (

                                    <li
                                        key={index}
                                        onClick={
                                            e => {
                                                setIsPop('on');
                                                setIframeUrl(`https://www.youtube.com/embed/${youtubeDate[index].snippet.resourceId.videoId}`)
                                            }
                                        } className="vidItem">

                                        <div className="imgWrap">
                                            <img src={el.snippet.thumbnails.standard.url} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <div className="txt">{el.snippet.title}</div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </main>
            </div>

            <Pop></Pop>

            <div ref={loadingWrap} className="loadingWrap">
                <div className="loading"></div>
            </div>

        </section>
    )

    function Pop() {

        return (
            <div id="popup" className={isPop}>
                <div className="iframeWrap">
                    <iframe src={iframeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div onClick={
                    () => {
                        setIsPop('off')
                    }
                } className="close">Close</div>
            </div>
        )
    }


}
export default Youtube;