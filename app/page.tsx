'use client';
// import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import Header from './components/header';
import '../public/css/hero.css'

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
          <div className='container'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto dolore harum veritatis pariatur commodi sed ipsa, illo aut sunt amet iste vero, dignissimos labore a repudiandae, error nihil debitis recusandae est consectetur tempora ipsam. Rem ipsum facilis veritatis ea! Eveniet autem debitis quae, quibusdam ex natus sapiente ad rerum?</p><br />


          </div>

          <div className='heroSec'>
            <div className='bg' data-aos='zoom-out-right'>
              <div id='heroPt1'>
                <h1>I'm <i>ALISHBAH</i></h1>
                <h4>A Full Stack Web Developer</h4>
                <div id='heroBtn'><button className='gradient-border'><Link href='' id='heroBtn'>Explore Projects</Link></button></div>
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
    </div>
  );
}
