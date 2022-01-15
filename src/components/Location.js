import { useEffect, useRef, useState } from "react";

function Location() {

    //위도, 경도 파악하는 하기 : https://apis.map.kakao.com/web/sample/addMapClickEvent/

    const { kakao } = window;
    let mapElem = useRef(null);
    let commonMapBtn = useRef(null);
    let skynMapBtn = useRef(null);
    let trafficMapBtn = useRef(null);
    let line = useRef(null);

    let options = {
        center: new kakao.maps.LatLng(37.48580527265718, 126.97450311632566), //지도의 중심좌표.
        level: 4 //지도의 레벨(확대, 축소 정도)
    };
    let [map, setMap] = useState(null);

    useEffect(() => {
        let map = new kakao.maps.Map(mapElem.current, options); //지도 생성 및 객체 리턴
        setMap(map);
    }, [])

    function setMapType(e, maptype) {

        //타겟 요소의 left 좌표 구함.
        let elLeft = e.target.getBoundingClientRect().left;

        //부모의 left 좌표 구함.
        let parentLeft = e.target.closest('.mapSelectBtn').getBoundingClientRect().left;

        //line의 css상의 위치 구함.
        let moveLeft = elLeft - parentLeft;

        //타겟 요소의 넓이 구함.
        let elWidth = e.target.getBoundingClientRect().width;
        let elHeight = e.target.getBoundingClientRect().height;

        //line에 타겟요소 얻은 값 대입.
        line.current.style.left = moveLeft + 'px';
        line.current.style.width = elWidth + 'px';
        line.current.style.height = elHeight + 'px';

        map.setCenter(map.getCenter());

        const roadmapControl = commonMapBtn.current;
        const skyviewControl = skynMapBtn.current;
        const trafficControl = trafficMapBtn.current;
        if (maptype === 'roadmap') {
            map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
            map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            roadmapControl.className = 'on';
            skyviewControl.className = '';
            trafficControl.className = '';
        } else if (maptype === 'skyview') {
            map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            skyviewControl.className = 'on';
            roadmapControl.className = '';
            trafficControl.className = '';
        } else if (maptype === 'trafficview') {
            map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            skyviewControl.className = '';
            roadmapControl.className = '';
            trafficControl.className = 'on';
        }
    }

    /* 
    기능 추가 할것들.
    https://apis.map.kakao.com/web/sample/markerTracker/
    https://apis.map.kakao.com/web/sample/customOverlay2/
    https://apis.map.kakao.com/web/sample/removableCustomOverlay/
    */


    return (
        <section className="locationConts">

            <div ref={mapElem} id="map"></div>

            <div className="mapSelectBtn">
                <span ref={line} className="highLight"></span>
                <button className="on" ref={commonMapBtn} type="button" onClick={e => { setMapType(e, 'roadmap') }}>지도</button>
                <button ref={skynMapBtn} type="button" onClick={e => { setMapType(e, 'skyview') }}>스카이뷰</button>
                <button ref={trafficMapBtn} type="button" onClick={e => { setMapType(e, 'trafficview') }}>교통상황</button>
            </div>

            <article className="conts">
                <button className="contsBtn"></button>
                <div className="item">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat aliquam laudantium, similique libero delectus ad neque in officiis eius unde at temporibus cupiditate accusamus blanditiis velit dignissimos eum officia, earum consectetur? Nihil officiis aut sit excepturi voluptate obcaecati aspernatur!</p>
                </div>
            </article>

        </section>
    )
}
export default Location;