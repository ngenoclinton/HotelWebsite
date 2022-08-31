import React from 'react';
import './mailList.css';

function MailList(){
    return (
        <div className="mail-list-container">
            <div>
                <p>Join our mailing list</p>
            </div>

            <div className='mail-box'>
                <input type="email" name="email" placeholder='Enter your email address'></input>
                <button>Subscribe Now</button>
            </div>
        </div>
    )
}

export default MailList;