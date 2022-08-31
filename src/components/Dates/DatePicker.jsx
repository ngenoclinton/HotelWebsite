
import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { DateRange } from 'react-date-range';
import { Calendar } from 'react-date-range';
 import { format } from 'date-fns';
 import { addDays} from 'date-fns';

 
//styles
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './dates.css'

function DatePicker() {
  
  // date state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  
  //open  and close
  const [open, setOpen] = useState(false);
  //get the target element to toggle 
  const refOne = useRef(null);

  //useEffect
  useEffect(()=>{
      //set current date on component load
      setCheckIn(('MM DD YYYY'))
      setCheckOut(('MM DD YYYY'))
      document.addEventListener("keydown", hideOnEscape, true);
      document.addEventListener("click", hideOnClickOutside, true);
      
  }, []);
   
 //hide calendar on pressing escape key 
 const hideOnEscape =(e)=>{
  console.log(e.key);
  if(e.key === "Escape"){
    setOpen(false);
  }
 }

 //hide calender on clicking outside 
 const  hideOnClickOutside =(e) =>{
    // console.log(refOne.current);
    // console.log(e.target);
    if(refOne.current && !refOne.current.contains(e.target)){
        setOpen(false);
    }
 }
 //function to handle date selection 
 const [range, setRange] = useState([
  {
    startDate: new Date(),
    endDate:addDays(new Date(), 3),
    key: "selection",
  },
]);
  const handleSelect =(date, end) => {
        // console.log(format(date, 'MM/dd/yyyy'));
        // setCheckIn(format(date, 'MM/dd/yyyy'));
        // setCheckOut(format(end, 'MM/dd/yyyy'));
        // setDate(format(date, 'MM/dd/yyyy'));
        setRange([date.selection])
      }
  
  return (
    <>
    {/* <h5>Calendar:{calendar}</h5> */}
    <div className="">
    {/* <span className='select' > select date</span> */}
    <input
        value={`${format(range[0].startDate,  'MM/dd/yyyy')}`} 
        readOnly 
        className="date_input_box" 
        onClick={()=>{setOpen(open => !open)}}
        onChange={(e)=>setRange(e.target.value)}
      />
      <input
        value={`${format(range[0].endDate,  'MM/dd/yyyy')}`} 
        readOnly 
        className="date_input_box" 
        onClick={()=>{setOpen(open => !open)}}
        onChange={(e)=>setRange(e.target.value)}
      />
      
      <div ref={refOne}>
        {open && <DateRange            
                // onChange={(date) => {setRange([date.selection])}}
                onChange = {handleSelect}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
                ranges={range}
                month={1}
                direction="vertical"
                className ="datePicker"
                />}
        </div>
    </div>
    </>
  );
}

export default DatePicker;