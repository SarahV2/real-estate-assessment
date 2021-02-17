import React from 'react';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import FacebookIcon from '../../assets/facebook.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div id='copyright'>جميع الحقوق محفوظة 2021</div>

            <div id='linksContainer'>

                <img
                    className='icons'
                    src={FacebookIcon}
                    alt='link to our facebook page'
                />

                <img
                    className='icons'
                    src={TwitterIcon}
                    alt='link to our twitter account'
                />
                <img
                    className='icons'
                    src={YoutubeIcon}
                    alt='link to our youtube channel'
                />



            </div>
        </div>
    );
}