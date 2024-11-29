'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Keyboard, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Link from 'next/link'
import Header from './components/header';
import '../public/css/hero.css';
import './globals.css'

export default function Home() {
  useEffect(() => {
      AOS.init({ duration: 2000, easing: 'ease', delay: 0 });
}, []);
  return (
    <div>

      {/*------====== HEADER ======------*/}
      <Header/>


      {/*------====== HERO & ABOUT ======------*/}
      <div className='mainPart'> 
        <div className='mainSec'> 
          {/* <div className='container-main'> */}

            
          {/* </div> */}

          <div className='heroSec'>
            <div className='bg' data-aos='zoom-out-right'>
              <div id='heroPt1'>
                <h1>I&apos;m <i>ALISHBAH</i></h1>
                <h4>A Full Stack Web Developer</h4>
                <div id='heroBtn'><button className='gradient-border'><Link href={'/about'} id='heroBtn'>Explore Projects</Link></button></div>
              </div>
              <div id='socialMedia'>
                <div className='social'><i className='bx bxl-linkedin'></i></div>
                <div className='social2'><i className='bx bxl-github'></i></div>
                <div className='social3'><i className='bx bxl-instagram' ></i></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/*------====== ABOUT SLIDER ======------*/}
      <main>
              <div className='about'>
                <span>Know About Me</span>
                <h1>I Am <br/> Alishbah</h1>
                <hr/>
                <p>I am enthusiastic and passionate full stack web developer!</p>
              </div>
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 3,
                  slideShadows: true,
                }}
                keyboard={{
                  enabled: true,
                }}
                mousewheel={{
                  thresholdDelta: 70,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                autoplay={{
                  delay: 1500,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  1560: {
                    slidesPerView: 3,
                  },
                }}
                modules={[EffectCoverflow, Pagination, Autoplay, Keyboard, Mousewheel]}
                className="swiper">
                <div className='swiper-wrapper'>
                  <SwiperSlide className='swiper-slide swiper-slide--one'>
                    <div className='swiperContent'>
                      <h2>Who Am I?</h2>
                      <p>I am Alishbah, I am currently in college and doing higher diploma in software engineering and also enrolled in giaic.</p>
                      <Link href='#' className='Link'>Read More</Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className='swiper-slide swiper-slide--two'>
                    <div className='swiperContent'>
                      <h2>What I Do?</h2>
                      <p>
                        I am a full stack web developer! I craft responsive, visually appealing user interfaces using modern frameworks and libraries.
                      </p>
                      <Link href='#' className='Link'>Projects</Link>
                    </div>
                  </SwiperSlide>
            
                  <SwiperSlide className='swiper-slide swiper-slide--three'>
            
                    <div className='swiperContent'>
                      <h2>My Skills!</h2>
                      <p>
                        I have strong expertise in core web development technologies, including HTML, CSS, JavaScript, TypeScript, MySql, Php and modern libraries.
                      </p>
                      <Link href='#' className='Link'>Read More</Link>
                    </div>
                  </SwiperSlide>

                  

                  

                  

                </div>
                <div className='swiper-pagination'></div>
              </Swiper>
            </main>
    </div>
  );
}
