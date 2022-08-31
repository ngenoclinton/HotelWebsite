import React, { useState } from   'react';
import  photos from "../../components/photos"

import Footer from '../../components/Footer/Footer.component';

// import { FontAwesomeIcon} 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark  } from '@fortawesome/free-solid-svg-icons'

//styles 
import "./explore.css"

function Explore(){

    const [sliderNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (index)=>{
          setSliderNumber(index);
          setOpen(true);
    }
    const close=() => {
        setOpen(false);
    }
    
const handleMove = (direction) => {
    let newSliderNumber; 
  if(direction === "l"){
     newSliderNumber = sliderNumber === 0 ? 6 : sliderNumber - 1;
  }else if(direction === "r"){
    newSliderNumber = sliderNumber === 6 ? 0 : sliderNumber + 1;
  }

  setSliderNumber(newSliderNumber);
};

    return (
    <div className="explore-container">
     
      
     {open && <div className="slider">
     <FontAwesomeIcon icon={faCircleArrowLeft} className="sliderIcons arrow-left arrow" onClick={()=>handleMove("l")}/>
     <div className="slider-wrapper"><img key={photos[sliderNumber].id} src={photos[sliderNumber].src} className="slider-Image"/></div>
      <FontAwesomeIcon icon={faCircleArrowRight} className="sliderIcons arrow arrow-right" onClick={()=>handleMove("r")}/>
      <FontAwesomeIcon icon={faCircleXmark} className="sliderIcons close" onClick={close}/>
     </div>}
      <div className="rooms-wrapper">
      <div className="room-Images">
           { photos.map((photo, index) => (
            <div className="room-image-wrapper">
            <img key={photo.id} src={photo.src} alt={photo.title} className="room-Image" onClick={()=>handleOpen(index)}/>
            </div>
            ))}
        </div>
      </div>
    <Footer />
    </div>
)}

export default Explore;