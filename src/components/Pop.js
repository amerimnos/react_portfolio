import { useRef } from "react";
import { useEffect } from "react";
import { ReactComponent as Youtube } from './Youtube.svg';

function Pop() {

    const pop = useRef(null);
    const popupCheck = useRef(null);

    useEffect(() => {
        if (!document.cookie.includes('pop=ondDay')) {
            pop.current.classList.add('on');
        }
    }, []);

    function closePop() {
        if (popupCheck.current.checked) {
            document.cookie = "pop=ondDay; path=/; max-age=86400";
        } else {
            document.cookie = "pop=ondDay; path=/; max-age=-1";
        }
        pop.current.classList.remove('on');
        pop.current.classList.add('off');
    }

    return (
        <div ref={pop} className="mainPopWrap">
            <div className="mainPop">
                <div className="conts">
                    <p className="mb20">
                        <strong>React.js를 활용한 웹 포트폴리오 사이트에 오신 것을 환영합니다!</strong>
                        Chrome, Whale, Microsoft Edge 브라우저에 최적화 되어있습니다.
                    </p>
                    <p className="mb5">
                        홈페이지의 구성과 기능에 대한 자세한 안내 페이지는 아래 코딩가이드 버튼을 클릭하신 후 '<b>ctrl + 0</b>'을 눌러 100% 화면으로 보시기 바랍니다.
                    </p>
                    <div className="btnConts">
                        <a target="_blank" rel="noreferrer" className="btn" href="https://www.figma.com/file/bi26XF7a9UVRbkESgPIfIK" title="React.js를 활용한 웹 포트폴리오 사이트 안내 페이지 바로가기">코딩 가이드
                            <span className="material-icons-outlined">
                                navigate_next
                            </span>
                        </a>
                    </div>
                    <p className="mb5">
                        해당 사이트의 깃허브도 공개하였사오니, 제가 작성한 코드도 확인 가능하십니다.
                    </p>
                    <div className="btnConts">
                        <a className="btn" href="https://github.com/amerimnos/react_portfolio" target="_black">
                            바로가기
                            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="mb5">
                        아울러, 해당 홈페이지를 처음부터 끝까지 제작한 기록을 유튜브에 남겨 두었사오니 참고 부탁드립니다.
                    </p>
                    <div className="btnConts">
                        <a target="_blank" rel="noreferrer" className="btn" href="https://youtube.com/playlist?list=PLZ1bji2Kya5O-zguxeDkXCyu0lmlliVij" title="React.js를 활용한 웹 포트폴리오 제작기 바로가기">바로가기
                            <Youtube />
                        </a>
                    </div>
                </div>
                <div className="btnWrap">
                    <label htmlFor="popupCheck">하루 동안 안 보기
                        <input ref={popupCheck} type="checkbox" id="popupCheck" tabIndex="0" onKeyDown={
                            e => { if (e.key === "Enter") e.target.click(); }
                        } />
                    </label>

                    <button onClick={closePop} className="close">닫기</button>
                </div>
            </div>
        </div >
    )
}

export default Pop;