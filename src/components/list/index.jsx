import React, { useContext, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';


import RoomsData from '../RoomsData';
import "./room-search.css";
// components imports 
console.log(RoomsData);


const ListRoom = ({type}) => {
// let navigate = useNavigate();
return (
   <div>
     {
      RoomsData.map((room) =>(
        <div  key={room._id} className={type==="roomsList" ? "rooms-search-container listMode" : "rooms-search-container"}>
           <div className={type==="roomsList" ?"search-item si-image listMode":"search-item si-image"}>    
           <Link to={`/roomsbook/${room._id}`}>  
            <img src= {room.imageUrl} alt=""
                className={type==="roomsList" ?"image listMode" : " image"} />
              
              <button 
                className={type==="roomsList" ? "btn-text more-btn listMode":"btn-text more-btn"}>More Info</button> </Link>
            </div>
           
            <div className={type==="roomsList" ?"description search-item listMode": "description search-item"} >
                  <h3 className="siDesc">{room.title}</h3>
                  <p className="siDesc desc">description here</p>
                  <span className="siDesc">Size: {room.description.size}</span>
                  <span className="siDesc">beds: {room.description.beds}</span>
              
            </div>
      
            <div className={type==="roomsList" ?"search-item s-price listMode":"search-item s-price"}>
            <p>from</p>
              <p className="">{`$${room.price}`}</p> 
              <button className="more-btn">Book Now</button>
            </div>
          </div> 
          ))}  
          </div>
    )
}

export default ListRoom