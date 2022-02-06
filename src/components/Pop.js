import { useRef } from "react";
import { useEffect } from "react";

function Pop() {

    const pop = useRef(null);
    const popupCheck = useRef(null);

    useEffect(() => {
        if (document.cookie !== 'pop=ondDay') {
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
                    <p> React.js를 활용한 웹 포트폴리오 사이트에 오신 것을 환영합니다!</p>

                    <p>
                        홈페이지의 구성과 기능에 대한 자세한 안내 페이지를 만들었습니다. 아래 버튼을 클릭하신 후 'ctrl + 0'을 눌러 100% 화면으로 보시기 바랍니다.
                        <a target="_blank" rel="noreferrer" className="btn" href="https://www.figma.com/file/bi26XF7a9UVRbkESgPIfIK/React%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%BD%94%EB%94%A9-%EA%B0%80%EC%9D%B4%EB%93%9C?node-id=45%3A20" title="React.js를 활용한 웹 포트폴리오 사이트 안내 페이지 바로가기">바로가기
                            <span class="material-icons-outlined">
                                navigate_next
                            </span>
                        </a>
                    </p>
                    <p>
                        아울러, Javascript를 활용한 웹 포트폴리오도 있사오니 참고 부탁드립니다.
                        <a target="_blank" rel="noreferrer" className="btn" href="https://amerimnos.github.io/Portfolio/" title="Javascript를 활용한 웹 포트폴리오 바로가기">바로가기
                            <span class="material-icons-outlined">
                                navigate_next
                            </span>
                        </a>
                    </p>
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
        </div>
    )
}

export default Pop;