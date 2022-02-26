import React from 'react'
import css from './projects.module.css';
import Title from '../../Components/Title/Title';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';


//this is the projects page 

export default function Projects() {
  return (
    <div className={css.projects}>
    <div className={css.projectTitle}>
    <Title text={"Projects"}  />
    </div>
    <ProjectCard 
    projectImg='/AudreySite2.png' 
    altText={'Audrey Hepburn Site'} 
    title={"Precourse Project"} 
    body={"Before I started The School of Code Bootcamp all bootcamper had to make a site that passed the 'freecodecamps' tribute page test's. I did mine on Audery Hepburn. This was the first coding project I ever made."}
    projectWebsite={'https://pre-course-project.netlify.app'}  
    />
    <ProjectCard 
    projectImg='/FeedbackSite.png' 
    altText={'Feedback Site'} 
    title={"One Week Project"} 
    body={"On week nine of the bootcamp we worked in a team to solve a problem for the bootcamp. Our team decided to make a bootcamper portal with a simplified feedback form and a help section."}
    projectWebsite={'https://heuristic-johnson-b3e4f3.netlify.app'}  
    />
    </div>
  )
}