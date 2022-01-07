import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar"
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination, A11y]);

function Department() {

    let url = process.env.PUBLIC_URL;

    const [swipwerItem, setSwipwerItem] = useState([]);

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
                <span>the</span> AMERIMNOS's<br />TEAM
            </h1>

            <Swiper
                className="departSwiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                keyboard={{
                    "enabled": true
                }}
                /* breakpoints={{
                    "769": {
                        "slidesPerView": 2,
                        "slidesPerGroup": 2
                    }
                }} */
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            /* onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')} */
            >
                {/* <SwiperSlide className="swiperImg"><img src={`${url}/img/department_person01.jpg`} alt="img1" /></SwiperSlide> */}


                {
                    swipwerItem.map((el, index) => {
                        return (
                            <SwiperSlide key={index} className="swiperImg"><img src={`${url}${el.src}`} alt={el.name} /></SwiperSlide>
                        )
                    })
                }
            </Swiper>


        </section>
    )
}
export default Department;