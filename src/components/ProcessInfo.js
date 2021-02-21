import React from 'react';
import StageDetails from './StageDetails';
const process = [
  [
    {
      id: 1,
      imgSrc: require('../assets/bank.png'),
      description: 'البائع (المالك) يقوم باختيار صك',
    },
    {
      id: 2,
      imgSrc: require('../assets/bank.png'),
      description: 'المشتري يقبل الطلب من قائمة الطلبات',
    },
    {
      id: 3,
      imgSrc: require('../assets/bank.png'),
      description: 'الوزارة تقوم بإنشاء حساب بنكي وسيط',
    },
  ],
  [
    {
      id: 4,
      imgSrc: require('../assets/bank.png'),
      description: 'يقوم المشتري بتحويل المال إلى الحساب',
    },
    {
      id: 5,
      imgSrc: require('../assets/bank.png'),
      description: 'الوزارة تقوم بنقل الملكية للمشتري، والمال للبائع',
    },
    {
      id: 6,
      imgSrc: require('../assets/bank.png'),
      description: 'انتهاء الطلب شكرًا لاستخدام الخدمة',
    },
  ],
];
export default function ProcessInfo() {
  //   const list = process.map((step, index) => {
  //     return (
  //       <div className='detailedStage'>
  //         <StageDetails key={index} data={step} />
  //         <div className='splitter'>
  //           <div className='line'></div>
  //         </div>
  //       </div>
  //     );

  //   });

  const list = process.map((subList, index) => {
    return <section className='content' id='processContainer'>
        {subList.map((step,sindex)=>{
            return (
                      <div className='detailedStage'>
                        <StageDetails key={index} data={step} />
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
      {/* <section className='content' id='processContainer'>
        {list}
      </section>

      <section className='content' id='processContainer'>
        {list}
      </section> */}

    </section>
  );
}
