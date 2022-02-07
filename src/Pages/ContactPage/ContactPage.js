import React from 'react';
import css from './contactPage.module.css';
import Title from '../../Components/Title/Title';
import Paragraph from '../../Components/Paragraph/Paragraph'


export default function ContactPage() {
  return <div className={css.contactPage}>
    <Title text={'Get in Touch!'} />
    <Paragraph text={'I’m always happy to have a chat or answer any questions. Say hi and I’ll do my best to get back to you as soon as I can!'} />
  </div>;
}
