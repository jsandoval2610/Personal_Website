import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Personalized Framework</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Unique Designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Logical Navigation</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Personal Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Business/Company Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Personal Blog</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Social Media Website</p>
            </li>
          </ul>
        </article>

        {/* END Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Sevice Offerings</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Product launches</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>NGOs</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services