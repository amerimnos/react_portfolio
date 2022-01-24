import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setYoutube } from '../../redux/actions';


function MainConts4() {

    const [iframeUrl, setIframeUrl] = useState('');
    const [isPop, setIsPop] = useState('');

    const dispatch = useDispatch();
    const data = useSelector(state => state.youtubeReducer.youtube)
    const fetchYoutube = async () => {
        const response = await axios
            .get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDYryAlh_1CQbDxO0qTjpOkUrOnX9m12lY&playlistId=PLZ1bji2Kya5N0QGDU9TL2_L7mrKoDJE7d&maxResults=12')
            .catch(err => console.error(err));
        dispatch(setYoutube(response.data.items))
    }

    useEffect(
        () => {
            fetchYoutube();
        }, []
    )

    return (
        <section className="mainConts4">
            <div className="inner">
                <h1>Some of our creative videos</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis architecto amet ullam!</p>
                <ul className="conts">

                    {
                        data.map(
                            (el, index) => {
                                if (index < 2) {
                                    return (
                                        <li className="item" key={index} onClick={
                                            () => {
                                                setIsPop('on');
                                                setIframeUrl(`https://www.youtube.com/embed/${data[index].snippet.resourceId.videoId}`)
                                            }}>
                                            <div className="imgWrap">
                                                <img src={el.snippet.thumbnails.standard.url} alt="lorem" />
                                            </div>
                                            <div className='tit'>
                                                <h2>{el.snippet.title}</h2>
                                                <span>_VID DESIGN</span>
                                            </div>
                                            <div className="btn">FULL Case Study
                                                <span className="arrow"></span>
                                            </div>
                                        </li>
                                    )
                                }
                            }
                        )

                    }

                </ul>
                <div className="moreBtn">
                    SEE MORE WORKS
                    <span className="arrow"></span>
                </div>
            </div>

            <Pop></Pop>
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

export default MainConts4;