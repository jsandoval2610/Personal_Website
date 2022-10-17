import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/" target='_blank'><AiFillLinkedin /></a>
        <a href="https://github.com" target='_blank'><FaGithub/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials