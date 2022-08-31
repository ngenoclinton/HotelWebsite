import React from 'react';
import ContactAddress from './contact/ContactAndAddress';
import './footer.css';

function Footer() {
    return(
        <div className="footer">
        <div className="footer-container">
            <ContactAddress />
        </div>
            
        </div>
    )
}

export default Footer;
