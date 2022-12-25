import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RecomondedMovies() {
  return (
    <div>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        // slidesPerGroup={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-7"
      >
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item: any) => (
          <SwiperSlide>
            <div className="">
              <div className="grid-cols-3">
                <div>
                  <div className="h-80 w-56">
                    <Link href={"/moviesInner"}>
                      <img
                        className="h-full w-full"
                        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAxMjIuOEsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg"
                      />
                    </Link>
                  </div>
                </div>
                <div>
                  <article>
                    <h2 className="text-lg font-semibold">
                      Avatar:The Way Of Water
                    </h2>
                  </article>
                </div>
                <div>
                  <article>
                    <p className="text-base font-normal">Action/drama/comedy</p>
                  </article>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
