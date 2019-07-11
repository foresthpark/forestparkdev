import React from "react"
import './css/about.css'

const About = () => {
  return (
    <div>
      <div className='aboutTitle'>
        About Me
      </div>
      <div className='aboutMe'>
        <p>I am a Full Stack Developer who enjoys solving problems and helping other people solve other problems.</p>

        <p>The thing I enjoy most about being a developer is that I am always surrounded by problems to solve.
          Everyday is a new challenge and I get to learn a new way to solve different problems.</p>

        <p>Coming from a corporate training background, I love helping people reach their full potential.
          Alongside from receiving help from other developers, being able to help other developers realize their
          potential
          was greatly rewarding.
          This support structure within the group is what I believe to be most important to a team, and critical to a
          company's success.</p>
      </div>
      <div className='aboutTitle'>
        Interests
      </div>
      <div className='aboutMe'>
        <p>
          Climbing / Photography / Videography / Puzzle Books / Console, PC Gaming / Board Games
        </p>
      </div>
    </div>
  );
}

export default About