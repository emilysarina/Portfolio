import React from 'react';
import css from './contactPage.module.css';
import Title from '../../Components/Title/Title';
import Paragraph from '../../Components/Paragraph/Paragraph'


export default function ContactPage() {
  return <div className={css.contactPage}>
  <div className={css.contactTitle}>
    <Title text={'Get in Touch!'} />
    </div>
    <div className={css.contactParagraph}>
    <Paragraph text={'I’m always happy to have a chat or answer any questions. Say hi and I’ll do my best to get back to you as soon as I can!'} />
    </div>
    <div className={css.contactDetails}>
      <p className={css.email}>
        emy.sarina@gmail.com
      </p>
      <p className={css.phoneNo}>
        07425163740
      </p>
    </div>
  </div>;
}
