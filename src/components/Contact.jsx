import React from "react"
import './css/contact.css'

const Contact = () => {
  return (
    <div>
      <div className='contactTitle'>
        Contact Me
      </div>
      <div className='contactMe'>
        <p>
          email: <a href='mailto:forest@forestpark.dev'>forest@forestpark.dev</a>
        </p>

        <p>
          linkedin: <a href='https://linkedin.com/in/forestpark' target='_blank'
                       rel="noopener noreferrer">linkedin.com/in/forestpark</a>
        </p>

        <p>
          github: <a href='https://github.com/foresthpark' target='_blank'
                     rel="noopener noreferrer">github.com/foresthpark</a>
        </p>
      </div>
    </div>
  );
}

export default Contact