import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, { Autoplay, Navigation, Pagination, A11y, Keyboard } from 'swiper';
import { HashLink } from "react-router-hash-link";
SwiperCore.use([Autoplay, Keyboard, Navigation, Pagination, A11y]);

function Department() {

    let url = process.env.PUBLIC_URL;

    const [swipwerItem, setSwipwerItem] = useState([]);
    const [isPop, setIsPop] = useState('on');

    let departmentConts = useRef(null);
    let departSwiper = useRef(null);
    let swiperImg = useRef(null);
    let loadingWrap = useRef(null);
    let conts = useRef(null);

    useEffect(() => {

        //데이터가 금방 불러와서 효과 보이기 위해 차선책으로 setTimeout 씀. 
        setTimeout(() => {
            fetch(`${url}/department.json`)
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    setIsPop('');
                    setSwipwerItem(result.date);
                    departSwiper.current.querySelector('.tit').classList.add('on');
                })
        }, 1000)

    }, [])


    function handleConts(e) {
        let isActive = e.currentTarget.closest('.swiper-slide-active');
        if (isActive) {
            departmentConts.current.classList.add('active');
            e.target.style.animationPlayState = "paused";
        }
    }


    return (

        <section ref={departmentConts} className="departmentConts" id="departmentTop">
            <Swiper
                ref={departSwiper}
                className="departSwiper"
                autoplay={{
                    "delay": 2500,
                }}
                speed={500}
                loop={true}
                loopedSlides={3}
                initialSlide={3}
                centeredSlides={true}
                slidesPerView={'auto'}
                keyboard={{
                    "enabled": true
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                    type: 'progressbar',
                }}
                scrollbar={{ draggable: true }}
                onSwiper={
                    (swiper) => {
                        const slideItemWrap = document.createElement('div');
                        slideItemWrap.classList.add('swiper-wrapper-wrapper');
                        swiper.wrapperEl.before(slideItemWrap);
                        slideItemWrap.append(swiper.wrapperEl);
                        swiper.wrapperEl.insertAdjacentHTML('beforebegin', '<h1 class="tit"><span>the</span> AMERIMNOS\'s<div>TEAM</div></h1>');
                    }
                }
                onSlideChange={() => console.log('slides change')}
                onClick={
                    (swiper) => {
                        swiper.autoplay.stop();
                    }
                }
            >
                {
                    swipwerItem.map((el, index) => {
                        return (
                            <SwiperSlide ref={swiperImg} key={index} className="swiperImg">
                                <div className="creator">{el.creator}
                                </div>
                                <img onClick={e => { handleConts(e) }} src={`${url}${el.src}`} alt={el.name} />
                                <span>{el.name}</span>
                                <div className="contsWrap">
                                    <div ref={conts} className="conts">
                                        {
                                            el.subConts.split('\n').map((line, index) => {
                                                return (
                                                    <div className="mb20" key={index}>
                                                        {line}
                                                    </div>
                                                )
                                            })

                                        }
                                    </div>


                                    <HashLink smooth to="#departmentTop" onClick={
                                        e => {
                                            departmentConts.current.classList.remove('active');
                                            e.target.closest('.swiper-slide-active').querySelector('img').style.animationPlayState = "paused";
                                            setTimeout(() => {
                                                e.target.closest('.swiper-slide-active').querySelector('img').style.animationPlayState = "running";
                                            }, 2500);
                                        }
                                    } className="backBtn">Go to back</HashLink>
                                </div>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div ref={loadingWrap} className={`loadingWrap ${isPop}`}>
                <div className="loading"></div>
            </div>


        </section>
    )
}
export default Department;