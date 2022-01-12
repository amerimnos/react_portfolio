import axios from "axios";
import { useEffect, useState } from "react";

function Youtube() {

    console.log(0);
    const [youtubeDate, setYoutubeDate] = useState([]);
    const [youtubeDate2, setYoutubeDate2] = useState([]);
    const [youtubeIndex, setYoutubeIndex] = useState(0);
    const [iframeUrl, setIframeUrl] = useState('');
    const [isPop, setIsPop] = useState('');
    const [mainContsUrl, setMainContsUrl] = useState('');
    const [mainContstit, setMainContstit] = useState('');
    const [mainContstit2, setMainContstit2] = useState('');


    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDYryAlh_1CQbDxO0qTjpOkUrOnX9m12lY&playlistId=PLZ1bji2Kya5N0QGDU9TL2_L7mrKoDJE7d&maxResults=12';
    const url2 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDYryAlh_1CQbDxO0qTjpOkUrOnX9m12lY&playlistId=PLZ1bji2Kya5NAWrSjX0zKEI_DdF3ndZr3&maxResults=12';

    useEffect(() => {
        console.log(4);

        axios
            .get(url)
            .then(
                json => {
                    //console.log(json.data.items);
                    setYoutubeDate(json.data.items);
                }
            )

        axios
            .get(url2)
            .then(
                json => {
                    console.log(json.data.items);
                    setYoutubeDate2(json.data.items);
                }
            )


        console.log('4.1');
    }, []);


    /* setTimeout(() => {
        console.log('4.2 last!');
        setMainContsUrl(youtubeDate[0].snippet.thumbnails.standard.url);
        setMainContstit(youtubeDate[0].snippet.title);
    }, 0); */

    youtubeDate.map((el, index) => {

    })

    console.log(0.1);

    return (
        <section className="youtubeConts">

            {
                (() => {
                    console.log(1);
                })()
            }

            <div className="inner">
                <aside>
                    <h1>Viedo board</h1>
                    <ul className="menu">
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
                    </ul>
                    <ul className="category">
                        <li className="tit">CATEGORY</li>
                        <li className="item">
                            <span className="material-icons-outlined">live_tv</span>
                            Live Stream
                        </li>
                        <li className="item">
                            <span className="material-icons-outlined">park</span>
                            Nature
                        </li>
                        <li className="item">
                            <span className="material-icons-outlined">library_music</span>
                            Music
                        </li>
                    </ul>
                </aside>
                <main>
                    <div className="topConts">
                        <label htmlFor="youtubeSearch">
                            Youtube Search button
                            <input onClick={() => { alert('get ready') }} type="text" name="youtubeSearch" id="youtubeSearch" placeholder="Search" />
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

                        {
                            youtubeDate2.map((el, index) => {

                                return (
                                    <li key={index} onClick={
                                        () => {
                                            setYoutubeIndex(index);
                                            setIsPop('on');
                                            setIframeUrl(`https://www.youtube.com/embed/${youtubeDate2[youtubeIndex].snippet.resourceId.videoId}`)
                                        }
                                    } className="item">
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
                    <ul className="videosConts2">

                        {
                            youtubeDate.map((el, index) => {
                                // let tit = el.snippet.title
                                // let titLen = el.snippet.title.length;
                                // if(titLen > 40) tit = tit.substr(0,35)+'...';

                                return (

                                    <li key={index} onClick={
                                        () => {
                                            setYoutubeIndex(index);
                                            setIsPop('on');
                                            setIframeUrl(`https://www.youtube.com/embed/${youtubeDate[youtubeIndex].snippet.resourceId.videoId}`)
                                        }
                                    } className="item">

                                        {
                                            (() => {
                                                console.log('1.5 map ');
                                            })()
                                        }
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

                        {
                            (() => {
                                console.log(1.6);
                            })()
                        }

                    </ul>
                </main>
            </div>

            <Pop></Pop>

            {
                (() => {
                    console.log(2.1);
                })()
            }

        </section>
    )

    function Pop() {

        console.log(3);

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