import React from 'react';
import Title from '../../Components/Title/Title';
import css from './about.module.css';
import Paragraph from '../../Components/Paragraph/Paragraph';
import {Data} from '../data/data'

export default function About() {
  return <div className={css.about}>
  <div className={css.aboutTitle}>
      <Title text={Data[0].title}/>
      </div>
      <div className={css.aboutWrapper}>
      <div className={css.aboutParagraph}>
      <Paragraph text= {Data[0].paragraph} />
      </div>
      <div className={css.aboutImage}>
      <img 
      src="/me.JPG" 
      alt="Girl in a big garden" 
      className={css.picture}/>
      </div>
      </div> 
      
     <ul className={`${css.aboutSkills}, ${css.aboutGrid}`}>
       <li  className={css.aboutPoint}>JavaScript (ES6)</li>
       <li className={css.aboutPoint}>Node.js</li>
       <li className={css.aboutPoint}>React</li>
     </ul>
     <div className={css.aboutShape}></div>
  </div>;
}

// .aboutImage{
//   position:relative;
//   padding: 1em;
//   padding-right: 18em;
//   float: right;
  
// } 