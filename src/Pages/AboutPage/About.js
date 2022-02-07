import React from 'react';
import Title from '../../Components/Title/Title';
import css from './about.module.css';
import Paragraph from '../../Components/Paragraph/Paragraph';

export default function About() {
  return <div className={css.about}>
  <div className={css.aboutTitle}>
      <Title text={'About Me.'}/>
      </div>
      <div className={css.aboutParagraph}>
      <Paragraph text= {"Stuff about what I’ve done. What I’m doing now. Yada yada yada yada yada"} />
      </div>
     <ul className={css.aboutSkills}>
       <li className={css.aboutPoint}>JavaScript (ES6)</li>
       <li className={css.aboutPoint}>Node.js</li>
       <li className={css.aboutPoint}>React</li>
     </ul>
  </div>;
  
}
