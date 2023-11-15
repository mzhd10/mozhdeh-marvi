import Reveal from "../Reveal/Reveal";
import { achievement } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Achievements.css";
import "./Details/Details.css";
import { useState } from "react";

const Achievements = () => {
  const [modalStates, setModalStates] = useState(
    Array(achievement.length).fill(false)
  );

  const toggleModal = (index) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = !newModalStates[index];
    setModalStates(newModalStates);
  };

  return (
    <section id="achievements" className="achievements">
      <Reveal>
        <div className="container">
          <div className="achievement-title">
            <h2>
              <span>My</span> Achievements
            </h2>
            <hr />
          </div>
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
            className="achievements--container mySwiper"
          >
            {achievement.map((curElm, index) => {
              return (
                <div key={index}>
                  <div>
                    <SwiperSlide className="achievements-item card card-one">
                      <span className="achievement-organization">
                        {curElm.organization}
                      </span>
                      <h3 className="achievement-name ">{curElm.name}</h3>
                      <p className="achievement-description">
                        {curElm.description}
                      </p>
                      <span className="link" onClick={() => toggleModal(index)}>
                        See Details
                      </span>
                      <FontAwesomeIcon
                        className="link-icon"
                        icon={faArrowRight}
                        onClick={() => toggleModal(index)}
                      />
                    </SwiperSlide>
                  </div>
                </div>
              );
            })}
            {achievement.map((curElm, index) => {
              return (
                <div key={index}>
                  <div>
                    {modalStates[index] && (
                      <div className="achievement-modal">
                        <div className="achievement-modal-content">
                          <FontAwesomeIcon
                            icon={faXmark}
                            className="achievement-modal-close"
                            onClick={() => toggleModal(index)}
                          />
                          <h3 className="modal-title">{curElm.name}</h3>
                          <p className="modal-detail">{curElm.detail}</p>
                          <p className="modal-date">Date: {curElm.date}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </Swiper>
        </div>
      </Reveal>
    </section>
  );
};

export default Achievements;
