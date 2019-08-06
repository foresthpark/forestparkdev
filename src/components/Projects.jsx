import React from "react"
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './css/projects.css'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const Projects = () => {
  const classes = useStyles();
  const projects = [
    {
      title: 'Greengate VR Experience',
      image: 'https://i.imgur.com/lMTW0x0.png',
      about: 'Creating VR experience in Unreal Engine and developing assets in VR according to client requirements and feedback',
      tech: ['Unreal Engine 4, Photoshop']
    },
    {
      title: 'Wonderville | Mindfuel',
      image: 'https://i.imgur.com/nP7iA0O.png',
      about: 'Rapid prototyping UI and UX in Adobe XD to match client requirements, refactoring existing Wonderville site into React to improve UX, and building database model to redesign current login system and enhance UX',
      tech: ['React', 'NodeJS', 'Express', 'PostgreSQL', 'Adobe XD', 'Design Thinking']
    },
    {
      title: 'Notflicks',
      url: 'https://notflicks.herokuapp.com',
      github: 'https://github.com/foresthpark/Notflicks',
      image: 'https://i.imgur.com/qSFPQEi.jpg',
      about: 'A movie app using the TMDB API to watch movie trailers and save your favorite movies',
      tech: ['React', 'Redux', 'NodeJS', 'Express', 'PostgreSQL', 'GraphQL']
    },
    {
      title: 'React Native Weather App',
      url: 'https://snack.expo.io/@forestpark/forest\'s-awesomest-weather-app',
      github: 'https://github.com/foresthpark/Notflicks',
      image: 'https://i.imgur.com/xZiCauy.jpg',
      about: 'A simple weather app made with React Native and the OpenWeatherMap API',
      tech: ['React Native', 'Expo']
    }
  ]

  const projectCards = projects.map((project, index) => {
    return (
      <div className='projectCard' key={index}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt={project.title}
            height="258"
            image={project.image}
            title={project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {project.about}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul>
                {project.tech.map(tech => {
                  return (
                    <li>{tech}</li>
                  )
                })}
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <div className='cardUrl'>
              {project.url ?
                <a href={project.url} target='_blank' rel="noopener noreferrer">
                  <CardActionArea>
                    <Button size="small" color="black">
                      Demo
                    </Button>
                  </CardActionArea>
                </a>
                :
                null
              }
              {project.github ?
                <a href={project.github} target='_blank' rel="noopener noreferrer">
                  <CardActionArea>
                    <Button size="small" color="black">
                      Github
                    </Button>
                  </CardActionArea>
                </a>
                :
                null
              }
            </div>
          </CardActions>
        </Card>
      </div>
    )
  })

  return (
    <div>
      <div className='projectsTitle'>
        Latest Projects
      </div>
      <div className='projectsContainer'>
        {projectCards}
      </div>
    </div>

  );
}

export default Projects