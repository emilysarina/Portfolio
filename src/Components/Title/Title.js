import React from 'react';
import css from './title.module.css';

export default function Title({text}) {
  return <h1 className={css.title}>
      {text}
  </h1>;
}
