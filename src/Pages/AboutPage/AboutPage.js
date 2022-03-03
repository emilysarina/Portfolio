import React from 'react';
import Title from '../../Components/Title/Title';
import css from './about.module.css';
import Paragraph from '../../Components/Paragraph/Paragraph';
import {Data} from '../data/data'

export default function About() {
  return <div className={css.about}>
  <div className={css.aboutTitle}>
      <Title text={Data[0].title}/>
      <div className={css.aboutImage}>
      <img 
      src="/me.JPG" 
      alt="Girl in a big garden" 
      className={`${css.picture} ${css.aboutGrid}`}/>
      </div>
      </div>
      <div className={`${css.aboutParagraph} ${css.aboutGrid}`} >
      <Paragraph text= {Data[0].paragraph} className={`${css.aboutParagraph} ${css.aboutGrid}`}/>
      </div>
     <ul className={`${css.aboutSkills}, ${css.aboutGrid}`}>
       <li  className={css.aboutPoint}>JavaScript (ES6)</li>
       <li className={css.aboutPoint}>Node.js</li>
       <li className={css.aboutPoint}>React</li>
     </ul>
     
  </div>;
}

// .aboutImage{
//   position:relative;
//   padding: 1em;
//   padding-right: 18em;
//   float: right;
  
// } 