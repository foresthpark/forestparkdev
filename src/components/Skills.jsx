import React from "react"
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './css/skills.css'

const useStyles = makeStyles({
  card: {
    width: 220,
  },
});

const Skills = () => {
  const skills = [
    {
      type: 'Languages',
      list: ['Javascript', 'Python', 'Java(Learning)']
    },
    {
      type: 'Technical Skills',
      list: ['TDD', 'React', 'React Native', 'Redux', 'GraphQL', 'NodeJS', 'Express', 'PostgreSQL']
    },
    {
      type: 'Design Skills',
      list: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'Adobe Premiere', 'Final Cut Pro']
    },
    {
      type: 'Other Skills',
      list: ['Agile', 'Scrum', 'Presentation', 'Project Management', 'Leadership', 'Coaching and Training']
    }
  ]

  // const skillCards = skills.map((skill, index) => {
  //   return (
  //     <div className='skillCard' key={index}>
  //       <div className='skillType'>
  //         {skill.type}
  //       </div>
  //       <div className='skillList'>
  //         <ul>
  //           {skill.list.map((item, index) => {
  //             return (
  //               <li>{item}</li>
  //             )
  //           })}
  //         </ul>
  //       </div>
  //     </div>
  //   )
  // })

  const skillsUi = skills.map((skill, index) => {
    const classes = useStyles();
    return (
      <div className='skillCard' key={index}>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {skill.type}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <ul>
                {skill.list.map(item => {
                  return (
                    <li>{item}</li>
                  )
                })}
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  })

  return (
    <div>
      <div className='skillsTitle'>
        Skills
      </div>
      <div className='skillsContainer'>
        {skillsUi}
      </div>
    </div>
  );
}

export default Skills