import React from "react"
import './css/contactPoints.css'

const ContactPoints = () => {
  const contactPoints = [
    {
      name: 'resume',
      link: 'https://drive.google.com/open?id=1LYI6w_88-4_TcC8CrEp1FTRfuTjPRiEu ',
      image: 'https://i.imgur.com/AizWCPG.png'
    },
    {
      name: 'linkedin',
      link: 'https://linkedin.com/in/forestpark',
      image: 'https://i.imgur.com/XmGM9dI.png'
    },
    {
      name: 'github',
      link: 'https://github.com/foresthpark',
      image: 'https://i.imgur.com/OQSvJML.png'
    },
    {
      name: 'email',
      link: 'mailto:forest@forestpark.dev',
      image: 'https://i.imgur.com/8hZyc4U.png'
    },
  ]


  return (
    <div className='contactPoints'>
      {contactPoints.map((contact, index) => {
        return (
          <div className='contactIcons' key={index}>
            <a href={contact.link} target='_blank' rel="noopener noreferrer">
              <img src={contact.image} width='30' height='30' alt=''/>
            </a>
          </div>)
      })}
    </div>
  );
}

export default ContactPoints