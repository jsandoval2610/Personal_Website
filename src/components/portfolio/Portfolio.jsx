import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/facilitamed.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My Work</h5>
       <h2>Portfolio</h2>

       <div className="container portfolio__container">
         <article className="portfolio__item">
           <div className="portfolio__item-image">
             <img src={IMG1} alt=''></img>
           </div>
           <h3>Facilitamed.eV</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target={'_blank'}>Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
            </div>
         </article>

         <article className="portfolio__item">
           <div className="portfolio__item-image">
             <img src={IMG2} alt=''></img>
           </div>
           <h3>Blockchain App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target={'_blank'}>Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
            </div>
         </article>

         <article className="portfolio__item">
           <div className="portfolio__item-image">
             <img src={IMG3} alt=''></img>
           </div>
           <h3>Consulting Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target={'_blank'}>Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
            </div>
         </article>
       </div>
    </section>
  )
}

export default Portfolio