import React from "react"
import './css/contact.css'
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <div className='contactContainer'>

      <div className='contactLeftDiv'>
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
          <p>
            location: <a href='https://github.com/foresthpark' target='_blank'
                         rel="noopener noreferrer">github.com/foresthpark</a>
          </p>
          <p>
            <a href='https://drive.google.com/open?id=1LYI6w_88-4_TcC8CrEp1FTRfuTjPRiEu' target='_blank'
               rel="noopener noreferrer">
              <b>[Download Resume]</b>
            </a>
          </p>
        </div>
      </div>

      <div className='contactRightDiv'>
        <div className='contactTitle'>
          Location - Calgary, AB
        </div>
        <GoogleMap/>
      </div>
    </div>
  );
}

export default Contact