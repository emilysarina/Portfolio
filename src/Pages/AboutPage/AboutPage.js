import React from 'react';
import Title from '../../Components/Title/Title';
import css from './about.module.css';
import Paragraph from '../../Components/Paragraph/Paragraph';
import {Data} from '../data/data'

export default function About() {
  return <div className={css.about}>
  <div className={css.aboutTitle}>
      <Title text={Data[0].title}/>
      <aboutImage className={css.aboutImage}>
      <img 
      src="/me.JPG" 
      alt="Girl in a garden" 
      className={`${css.picture} ${css.aboutGrid}`}/>
      </aboutImage>
      </div>
      <div className={`${css.aboutParagraph} ${css.aboutGrid}`} >
      <Paragraph text= {Data[0].paragraph} className={css.aboutGrid}/>
      </div>
     <ul className={css.aboutSkills}>
       <li  className={css.aboutPoint}>JavaScript (ES6)</li>
       <li className={css.aboutPoint}>Node.js</li>
       <li className={css.aboutPoint}>React</li>
     </ul>
     
  </div>;
  
}
