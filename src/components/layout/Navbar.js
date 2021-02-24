import React from 'react'
import './Layout.css';
import Dropdown from './Dropdown';

export default function Navbar() {
    return (
        <nav id='navbar'>
        {/* Right section */}
        <div id='navPicContainer' className='navElement'>
          <div id='picPlaceholder'></div>
          <div id='borderLeft'></div>
        </div>
  
        {/* <!-- Middle section --> */}
        <div id='nav-middle' className='navElement'>
          <div id='titleImg'></div>
  
          <div id='pageTitle'>
            <div id='service-title'>خدمة</div>
            <div id='service-name'>نقل الملكية العقارية</div>
          </div>
        </div>
  
        {/* Left Section */}
        <div id='nav-left' className='navElement'>
          <div className='dropdownMenu'>
            <button className='dropdownBtn'>
              <span id='arrow'>&#9660;</span> مرحبًا
            </button>
            <Dropdown />
          </div>
  
          <div id='timer'>
            <p>8:46</p>
          </div>
        </div>
      </nav>
    )
}
