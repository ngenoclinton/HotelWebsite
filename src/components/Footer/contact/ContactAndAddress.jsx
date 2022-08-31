import React from 'react';
import './contactandaddress.css';

//fontawesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import MailList from '../MailList/mailList.component';


function ContactAddress(params) {
    return (
<div className='contact-address-container'>        
        <div className='address-container'>
            <div className='col-s-1 '>
                <p>500 Base Zimmer Street,</p>
                <p>Nairobi, CK 94158  |  +254-070-776-3494</p>
            </div>
            <div className='col-s-1 col-x-2'>
                <FontAwesomeIcon icon={faTwitter} className="socialIcon twitterIcon" />
                <FontAwesomeIcon icon={faFacebook} className="socialIcon facebookIcon" />

                <FontAwesomeIcon icon={faInstagram} className="socialIcon instagraIcon" />

                <button className='contact-btn'>Contact us</button>
            </div> 
            <div className='col-s-1 '>
             <p className='copyRightIcon'>© 2023 by The Crown Royals Hotel.</p>          
            </div>        
        </div>
        <div className='mail-List'>
            <MailList />
        </div>
    </div>
    )
}

export default ContactAddress;