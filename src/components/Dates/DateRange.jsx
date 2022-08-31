
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
 import { format } from 'date-fns';
 
//styles
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

//styles.css
import './dates.css'
function DateRanges({range, setRange}) {
  //open  and close
  const [open, setOpen] = useState(false);
  //get the target element to toggle 
  const refOne = useRef(null);

  //useEffect
  useEffect(()=>{
      //set current date on component load
      document.addEventListener("keydown", hideOnEscape, true);
      document.addEventListener("click", hideOnClickOutside, true);
  }, []);
   
 //hide calendar on pressing escape key 
 const hideOnEscape =(e)=>{
  //console.log(e.key);
  if(e.key === "Escape"){
    setOpen(false);
  }
 }

 //hide calender on clicking outside 
 const  hideOnClickOutside =(e) =>{
    // console.log(refOne.current);
    // console.log(e.target);
    //setOpen(false);
    if(refOne.current && !refOne.current.contains(e.target)){
        setOpen(false);
    }
 }
//function to handle open
    const handleOpen = (open) => {
      if (open){
        setOpen(open);
      }else{
        setOpen(!open); 
      }
    }
//  console.log(range);
  return (
    <div className="calenderWrap">   
     
        {<input 
          className="date-picker"
          value={
              `${format(range[0].startDate,  'MM/dd/yyyy')} to ${format(range[0].endDate, 'MM/dd/yyyy')}`} 
                readOnly 
                // className="inputBox" 
                onClick={handleOpen}
                onChange={(e)=>setRange(e.target.value)}
          />}
    
      <div ref={refOne}>
        {open && <DateRange            
              onChange={(date) => {setRange([date.selection])}}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              ranges={range}
              month={1}
              direction="horizontal"
              className ="calenderElement"
              />}
      </div>
    </div>
  );
}

export default DateRanges;