import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/assets/hero_banner.jpg'
import hero_title from '../../assets/assets/hero_title.png'
import play_icon from '../../assets/assets/play_icon.png'
import info_icon from '../../assets/assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret man living in modern Istanbul embarks to save the city from an immortal enemy.</p>
          <div className='hero-btns'>
            <button className='btn'>
              <img src={play_icon} alt="" />Play
            </button>
            <button className=' btn dark-btn'>
              <img src={info_icon} alt="" />More Info
            </button>
            
          </div>
          <TitleCards/>
        </div>
      </div>
    </div>
  )
}

export default Home
