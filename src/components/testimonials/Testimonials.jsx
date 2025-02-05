import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

import { Pagination, Navigation} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
  {
    avatar: AVTR2,
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
  {
    avatar: AVTR3,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween = {40}
        slidesPerView = {1}
        pagination={{clickable:true}}
        scrollbar={{draggable:true}}
  >
        
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
