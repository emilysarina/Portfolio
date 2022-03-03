import React from 'react';
import css from './contactPage.module.css';
import Title from '../../Components/Title/Title';
import Paragraph from '../../Components/Paragraph/Paragraph'
import { Data } from '../data/data'

export default function ContactPage() {
  return <div className={css.contactPage}>
  <div className={css.contactTitle}>
    <Title text={Data[1].title} />
    </div>
    <div className={css.contactParagraph}>
    <Paragraph text={Data[1].paragraph} />
    </div>
    <div className={css.contactDetails}>
      <p className={css.email}>
        {Data[1].email}
      </p>
    </div>
  </div>;
}
