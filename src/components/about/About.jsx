import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="containet about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About image" />
            </div>

        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>2+ Months Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>3 Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>2 completed</small>
              </article>
            </div>
            <p>
            My name is Julian, I'm 19 years old and originally from Guatemala. I’m currently an undergraduate at Middlebury College majoring in Computer Science. 
            Developing websites sparked my interest during my first year of college which is why I decided to create my website in order to help design websites that suit 
            the needs of other people.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About