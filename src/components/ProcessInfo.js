import React from 'react';
import StageDetails from './StageDetails';
import {process} from '../data'
export default function ProcessInfo() {
// This component handles the display
// of the different stages of the property ownership transfer process
  const list = process.map((subList, index) => {
    return <section key={index} className='content processContainer'>
        {subList.map((stage,sindex)=>{
            return (
                // displying each stage
                      <div className='detailedStage'>
                        <StageDetails key={sindex} data={stage} />
                        <div className='splitter'>
                          <div className='line'></div>
                        </div>
                      </div>
                    );
        })}
    </section>;
  });
  
  return (
    <section className='content' id='processInfo'>
      <p className='setionTitle'>كيف يتم نقل الملكية العقارية إلكترونيًا؟</p>
       <section className='content' id='splittedProcess'>
       {list}
      </section>
    </section>
  );
}
