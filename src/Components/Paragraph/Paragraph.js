import React from 'react';
import css from './paragraph.module.css';

export default function Paragraph({text}) {
  return <p className={css.paragraph}>
      {text}
  </p>;
}
