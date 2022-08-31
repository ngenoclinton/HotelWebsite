import React, { useState } from 'react';
import {useParams, Link } from 'react-router-dom';
// svg
import LeftArrow from '../../assets/arrow-left-solid.svg';

//components
import Footer from '../Footer/Footer.component';
import RoomExplorer from '../roomsBanner/room-banner';
import DatePicker from '../Dates/DatePicker';
//Json
import RoomsData from '../RoomsData';
//css 
import './roomdetails.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const RoomDetails = ({type}) => {
    let {id} = useParams();
    const details= RoomsData.filter((room, index)=> { return room._id === id});

    return (
    <div>
    <RoomExplorer />
    <div className="details-container">
        {details.map(room =>(
      <div key={room.id} >
            <div className="bvt">
              <span className="bvtl"><Link to="/roomsbook"><FontAwesomeIcon icon={faArrowLeft} /></Link></span>
              <span className="bvtl">|</span>
              <span className="bvtl">  {room.title}</span>
            </div>
                
         <div className='details-section'>   
           <div className="details det-chld">         
                    <div className='image-container detail'>
                      <img src= {room.imageUrl} alt="room"/>
                    </div>
                    <div className='detail'>
                      <h3>properties:</h3>
                      <span className="siDesc">Size: {room.description.size}</span>
                        <span className="siDesc">beds: {room.description.beds}</span>
                    </div>
                    <div className='detail'> 
                      <h3>more Info:</h3> 
                      <p className="siDesc desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='detail'>
                      <h3>Amenities:</h3>
                    </div>
                    <div className='detail'>
                      <h3>Terms:</h3>
                      <p>Read Our <Link to="">Terms&Policies</Link></p>
                    </div>                      
          </div>
              <div className='dates-detail det-chld'>
                <div className='detail-room-price'>
                  <div className='vtl'></div>
                  <div>
                    <span >From</span>
                    <h3>{`$${room.price}`}</h3>
                    <span>Per Night</span>
                  </div>
                </div>
                <span className='detail-dates-select'>
                    <DatePicker />
                    <div className='detail-angle-arrow detail-angle-arrow-ch1'>
                    <FontAwesomeIcon icon={faAngleUp} />
                    <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <span >1 Adults</span>
                    <span >0 Kids</span>  
                    <div className='detail-angle-arrow detail-angle-arrow-ch2'>
                    <FontAwesomeIcon icon={faAngleUp} />
                    <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </span>
              </div>
        </div>

      </div> ))} 
  </div>

      <div>{type !== "roomsList" && <Footer />}</div>
  </div>
    )
};

export default RoomDetails;

