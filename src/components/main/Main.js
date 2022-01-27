import { useEffect, useRef, useState } from 'react';
import MainConts1 from './MainConts1';
import MainConts2 from './MainConts2';
import MainConts3 from './MainConts3';
import MainConts4 from './MainConts4';
import MainConts5 from './MainConts5';
import MainConts6 from './MainConts6';

function Main() {

    let scrollBtn = useRef(null)

    const [pos1, SetPos1] = useState(0);
    const [pos2, SetPos2] = useState(0);
    const [pos3, SetPos3] = useState(0);
    const [pos4, SetPos4] = useState(0);
    const [pos5, SetPos5] = useState(0);
    const [pos6, SetPos6] = useState(0);

    const posArray = [pos1, pos2, pos3, pos4, pos5, pos6];
    console.log(posArray, 'posArray');
    function scrollHandler(e, index) {
        window.scrollTo({
            top: posArray[index],
            behavior: 'smooth',
        })

        scrollBtn.current.querySelectorAll('button').forEach(element => {
            element.classList.remove('on');
        });
        e.target.classList.add('on');
    }

    function buttonHandler() {
        let btns = scrollBtn.current.querySelectorAll('button');

        btns.forEach((element, index) => {
            element.classList.remove('on');
            if (window.pageYOffset >= posArray[index] && window.pageYOffset < posArray[index] + document.documentElement.clientHeight) {
                btns[index].classList.add('on');
            }
        });
    }

    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                buttonHandler();
            })
            return (
                () => {
                    window.addEventListener('scroll', () => {
                        buttonHandler();
                    }
                    )
                }
            )
        }
    )

    return (
        <>
            <MainConts1 SetPos1={SetPos1} />
            <MainConts2 SetPos2={SetPos2} />
            <MainConts3 SetPos3={SetPos3} />
            <MainConts4 SetPos4={SetPos4} />
            <MainConts5 SetPos5={SetPos5} />
            <MainConts6 SetPos6={SetPos6} />
            <div ref={scrollBtn} className="scrollBtn">
                <button onClick={(e) => { scrollHandler(e, 0) }}></button>
                <button onClick={(e) => { scrollHandler(e, 1) }}></button>
                <button onClick={(e) => { scrollHandler(e, 2) }}></button>
                <button onClick={(e) => { scrollHandler(e, 3) }}></button>
                <button onClick={(e) => { scrollHandler(e, 4) }}></button>
                <button onClick={(e) => { scrollHandler(e, 5) }}></button>
            </div>
        </>
    )
}
export default Main;