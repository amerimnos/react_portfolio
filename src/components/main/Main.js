import { useEffect, useRef, useState } from 'react';
import MainConts1 from './MainConts1';
import MainConts2 from './MainConts2';
import MainConts3 from './MainConts3';
import MainConts4 from './MainConts4';
import MainConts5 from './MainConts5';
import MainConts6 from './MainConts6';

function Main() {

    let scrollBtn = useRef(null)
    let [touchDownPos, setTouchDownPos] = useState(0);
    let [touchUpPos, setTouchUpPos] = useState(0);

    const pos0 = 0;
    const [pos1, SetPos1] = useState(0);
    const [pos2, SetPos2] = useState(0);
    const [pos3, SetPos3] = useState(0);
    const [pos4, SetPos4] = useState(0);
    const [pos5, SetPos5] = useState(0);
    const pos6 = document.querySelector('body').scrollHeight - document.documentElement.clientHeight

    const posArray = [pos0, pos1, pos2, pos3, pos4, pos5, pos6];
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

        console.log(window.pageYOffset, 'sdfsdf');
        console.log(document.querySelector('body').scrollHeight - document.documentElement.clientHeight);

        btns.forEach((element, index) => {
            element.classList.remove('on');
            if (window.pageYOffset >= posArray[index] && window.pageYOffset < posArray[index + 1]) {
                btns[index].classList.add('on');
            }
            if (window.pageYOffset >= (document.querySelector('body').scrollHeight - document.documentElement.clientHeight)) {
                btns[btns.length - 1].classList.add('on');
            }
        });
    }

    function wheelHandle(e) {
        e.preventDefault();
        let currentPos = window.pageYOffset;
        let whereWheelMove = e.deltaY;
        if (whereWheelMove < 0) {

            if (currentPos >= pos0 && currentPos < pos1) {

                window.scrollTo({
                    top: posArray[0],
                    behavior: 'smooth',
                })
            }

            if (currentPos >= pos1 && currentPos < pos2) {
                window.scrollTo({
                    top: posArray[0],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos2 && currentPos < pos3) {
                window.scrollTo({
                    top: posArray[1],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos3 && currentPos < pos4) {
                window.scrollTo({
                    top: posArray[2],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos4 && currentPos < pos5) {
                window.scrollTo({
                    top: posArray[3],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos5 && currentPos < pos6) {
                window.scrollTo({
                    top: posArray[4],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos6) {
                window.scrollTo({
                    top: posArray[5],
                    behavior: 'smooth',
                })
            }
        } else {
            if (currentPos >= pos0 && currentPos < pos1) {
                window.scrollTo({
                    top: posArray[1],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos1 && currentPos < pos2) {
                window.scrollTo({
                    top: posArray[2],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos2 && currentPos < pos3) {
                window.scrollTo({
                    top: posArray[3],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos3 && currentPos < pos4) {
                window.scrollTo({
                    top: posArray[4],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos4 && currentPos < pos5) {
                window.scrollTo({
                    top: posArray[5],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos5) {
                window.scrollTo({
                    top: posArray[6],
                    behavior: 'smooth',
                })

            }
        }
    }

    function handlePointerDown(e) {
        if (e.pointerType === 'touch') {
            setTouchDownPos(e.clientY);
        }
    }

    function handlePointerUp(e) {
        if (e.pointerType === 'touch') {
            setTouchUpPos(e.clientY);
        }
    }

    function handleTouch() {
        if ((touchDownPos - touchUpPos) > 100) { //터치 감도
            let currentPos = window.pageYOffset;

            if (currentPos >= pos0 && currentPos < pos1) {
                window.scrollTo({
                    top: posArray[1],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos1 && currentPos < pos2) {
                window.scrollTo({
                    top: posArray[2],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos2 && currentPos < pos3) {
                window.scrollTo({
                    top: posArray[3],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos3 && currentPos < pos4) {
                window.scrollTo({
                    top: posArray[4],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos4 && currentPos < pos5) {
                window.scrollTo({
                    top: posArray[5],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos5) {
                window.scrollTo({
                    top: posArray[6],
                    behavior: 'smooth',
                })

            }

        }
        if ((touchDownPos - touchUpPos) < -100) { //터치 감도
            let currentPos = window.pageYOffset;

            if (currentPos >= pos0 && currentPos < pos1) {

                window.scrollTo({
                    top: posArray[0],
                    behavior: 'smooth',
                })
            }

            if (currentPos >= pos1 && currentPos < pos2) {
                window.scrollTo({
                    top: posArray[0],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos2 && currentPos < pos3) {
                window.scrollTo({
                    top: posArray[1],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos3 && currentPos < pos4) {
                window.scrollTo({
                    top: posArray[2],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos4 && currentPos < pos5) {
                window.scrollTo({
                    top: posArray[3],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos5 && currentPos < pos6) {
                window.scrollTo({
                    top: posArray[4],
                    behavior: 'smooth',
                })
            }
            if (currentPos >= pos6) {
                window.scrollTo({
                    top: posArray[5],
                    behavior: 'smooth',
                })
            }

        };
    }

    useEffect(() => {
        handleTouch();
    }, [touchUpPos]);


    useEffect(
        () => {
            window.addEventListener('scroll', buttonHandler);
            window.addEventListener('pointerdown', handlePointerDown);
            window.addEventListener('pointerup', handlePointerUp);
            window.addEventListener('wheel', wheelHandle, { passive: false });

            return () => {
                window.addEventListener('pointerdown', handlePointerDown);
                window.addEventListener('pointerup', handlePointerUp);
                window.removeEventListener('scroll', buttonHandler);
                window.removeEventListener('wheel', wheelHandle, { passive: false });
            }
        }
    );

    return (
        <>
            <MainConts1 /* SetPos1={SetPos1} */ />
            <MainConts2 SetPos1={SetPos1} />
            <MainConts3 SetPos2={SetPos2} />
            <MainConts4 SetPos3={SetPos3} />
            <MainConts5 SetPos4={SetPos4} />
            <MainConts6 SetPos5={SetPos5} />
            <div ref={scrollBtn} className="scrollBtn">
                <button onClick={(e) => { scrollHandler(e, 0) }}></button>
                <button onClick={(e) => { scrollHandler(e, 1) }}></button>
                <button onClick={(e) => { scrollHandler(e, 2) }}></button>
                <button onClick={(e) => { scrollHandler(e, 3) }}></button>
                <button onClick={(e) => { scrollHandler(e, 4) }}></button>
                <button onClick={(e) => { scrollHandler(e, 5) }}></button>
                <button onClick={(e) => { scrollHandler(e, 6) }}></button>
            </div>
        </>
    )
}
export default Main;