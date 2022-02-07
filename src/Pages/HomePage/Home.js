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
          I'm a full-Stack developer in training with a passion for all things styled.
      </p>
      
      <button className={css.cvButton}>
          C.V
      </button>
      <button className={css.socialButton}>
          L.in
      </button>
      </div>

  </main>;
}
