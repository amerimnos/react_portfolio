import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, { Autoplay, Navigation, Pagination, A11y, Keyboard } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Navigation, Pagination, A11y]);

function Department() {

    let url = process.env.PUBLIC_URL;

    const [swipwerItem, setSwipwerItem] = useState([]);

    let departSwiper = useRef(null);
    let swiperImg = useRef(null);
    let loadingWrap = useRef(null);

    useEffect(() => {
        loadingWrap.current.classList.add('on');

        setTimeout(() => {
            fetch(`${url}/department.json`)
                .then(response => {

                    loadingWrap.current.classList.remove('on');
                    return response.json();
                })
                .then(result => {
                    console.log(result);
                    setSwipwerItem(result.date);
                    departSwiper.current.querySelector('.tit').classList.add('on');
                })
        }, 1000)

    }, [])


    return (

        <section className="departmentConts">
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

                /* breakpoints={{
                    "769": {
                        "slidesPerView": auto,
                        "slidesPerGroup": 2
                    }
                }} */
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
                onClick={e => alert('상세페이지 추가 예정입니다!')}
            >
                {
                    swipwerItem.map((el, index) => {

                        return (
                            <SwiperSlide ref={swiperImg} key={index} className="swiperImg">
                                <div className="creator">{el.creator}</div>
                                <img src={`${url}${el.src}`} alt={el.name} />
                                <span>{el.name}</span>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div ref={loadingWrap} className="loadingWrap">
                <div className="loading"></div>
            </div>
        </section>
    )
}
export default Department;