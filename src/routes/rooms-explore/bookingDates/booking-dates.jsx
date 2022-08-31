import React, {useState, useRef, useEffect} from "react";
import { addDays} from 'date-fns';

//STYLES CSS 
import "./booking-dates.css"; 
import { DateRange } from "react-date-range";

const Book =() => {
    function formatDate (dateObject) {
        const parts = {
            date: dateObject.getDate(),
            month:dateObject.getMonth() + 1,
            year:dateObject.getFullYear(),
            hour:(dateObject.getHours() % 12)|| 12,
            minutes:dateObject.getMinutes().toString().padStart(2, "0"),
            amOrPm:dateObject.getHours < 12 ? "Am" : "PM"
        };
  
        console.log(parts);  
        return parts;
  }
  
  let myDate = new Date();
  const myDateFormatted = formatDate(myDate)
  console.log(myDateFormatted); 

  //using state 
  const [dates, setDates] = useState([]);
   
const {dateIn, dateOut} = dates;

const currentDateIn = useRef(new Date());
//console.log(currentDateIn.current.value);
console.log(currentDateIn);

useEffect(() => { 
    currentDateIn.current = dateIn;
 }, [dateIn]);

 const [greaterThan, setGreaterThan] = useState(0);
// //form fields reset
// const resetFormFields = () => {
//     setDate(defaultFormFields);
// };
  const handleDatePick = (event) => {
         const {name, value} = event.target;
         setDates((prev) => {
            return {...prev, [name]: value}
      })
  }
// console.log(dates[0].startDate);
// console.log(dates[0].endDate);

    return (
       <div className="booking-dates-container">
             
            <div>
                <div className="checkout-header-container">
                    <div className="header-block">
                    Check-in
                    </div>
                    <div className="header-block">
                    check-out
                    </div>
                    <div className="header-block">
                    Adults
                    </div>
                    <div className="header-block">
                    Kids
                    </div>
                    
                </div>
            </div>  
            <div className="room-booking">
                <div>
                <form action="action" className="bookingform">
                   
                   <input 
                   ref={currentDateIn}
                   type="date" 
                   placeholder="dd-mm-yyyy" 
                   name='dateIn' 
                   value={dateIn || ""} 
                   min="2022-07-25"
                   onChange={handleDatePick}
                   className='dateIn'
                   /> 
                    
                    <input type="date" 
                    placeholder="dd-mm-yyyy"
                    name='dateOut'
                    value={dateOut || ""}
                    min={dateIn}
                    onChange={handleDatePick} 
                    className='dateOut'
                   />
                    
                    <input type="number" 
                    placeholder="Adults"
                    defaultValue={greaterThan}
                    onChange={(e) =>setGreaterThan(e.target.value)}
                    />
                     
                    <input type="number" 
                    defaultValue={greaterThan} 
                    onChange={(e) =>setGreaterThan(e.target.value)}
                    placeholder="Kids"
                    />
                    
                    </form>
                </div>
                <div>
                     <button className="search-btn">Book</button>
                </div>
            </div>
            <div className="date-range-selected">
            <span>Results for:  <b>{myDateFormatted.month},{myDateFormatted.date}, {myDateFormatted.year} | {1}night(s)</b></span>
            <span>Check-In:{dateIn} Check-Out:{dateOut}</span>
            <span>Clear</span>
            </div>
       </div>
    )
}

export default Book; 
