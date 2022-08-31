import React from 'react';

//fontawsome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPerson} from '@fortawesome/free-solid-svg-icons'

function Options({open, setOpen, handleOption, options}){
    return(
        <div className="guest-search-Container">
        <div className="guest-book">
              <FontAwesomeIcon icon={faPerson} className="inputIcon personIcon" />
              <span onClick={()=> setOpen(!open)} className="search-text">Adults: {options.adults} Children: {options.kids} Rooms: {options.rooms}</span>
        </div>                
          
          {<div className="options">
              <div className="option-item">
                    <span className="optionText">Adult:</span>
                    <div className="optionCounter">
                          <button
                          disabled={options.adults <= 1}
                          className="optionCounterBtn" 
                          onClick={()=>handleOption("adults","d")}>-</button>

                          <span className="optionCounterNumber">{options.adults}</span>
                          <button
                           className="optionCounterBtn" 
                           onClick={()=>handleOption("adults","i")}>+</button>
                    </div>
                   
              </div>
              <div className="option-item">
                    <span className="optionText">Kids: </span>
                    <div className="optionCounter">
                          <button 
                          disabled={options.kids <= 0}
                          className="optionCounterBtn" 
                          onClick={()=>handleOption("kids","d")}>-</button>

                          <span className="optionCounterNumber">{options.kids}</span>
                          <button 
                          className="optionCounterBtn" 
                          onClick={()=>handleOption("kids","i")}>+</button>
                    </div>
                    
              </div>
              <div className="option-item">
                    <span className="optionText">Room: </span>
                    <div className="optionCounter">
                          <button
                           disabled={options.rooms <= 1} 
                           className="optionCounterBtn" 
                           onClick={()=>handleOption("rooms","d")}>-</button>

                          <span className="optionCounterNumber">{options.rooms}</span>
                          <button 
                          className="optionCounterBtn" 
                          onClick={()=>handleOption("rooms","i")}>+</button>
                    </div>
                    
              </div>
         </div>}
  </div>

    )
}

export default Options;