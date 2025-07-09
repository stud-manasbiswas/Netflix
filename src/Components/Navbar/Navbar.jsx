import React from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import Search_icon from '../../assets/assets/search_icon.svg'
import bell_icon from '../../assets/assets/bell_icon.svg'
import carte_icon from '../../assets/assets/caret_icon.svg'
import profile_img from '../../assets/assets/profile_img.png'
import { useRef, useEffect } from 'react';
import { logout } from '../../firebase'




function Navbar() {
  const navref = useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navref.current.classList.add('nav-dark')
      }
      else{
        navref.current.classList.remove('nav-dark')
      }
    })
  },[])


  return (
    <div ref ={navref} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
           <img src={profile_img} alt="" className='profile' />
           <img src={carte_icon} alt=""  />

           <div className='dropdown'>
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
