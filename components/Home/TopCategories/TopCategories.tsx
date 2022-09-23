import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TopCategories = () => {
  return (
    <div className="my-10">
      <h1 className="text-center font bold uppercase my-5 text-xl font-bold">
        Top Categories
      </h1>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center category-card">
              <div className="relative h-48 w-48">
                <Image
                  className="rounded-full mx-auto"
                  layout="fill"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <a href="#" className="text-center my-5 uppercase block">
              T Shart
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center category-card">
              <div className="relative h-48 w-48">
                <Image
                  className="rounded-full mx-auto"
                  layout="fill"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <a href="#" className="text-center my-5 uppercase block">
              T Shart
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center category-card">
              <div className="relative h-48 w-48">
                <Image
                  className="rounded-full mx-auto"
                  layout="fill"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <a href="#" className="text-center my-5 uppercase block">
              T Shart
            </a>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default TopCategories;
