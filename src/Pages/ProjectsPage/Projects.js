import React from 'react'
import css from './projects.module.css';
import Title from '../../Components/Title/Title';



export default function Projects() {
  return (
    <div className={css.projects}>
    <div className={css.projectTitle}>
    <Title text={"Projects"}  />
    </div>
    </div>
  )
}
