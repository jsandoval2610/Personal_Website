import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Julian Sandoval Boburg</a>
      <ul className='permalinks'>
      <li> <a href="#">Home</a></li>
      <li> <a href="#about">About</a></li>
      <li> <a href="#experience">Experience</a></li>
      <li> <a href="#services">Services</a></li>
      <li> <a href="#portfolio">Portfolio</a></li>
      <li> <a href="#testimonials">Testimonials</a></li>
      <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><FaFacebookF/></a>
        <a href="https://facebook.com"><BsInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>

      <div className="footer__coyright">
        <small>&copy; Julian's website. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer