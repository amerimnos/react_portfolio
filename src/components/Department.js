import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar"
import 'swiper/css/pagination';

import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
SwiperCore.use([/* Autoplay, */ Keyboard, Scrollbar, Navigation, Pagination, A11y]);

function Department() {

    let url = process.env.PUBLIC_URL;

    const [swipwerItem, setSwipwerItem] = useState([]);

    let swiperImg = useRef(null);

    useEffect(() => {
        fetch(`${url}/department.json`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                setSwipwerItem(result.date);
            })
    }, [])


    return (

        <section className="departmentConts">
            <h1 className="tit">
                <span>the</span> AMERIMNOS's
                <div>TEAM</div>
            </h1>

            <Swiper
                className="departSwiper"
                autoplay={{
                    "delay": 2500,
                }}
                speed={500}
                loop={true}
                loopedSlides={3}
                centeredSlides={true}
                /* centeredSlidesBounds={true} */
                slidesPerView={'auto'}
                keyboard={{
                    "enabled": true
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                    type: 'fraction',
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
                    }
                }
                onAfterInit={
                    () => {

                    }
                }
                onSlideChange={() => console.log('slide change')}
            >
                {
                    swipwerItem.map((el, index) => {

                        return (
                            <SwiperSlide ref={swiperImg} key={index} className="swiperImg"><img src={`${url}${el.src}`} alt={el.name} /></SwiperSlide>
                        )
                    })
                }
            </Swiper>


        </section>
    )
}
export default Department;