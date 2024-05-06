import React from 'react';
import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import './Footer.scss'

function Footer(){
 return(
     <>
    <footer>
        <div className='legal-links'>
        <ul>
                <li> <Link to="/terms-of-service">Terms of Service</Link></li>
                <li> <Link to="/privacy-policy">Privacy Policy</Link></li>

              
            </ul>
        </div>
    </footer>
     </>
 )
}

export default Footer