import React from 'react';
import newRequest from '../assets/add.png';
import inquire from '../assets/requests@3x.png';

export default function Services() {
  return (
    <section className='content' id='ourServices'>
      <p className='setionTitle'>كيف نستطيع أن نقدم خدمتنا اليوم؟</p>
      <div className='servicesContainer'>
        {/* New */}
        <div className='serviceType active' id='newRequest'>
          <div className='imageContainer'>
            <img
              className='serviceImage'
              src={newRequest}
              alt='create a new request'
            ></img>
          </div>
          <p className='serviceDescription'>طلب جديد</p>
        </div>
        {/* Existing */}
        <div className='serviceType'>
          <div className='imageContainer'>
            <img
              className='serviceImage'
              src={inquire}
              alt='inquire about an existing request'
            ></img>
          </div>
          <p className='serviceDescription'>متابعة الطلبات</p>
        </div>
      </div>
    </section>
  );
}
