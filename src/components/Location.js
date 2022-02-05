import { useEffect, useRef, useState } from "react";

function Location() {

    //위도, 경도 파악하는 방법 : https://apis.map.kakao.com/web/sample/addMapClickEvent/

    const url = process.env.PUBLIC_URL;
    const { kakao } = window;
    let mapElem = useRef(null);
    let commonMapBtn = useRef(null);
    let skynMapBtn = useRef(null);
    let trafficMapBtn = useRef(null);
    let line = useRef(null);
    let conts = useRef(null);
    let rightItem1 = useRef(null);
    let rightItem2 = useRef(null);
    let rightItem3 = useRef(null);
    let rightItem4 = useRef(null);
    let [map, setKakaoMap] = useState(null);

    useEffect(() => {


        conts.current.classList.add('on');
        rightItem1.current.classList.add('on');

        // 마커 트랙킹 기능 : https://apis.map.kakao.com/web/sample/markerTracker
        function TooltipMarker(position, titText, constText, bg) {
            this.position = position;
            this.clickable = true;

            let node = this.node = document.createElement('div');
            node.className = 'node';

            let imgElem = document.createElement('span');
            imgElem.className = `img ${bg}`;
            node.appendChild(imgElem);

            let titleElem = document.createElement('h2');
            titleElem.className = 'tit';
            titleElem.appendChild(document.createTextNode(titText));
            node.appendChild(titleElem);

            let constElem = document.createElement('p');
            constElem.className = 'const';
            constElem.appendChild(document.createTextNode(constText));
            node.appendChild(constElem);

            let moreBtn = document.createElement('span');
            moreBtn.className = 'moreBtn';
            node.appendChild(moreBtn);

            node.addEventListener("click", e => {
                conts.current.classList.add('on');
                if (e.currentTarget.children[1].textContent === '본사') {
                    rightItem1.current.classList.add('on');
                    rightItem2.current.classList.remove('on');
                    rightItem3.current.classList.remove('on');
                    rightItem4.current.classList.remove('on');
                }
                if (e.currentTarget.children[1].textContent === '지점1') {
                    rightItem1.current.classList.remove('on');
                    rightItem2.current.classList.add('on');
                    rightItem3.current.classList.remove('on');
                    rightItem4.current.classList.remove('on');
                }
                if (e.currentTarget.children[1].textContent === '지점2') {
                    rightItem1.current.classList.remove('on');
                    rightItem2.current.classList.remove('on');
                    rightItem3.current.classList.add('on');
                    rightItem4.current.classList.remove('on');
                }
                if (e.currentTarget.children[1].textContent === '지점3') {
                    rightItem1.current.classList.remove('on');
                    rightItem2.current.classList.remove('on');
                    rightItem3.current.classList.remove('on');
                    rightItem4.current.classList.add('on');
                }
            })

        }

        TooltipMarker.prototype = new kakao.maps.AbstractOverlay();

        TooltipMarker.prototype.onAdd = function () {
            let panel = this.getPanels().overlayLayer;
            panel.appendChild(this.node);
        };
        TooltipMarker.prototype.onRemove = function () {
            this.node.parentNode.removeChild(this.node);
        };
        TooltipMarker.prototype.draw = function () {

            let projection = this.getProjection();
            let point = projection.pointFromCoords(this.position);
            let width = this.node.offsetWidth;
            let height = this.node.offsetHeight;
            this.node.style.left = (point.x - width / 2) + "px";
            this.node.style.top = (point.y - height / 2) + "px";
        };
        TooltipMarker.prototype.getPosition = function () {
            return this.position;
        };

        function MarkerTracker(map, target, bg) {
            // 클리핑을 위한 outcode
            let OUTCODE = {
                INSIDE: 0, // 0b0000
                TOP: 8, //0b1000
                RIGHT: 2, // 0b0010
                BOTTOM: 4, // 0b0100
                LEFT: 1 // 0b0001
            };

            // viewport 영역을 구하기 위한 buffer값
            // target의 크기가 150x150 이므로 
            // 여기서는 지도 bounds에서 상하좌우 30px의 여분을 가진 bounds를 구하기 위해 사용합니다.
            let BOUNDS_BUFFER = 50;

            // 클리핑 알고리즘으로 tracker의 좌표를 구하기 위한 buffer값
            // 지도 bounds를 기준으로 상하좌우 buffer값 만큼 축소한 내부 사각형을 구하게 됩니다.
            // 그리고 그 사각형으로 target위치와 지도 중심 사이의 선을 클리핑 합니다.
            // 여기서는 tracker의 크기를 고려하여 40px로 잡습니다.
            let CLIP_BUFFER = 55;

            // trakcer 엘리먼트
            let tracker = document.createElement('div');
            tracker.className = 'tracker';

            // 내부 아이콘
            let icon = document.createElement('div');
            icon.className = `icon ${bg}`;

            // 외부에 있는 target의 위치에 따라 회전하는 말풍선 모양의 엘리먼트
            let balloon = document.createElement('div');
            balloon.className = 'balloon';

            tracker.appendChild(balloon);
            tracker.appendChild(icon);

            map.getNode().appendChild(tracker);

            // traker를 클릭하면 target의 위치를 지도 중심으로 지정합니다.
            tracker.onclick = function () {
                map.setCenter(target.getPosition());
                setVisible(false);
            };

            // target의 위치를 추적하는 함수
            function tracking() {
                let proj = map.getProjection();

                // 지도의 영역을 구합니다.
                let bounds = map.getBounds();

                // 지도의 영역을 기준으로 확장된 영역을 구합니다.
                let extBounds = extendBounds(bounds, proj);

                // target이 확장된 영역에 속하는지 판단하고
                if (extBounds.contain(target.getPosition())) {
                    // 속하면 tracker를 숨깁니다.
                    setVisible(false);
                } else {
                    // target이 영역 밖에 있으면 계산을 시작합니다.


                    // 지도 bounds를 기준으로 클리핑할 top, right, bottom, left를 재계산합니다.
                    //
                    //  +-------------------------+
                    //  | Map Bounds              |
                    //  |   +-----------------+   |
                    //  |   | Clipping Rect   |   |
                    //  |   |                 |   |
                    //  |   |        *       (A)  |     A
                    //  |   |                 |   |
                    //  |   |                 |   |
                    //  |   +----(B)---------(C)  |
                    //  |                         |
                    //  +-------------------------+
                    //
                    //        B
                    //
                    //                                       C
                    // * 은 지도의 중심,
                    // A, B, C가 TooltipMarker의 위치,
                    // (A), (B), (C)는 각 TooltipMarker에 대응하는 tracker입니다.
                    // 지도 중심과 각 TooltipMarker를 연결하는 선분이 있다고 가정할 때,
                    // 그 선분과 Clipping Rect와 만나는 지점의 좌표를 구해서
                    // tracker의 위치(top, left)값을 지정해주려고 합니다.
                    // tracker 자체의 크기가 있기 때문에 원래 지도 영역보다 안쪽의 가상 영역을 그려
                    // 클리핑된 지점을 tracker의 위치로 사용합니다.
                    // 실제 tracker의 position은 화면 좌표가 될 것이므로 
                    // 계산을 위해 좌표 변환 메소드를 사용하여 모두 화면 좌표로 변환시킵니다.

                    // TooltipMarker의 위치
                    let pos = proj.containerPointFromCoords(target.getPosition());

                    // 지도 중심의 위치
                    let center = proj.containerPointFromCoords(map.getCenter());

                    // 현재 보이는 지도의 영역의 남서쪽 화면 좌표
                    let sw = proj.containerPointFromCoords(bounds.getSouthWest());

                    // 현재 보이는 지도의 영역의 북동쪽 화면 좌표
                    let ne = proj.containerPointFromCoords(bounds.getNorthEast());

                    // 클리핑할 가상의 내부 영역을 만듭니다.
                    let top = ne.y + CLIP_BUFFER;
                    let right = ne.x - CLIP_BUFFER;
                    let bottom = sw.y - CLIP_BUFFER;
                    let left = sw.x + CLIP_BUFFER;

                    // 계산된 모든 좌표를 클리핑 로직에 넣어 좌표를 얻습니다.
                    let clipPosition = getClipPosition(top, right, bottom, left, center, pos);

                    // 클리핑된 좌표를 tracker의 위치로 사용합니다.
                    tracker.style.top = clipPosition.y + 'px';
                    tracker.style.left = clipPosition.x + 'px';

                    let angle = getAngle(center, pos);

                    balloon.style.cssText +=
                        'transform: rotate(' + angle + 'deg);';

                    setVisible(true);
                }
            }

            function extendBounds(bounds, proj) {
                let sw = proj.pointFromCoords(bounds.getSouthWest());
                let ne = proj.pointFromCoords(bounds.getNorthEast());

                sw.x -= BOUNDS_BUFFER;
                sw.y += BOUNDS_BUFFER;

                ne.x += BOUNDS_BUFFER;
                ne.y -= BOUNDS_BUFFER;

                return new kakao.maps.LatLngBounds(
                    proj.coordsFromPoint(sw), proj.coordsFromPoint(ne));

            }

            // Cohen–Sutherland clipping algorithm
            // https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm
            function getClipPosition(top, right, bottom, left, inner, outer) {
                function calcOutcode(x, y) {
                    let outcode = OUTCODE.INSIDE;

                    if (x < left) {
                        outcode |= OUTCODE.LEFT;
                    } else if (x > right) {
                        outcode |= OUTCODE.RIGHT;
                    }

                    if (y < top) {
                        outcode |= OUTCODE.TOP;
                    } else if (y > bottom) {
                        outcode |= OUTCODE.BOTTOM;
                    }

                    return outcode;
                }

                let ix = inner.x;
                let iy = inner.y;
                let ox = outer.x;
                let oy = outer.y;

                let code = calcOutcode(ox, oy);

                while (true) {
                    if (!code) {
                        break;
                    }

                    if (code & OUTCODE.TOP) {
                        ox = ox + (ix - ox) / (iy - oy) * (top - oy);
                        oy = top;
                    } else if (code & OUTCODE.RIGHT) {
                        oy = oy + (iy - oy) / (ix - ox) * (right - ox);
                        ox = right;
                    } else if (code & OUTCODE.BOTTOM) {
                        ox = ox + (ix - ox) / (iy - oy) * (bottom - oy);
                        oy = bottom;
                    } else if (code & OUTCODE.LEFT) {
                        oy = oy + (iy - oy) / (ix - ox) * (left - ox);
                        ox = left;
                    }

                    code = calcOutcode(ox, oy);
                }

                return { x: ox, y: oy };
            }

            function getAngle(center, target) {
                let dx = target.x - center.x;
                let dy = center.y - target.y;
                let deg = Math.atan2(dy, dx) * 180 / Math.PI;

                return ((-deg + 360) % 360 | 0) + 90;
            }

            function setVisible(visible) {
                tracker.style.display = visible ? 'block' : 'none';
            }

            function hideTracker() {
                setVisible(false);
            }

            this.run = function () {
                kakao.maps.event.addListener(map, 'zoom_start', hideTracker);
                kakao.maps.event.addListener(map, 'zoom_changed', tracking);
                kakao.maps.event.addListener(map, 'center_changed', tracking);
                tracking();
                console.log(111);
            };

            this.stop = function () {
                kakao.maps.event.removeListener(map, 'zoom_start', hideTracker);
                kakao.maps.event.removeListener(map, 'zoom_changed', tracking);
                kakao.maps.event.removeListener(map, 'center_changed', tracking);
                setVisible(false);
            };


        }

        let options = {
            center: new kakao.maps.LatLng(37.48584570712801, 126.97399429532769), //지도의 중심좌표.
            level: 7 //지도의 레벨(확대, 축소 정도)
        };
        let map = new kakao.maps.Map(mapElem.current, options); //지도 생성 및 객체 리턴
        setKakaoMap(map);


        // 본사
        let dkpos1 = new kakao.maps.LatLng(37.48584570712801, 126.97399429532769);
        // 지점1
        let dkpos2 = new kakao.maps.LatLng(37.50104266305181, 126.70581904247202);
        // 지점2
        let dkpos3 = new kakao.maps.LatLng(35.064862656096444, 128.98195483953694);
        // 지점3
        let dkpos4 = new kakao.maps.LatLng(34.88881378104699, 128.69297277369634);

        // 툴팁을 노출하는 마커를 생성합니다.
        let marker1 = new TooltipMarker(dkpos1, '본사', 'Ut enim ad minim veniam, commodo consequat.', 'bg1');
        let marker2 = new TooltipMarker(dkpos2, '지점1', 'Excepteur sint occaecat cupidatat non proident.', 'bg2');
        let marker3 = new TooltipMarker(dkpos3, '지점2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'bg2');
        let marker4 = new TooltipMarker(dkpos4, '지점3', 'Suspendisse ultrices gravida dictum fusce ut.', 'bg2');
        marker1.setMap(map);
        marker2.setMap(map);
        marker3.setMap(map);
        marker4.setMap(map);

        // MarkerTracker를 생성합니다.
        let markerTracker1 = new MarkerTracker(map, marker1, 'trackerBg1');
        let markerTracker2 = new MarkerTracker(map, marker2, 'trackerBg2');
        let markerTracker3 = new MarkerTracker(map, marker3, 'trackerBg2');
        let markerTracker4 = new MarkerTracker(map, marker4, 'trackerBg2');

        // marker의 추적을 시작합니다.
        markerTracker1.run();
        markerTracker2.run();
        markerTracker3.run();
        markerTracker4.run();

        //왼쪽 상단 버튼 초기 설정
        commonMapBtn.current.click();

        return () => {
            markerTracker1.stop();
            markerTracker2.stop();
            markerTracker3.stop();
            markerTracker4.stop();
        }
    }, [])


    // 왼쪽 상단 버튼 기능
    function setMapType(e, maptype) {

        //타겟 요소의 left 좌표 구함.
        let elLeft = e.target.getBoundingClientRect().left;

        //부모의 left 좌표 구함.
        let parentLeft = e.target.closest('.mapSelectBtn').getBoundingClientRect().left;

        //heightlight 요소의 위치 구함.
        let moveLeft = elLeft - parentLeft;

        //타겟 요소의 넓이 구함.
        let elWidth = e.target.getBoundingClientRect().width;
        let elHeight = e.target.getBoundingClientRect().height;

        //heightlight 요소에 타겟요소 얻은 값 대입.
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
            conts.current.style.backgroundColor = `rgba(255, 255, 255, 0.48)`;
            roadmapControl.className = 'on';
            skyviewControl.className = '';
            trafficControl.className = '';
        } else if (maptype === 'skyview') {
            map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            conts.current.style.backgroundColor = '#3a495691';
            skyviewControl.className = 'on';
            roadmapControl.className = '';
            trafficControl.className = '';
        } else if (maptype === 'trafficview') {
            map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            conts.current.style.backgroundColor = `rgba(255, 255, 255, 0.48)`;
            skyviewControl.className = '';
            roadmapControl.className = '';
            trafficControl.className = 'on';
        }
    }

    return (
        <section className="locationConts">

            <div ref={mapElem} id="map"></div>

            <div className="mapSelectBtn">
                <span ref={line} className="highLight"></span>
                <button className="on" ref={commonMapBtn} type="button" onClick={e => { setMapType(e, 'roadmap') }}>지도</button>
                <button ref={skynMapBtn} type="button" onClick={e => { setMapType(e, 'skyview') }}>스카이뷰</button>
                <button ref={trafficMapBtn} type="button" onClick={e => { setMapType(e, 'trafficview') }}>교통상황</button>
            </div>

            <article ref={conts} className="conts">
                <button onClick={e => { contsOnOff(e); }} className="contsBtn"></button>
                <div ref={rightItem1} className="item">
                    <ul className="topConts">
                        <li className="img">
                            <img src={`${url}/img/location01.jpg`} alt="company landscape" />
                        </li>
                        <li className="num">10</li>
                        <li className="txt">The number of employees</li>
                        <li className="line"></li>
                        <li className="num">2</li>
                        <li className="txt">The number of contract workers</li>
                    </ul>
                    <div className="tit">TOP USERS AROUND</div>
                    <ul className="nameList">
                        <li className="elem">
                            <h2>Ev Williams</h2>
                            <span>Broadway</span>
                        </li>
                        <li className="elem">
                            <h2>Carl Ikhan</h2>
                            <span>Empire State</span>
                        </li>
                        <li className="elem">
                            <h2>Biz Stone</h2>
                            <span>Times Square</span>
                        </li>
                        <li className="elem">
                            <h2>Peter Thiel</h2>
                            <span>Plaza Hotel</span>
                        </li>
                    </ul>
                </div>
                <div ref={rightItem2} className="item">
                    <ul className="topConts">
                        <li className="img">
                            <img src={`${url}/img/location02.jpg`} alt="company landscape2" />
                        </li>
                        <li className="num">15</li>
                        <li className="txt">The number of employees</li>
                        <li className="line"></li>
                        <li className="num">7</li>
                        <li className="txt">The number of contract workers</li>
                    </ul>
                    <div className="tit">TOP USERS AROUND</div>
                    <ul className="nameList">
                        <li className="elem">
                            <h2>Hong Gil-Dong</h2>
                            <span>Seoul</span>
                        </li>
                        <li className="elem">
                            <h2>Yang Gi-Tak</h2>
                            <span>In-Cheon</span>
                        </li>
                        <li className="elem">
                            <h2>Ga Na Da</h2>
                            <span>Won Ju</span>
                        </li>
                        <li className="elem">
                            <h2>Peter Thiel</h2>
                            <span>Plaza Hotel</span>
                        </li>
                    </ul>
                </div>
                <div ref={rightItem3} className="item">
                    <ul className="topConts">
                        <li className="img">
                            <img src={`${url}/img/location03.jpg`} alt="company landscape2" />
                        </li>
                        <li className="num">37</li>
                        <li className="txt">The number of employees</li>
                        <li className="line"></li>
                        <li className="num">2</li>
                        <li className="txt">The number of contract workers</li>
                    </ul>
                    <div className="tit">TOP USERS AROUND</div>
                    <ul className="nameList">
                        <li className="elem">
                            <h2>Helen</h2>
                            <span>USA</span>
                        </li>
                        <li className="elem">
                            <h2>Issabel</h2>
                            <span>EU</span>
                        </li>
                        <li className="elem">
                            <h2>Sophia </h2>
                            <span>Canada</span>
                        </li>
                        <li className="elem">
                            <h2>Martha</h2>
                            <span>Japan</span>
                        </li>
                    </ul>
                </div>
                <div ref={rightItem4} className="item">
                    <ul className="topConts">
                        <li className="img">
                            <img src={`${url}/img/location04.png`} alt="company landscape4" />
                        </li>
                        <li className="num">77</li>
                        <li className="txt">The number of employees</li>
                        <li className="line"></li>
                        <li className="num">3</li>
                        <li className="txt">The number of contract workers</li>
                    </ul>
                    <div className="tit">TOP USERS AROUND</div>
                    <ul className="nameList">
                        <li className="elem">
                            <h2>Adam</h2>
                            <span>Africa</span>
                        </li>
                        <li className="elem">
                            <h2>Ecllipse</h2>
                            <span>Japan</span>
                        </li>
                        <li className="elem">
                            <h2>Sophia</h2>
                            <span>Korea</span>
                        </li>
                        <li className="elem">
                            <h2>Martha</h2>
                            <span>Japan</span>
                        </li>
                    </ul>
                </div>

            </article>

        </section>
    )

    function contsOnOff(e) {
        e.target.classList.toggle('on');
        e.target.closest('.conts').classList.toggle('on');
    }

}
export default Location;