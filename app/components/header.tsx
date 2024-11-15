'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link'
import  '../../public/css/header.css'


export default function Header(){
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
  }, []);
    return (
        <div>
            <header>
            <h1 className='logo'>ALISHBAH</h1>


                <input type='checkbox' id='check' />
                <label htmlFor='check' className='icon'>
                    <i className='bx bx-menu' id='menu-icon'></i>
                    <i className='bx bx-x' id='close-icon'></i>
                </label>

                <nav className='navbar'>
                    <Link href='#' className='nav-item' style={{'--i': 0} as React.CSSProperties} data-aos='fade-down'>Home</Link>
                    <Link href='#' className='nav-item' style={{'--i': 1} as React.CSSProperties} id='circleIcon'><i className='bx bxs-circle'></i></Link>
                    <Link href='#' className='nav-item' style={{'--i': 2} as React.CSSProperties} data-aos='fade-down'>About</Link>
                    <Link href='#' className='nav-item' style={{'--i': 3} as React.CSSProperties} id='circleIcon'><i className='bx bxs-circle'></i></Link>
                    <Link href={''} className='nav-item' style={{'--i': 4} as React.CSSProperties} id='logo' data-aos='flip-down'><h1>ALISHBAH</h1></Link>
                    <Link href='#' className='nav-item' style={{'--i': 5} as React.CSSProperties} id='circleIcon'><i className='bx bxs-circle'></i></Link>
                    <Link href='#' className='nav-item' style={{'--i': 6} as React.CSSProperties} data-aos='fade-down'>Projects</Link>
                    <Link href='#' className='nav-item' style={{'--i': 7} as React.CSSProperties} id='circleIcon'><i className='bx bxs-circle'></i></Link>
                    <Link href='#' className='nav-item' style={{'--i': 8} as React.CSSProperties} data-aos='fade-down'>Contact</Link>
                </nav>

            </header>
        </div>

  )
}
  