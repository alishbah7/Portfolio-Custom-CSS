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
import SmallScreenSlider from './components/slidersm';



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
          <span data-aos='fade-left'>Know About Me</span>
          <h1 data-aos='zoom-in-right'>I Am <br/> Alishbah</h1>
          <hr data-aos='zoom-in-right'/>
          <p data-aos='fade-up'>I am enthusiastic and passionate full stack web developer!</p>
        </div>
        <Swiper
          effect='coverflow'
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
          className='swiper'
          >
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

      {/*------====== PROJECTS GLIMPSES ======------*/}
      <div className='projectsTitle'>
        <h1 data-aos='fade-down-right'>Glimpses Of <br /> Projects</h1>
        <div data-aos='fade-left'></div>
      </div>

      {/*------ big screens ------*/}
      <div className='projectSlider'>
        <div className='slider' 
        style={{
        '--width': '100px',
        '--height': '50px',
        '--quantity': '10',
        marginBottom: '10px',
        } as React.CSSProperties}
        data-aos='fade'
        data-aos-duration='3000'
        >
          <div className='list itemsBtns'>
            <div className='item' style={{'--position': 1} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 2} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 3} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 4} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 5} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 6} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 7} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 8} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 9} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
            <div className='item' style={{'--position': 10} as React.CSSProperties}><Link href='#' className='Link'>View All</Link></div>
          </div>
        </div>

        <div className='slider' data-reverse='true' 
        style={{
          '--width': '250px',
          '--height': '405px',
          '--quantity': '9', 
        } as React.CSSProperties}
        data-aos='fade'
        data-aos-duration='3000'
        >
            <div className='list'>
                <div className='item item1' style={{'--position': 1} as React.CSSProperties}><h2>CareerCanvas</h2></div>
                <div className='item item2' style={{'--position': 2} as React.CSSProperties}><h2>Cactus Web</h2></div>
                <div className='item item3' style={{'--position': 3} as React.CSSProperties}><h2>Fusion Hub</h2></div>
                <div className='item item4' style={{'--position': 4} as React.CSSProperties}><h2 className='choice'>Choice 1</h2></div>
                <div className='item item5' style={{'--position': 5} as React.CSSProperties}><h2 className='hekto'>Hekto</h2></div>
                <div className='item item6' style={{'--position': 6} as React.CSSProperties}><h2>CareerCanvas</h2></div>
                <div className='item item7' style={{'--position': 7} as React.CSSProperties}><h2>Cactus Web</h2></div>
                <div className='item item8' style={{'--position': 8} as React.CSSProperties}><h2>Fusion Hub</h2></div>
                <div className='item item9' style={{'--position': 9} as React.CSSProperties}><h2 className='choice'>Choice 1</h2></div>
            </div>
        </div>
      </div>

      {/*------ small screens ------*/}
      <SmallScreenSlider/>


      <div className='h-[100vh]'>

      </div>

    </div>
  );
}
