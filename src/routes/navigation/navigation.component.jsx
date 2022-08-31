import React  from "react";
import { Link, Outlet} from "react-router-dom";
import { Fragment} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
//styles
import './navigation.css'

function Navigation(props) {
    return (
   <Fragment>
   
   <div className="nav">
   <div className="nav-container">
            <div className="logoContainer">                
                <FontAwesomeIcon icon={faCrown } className="logo" />
                <span className="log-header">The Crown Royals Hotel</span>
            </div>      
            <div className="nav-bar-pages">
                <ul className="nav-list">
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/roomsbook"}><li>Rooms</li></Link>
                    <Link to={"/explore"}><li>Explore</li> </Link>
                    {/* <Link><li>Contact</li></Link>
                    <Link> <li>Book Now</li></Link> */}
                </ul>
            </div>  
 </div>        
   </div>
     
   <Outlet />
        
   </Fragment>    
    )
}

export default Navigation;