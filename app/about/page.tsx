import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './globals.css'
export default function slider(){
    return(
        <div className="intro-slider">
            <Swiper
              modules={[Pagination, Mousewheel, Autoplay, EffectFade]}
              spaceBetween={30}
              effect="fade"
              loop={true}
              mousewheel={{ invert: false }}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              pagination={{
                el: '.intro-slider-pagination',
                clickable: true,
              }}
              className="swiper-wrapper"
              >
              <SwiperSlide className="intro-slider-item swiper-slide">
                <div className="intro-slider-img">
                </div>
                <div className="intro-slider-content">
                  <span className="intro-slider-code">Who Am I?</span>
                  <div className="intro-slider-title">I am Alishbah</div>
                  <div className="intro-slider-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                  <a href="#" className="intro-slider-button">READ MORE</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="intro-slider-item swiper-slide">
                  <div className="intro-slider-img">
                  </div>
                  <div className="intro-slider-content">
                    <span className="intro-slider-code">What I do?</span>
                    <div className="intro-slider-title">I am a full stack developer</div>
                    <div className="intro-slider-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <a href="#" className="intro-slider-button">PROJECTS</a>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="intro-slider-item swiper-slide">
                  <div className="intro-slider-img">
                  </div>
                  <div className="intro-slider-content">
                    <span className="intro-slider-code">What skills I have?</span>
                    <div className="intro-slider-title">I have expertise in...</div>
                    <div className="intro-slider-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <a href="#" className="intro-slider-button">MY SKILLS</a>
                  </div>
              </SwiperSlide>
          
            </Swiper>
        <div className="intro-slider-pagination"></div>
          </div>
    )
}