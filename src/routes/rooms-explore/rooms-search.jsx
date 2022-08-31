import React, { useContext, useState } from "react";

//components imports 
import Footer from "../../components/Footer/Footer.component";
import RoomExplorer from "../../components/roomsBanner/room-banner";
import RoomDetails from "../../components/roomDetails/roomDetails.component";
import ListRoom from "../../components/list";
import Book from "./bookingDates/booking-dates";
// import { DataContext } from "../../components/roomsJson";
// import DatePicker from 
// import "./room-search.css";
import RoomsData from "../../components/RoomsData";
// import { Link } from "react-router-dom";

function Rooms({type}) {
  
  return (
   <div>
    <RoomExplorer
    type={type}/>
    
   <div className={type==="roomsList" ? "search-section listMode":"search-section"}> 
    <div> 
      <h2 className="rooms-search-title">Our Rooms</h2>
        </div>
      <div>
        <div>{type !== "roomsList" && <Book />}</div>
      </div>
      <div className={type==="roomsList" ?"search-rooms listMode": "search-rooms" }>      
        <ListRoom 
        type={type}
        
        />       
    </div>
    
  </div>   
    <div>{type !== "roomsList" && <Footer />}</div>
  </div>
    )
};

export default Rooms;
