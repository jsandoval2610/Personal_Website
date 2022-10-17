import React from 'react'
import OR from '../../assets/OR.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={OR} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA