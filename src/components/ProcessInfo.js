import React from 'react';
import StageDetails from './StageDetails';
import { process } from '../data';
import '../../node_modules/bootstrap-steps/dist/bootstrap-steps.min.css';

export default function ProcessInfo() {
  /* This component handles the display
  // of the different stages of the property ownership transfer process */

  const list = process.map((stage, index) => {
    return <StageDetails key={index} data={stage} />;
  });

  return (
    <section className='content' id='processInfo'>
      <p className='setionTitle'>كيف يتم نقل الملكية العقارية إلكترونيًا؟</p>

      <ul className='steps'>{list}</ul>
    </section>
  );
}
