import React from 'react';
import css from './home.module.css';

export default function Home() {
  return <main className={css.homepage}>
        <div className={css.namesection}>
      <p className={css.intro}>
         Hi, my name is
      </p>
      <h1 className={css.nameTitle}>
          Emily Sarina Ekins
      </h1>
      <p className={css.about}>
          I'm a full-Stack developer in training with a love for colour and style.
      </p>
      
      <button className={css.cvButton}>
      <img src='/cvButton.jpeg' alt='logo' className={css.cvIcon}/>
      </button>
      <button className={css.socialButton}>
      <img src='https://i.ibb.co/mJNF2nF/pink-linkedin.png' alt='logo' className={css.logo}/>
      </button>
      </div>

  </main>;
}
