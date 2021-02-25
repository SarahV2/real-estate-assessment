import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import HomeIcon from '../../assets/SideMenu/home.svg';
import LogoutIcon from '../../assets/SideMenu/sign-out.svg';
import './Layout.css'

class SideNav extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render(props) {
    return (
      <Menu {...props} right>
        <p disabled className=''>
          مرحبًا{' '}
        </p>
        <a className='' href='#'>
          الرئيسية <img className='mini-icon' src={HomeIcon} />
        </a>

        <a className='' href='#'>
          رابط 1
        </a>

        <a className='' href='#'>
          رابط 2
        </a>

        <a className='' href='#'>
          رابط 3
        </a>
        <a className='' href='#'>
         تسجيل الخروج <img className='mini-icon' src={LogoutIcon} /> 
        </a>
      </Menu>
    );
  }
}
export default SideNav;
