import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Rating from "./Rating";

const Items = ({ projectItems }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        540: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {projectItems.map((projectItem) => {
        const { id, img, title, description } = projectItem;
        return (
          <SwiperSlide className="project-items card card-two" key={id}>
            <div className="project-img-wrapper">
              <img src={img} alt="" className="project-img" />
            </div>

            <h3 className="project-title">{title}</h3>
            <Rating />
            <p className="project-description">{description}</p>

            <a href="" className="link">
              See on Github
              <FontAwesomeIcon className="link-icon" icon={faArrowRight} />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Items;
