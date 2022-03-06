import React from 'react';
import css from './home.module.css';
import GithubIcon from './githubIcon';

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
      
      <div className={css.socialButtons}>
      <a href="https://github.com/emilysarina" target="_blank" rel="noreferrer">
      <button className={css.gitButton}>
      <GithubIcon/>
      </button>
      </a>
      <a href="https://www.linkedin.com/in/emily-sarina-ekins-664079217" target="_blank" rel="noreferrer">
      <button className={css.socialButton}>
      <img src='/linkedin.png' alt='logo' className={css.logo}/>
      </button>
      </a>
      </div>
      </div>

  </main>;
}
//https://github.com/emilysarina
// .cvButton {
//   color: #ecc8af;
//   padding: 0.25em 0.5em;
//   border-radius: 10px;
//   padding-top: 0.3em;
//   background-color: #ecc8af00;
//   border: 2px solid #ecc8af;
//   margin: 0.5em;
// }

// .cvButton:hover {
//   background-color: #ecc8af83;
// }