import React from 'react'

const partnersList=[{color:'#1D6A43'},{color:'#45CF94'},{color:'#2E988D'},{color:'#87C53F'}]
export default function Partners() {
    const icons=partnersList.map((box,index)=>(
        <div className='box' key={index} style={{backgroundColor:`${box.color}`}}/>
    ))
    return (
        <section className='content' id='ourPartners'>
          <p id='partnersTitle' className='setionTitle'>:شركاؤنا في البناء</p>
          <div id="iconsContainer">
          {icons}
          </div>
        </section>
    )
}
