import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions} from '@mui/material';




export default function ProjectCard({projectImg, altText, title, body, projectWebsite}) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor:'#495867', padding:'0.3em'}}>
    <CardActionArea>
      <CardMedia sx={{ bgcolor:'#495867', display: 'inline', border:'2px'}}
        component="img"
        height="160"
        image={projectImg}
        alt={altText}
      />
      <CardContent height='10em'>
        <Typography 
         gutterBottom variant="h5"
         component="div" 
         lineHeight='1em'
         sx={{color:'#ecc8af', fontFamily:'Quicksand', textAlign:'left'}}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color:'#ecc8af', fontFamily:'Quicksand', textAlign:'left'}}>
          {body}
        </Typography>
        <Typography variant="body2" sx={{ color:'#ecc8af', fontFamily:'Quicksand', textAlign:'left'}}>
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body2" sx={{ color:'#ecc8af', fontFamily:'Quicksand', paddingLeft:'0.5em', fontWeight:'bold'}}>
    <a href={projectWebsite} 
       rel="noreferrer" 
       target="_blank">Visit project here</a>
    </Typography>
    </CardActions>
  </Card>
  )
}





 
