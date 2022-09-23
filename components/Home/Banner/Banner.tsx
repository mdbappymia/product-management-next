/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";

const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          loop={true}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-screen">
              <Image
                height="300px"
                layout="fill"
                src="/images/slider/1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen">
              <Image
                height="300px"
                layout="fill"
                src="/images/slider/2.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen">
              <Image
                height="300px"
                layout="fill"
                src="/images/slider/3.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
