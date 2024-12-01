'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import Link from 'next/link'
import CareerCanvas from '../../public/images/CareerCanvas.png';
import Cactus from '../../public/images/cactus.png';
import FusionHub from '../../public/images/fusionhub.png';
import Choice1 from '../../public/images/Choice1.png';
import Hekto from '../../public/images/Hekto.png';
import Todo from '../../public/images/Todo.png';
import '../globals.css'

export default function SmallScreenSlider() {
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 0 });
  }, []);
  return(
    <div className='swiperSm'>
      <Swiper 
      effect="cards"
      grabCursor={true}
      initialSlide={2}
      speed={500}
      loop={true}
      modules={[EffectCards, Mousewheel]}
      mousewheel={{
        invert: false,
      }}
      className='swiper swiperForSm'
      data-aos='zoom-out-right'>
        <div className='swiper-wrapper'>

          <SwiperSlide className='swiper-slide'>
            <Image
              className='image'
              src={FusionHub}
              alt=''/>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <Image
              className='image img-position'
              src={Cactus}
              alt='' />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <Image
              className='image'
              src={CareerCanvas}
              alt='' />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <Image
              className='image'
              src={Choice1}
              alt='' />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <Image
              className='image'
              src={Hekto}
              alt='' />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <Image
              className='image'
              src={Todo}
              alt='' />
          </SwiperSlide>
{/* 
          <SwiperSlide className='swiper-slide' style={styles}>
            <Image
              style={stylesImagePosition}
              className='Image-position'
              src={Icon}
              alt='' />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide' style={styles}>
            <Image
              style={stylesImage}
              src={Icon}
              alt='' />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide' style={styles}>
            <Image
              style={stylesImage}
              src={Icon}
              alt='' />
          </SwiperSlide> */}
        </div>
      </Swiper>
      <Link href='#' className='Link' data-aos='fade-right'>Explore All</Link>
      </div>
  )
}