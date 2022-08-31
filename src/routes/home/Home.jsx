import React, { Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Outlet} from "react-router-dom";
import { addDays} from 'date-fns';

//fontawsome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'

// components 
import DateRanges from "../../components/Dates/DateRange";
import Options from "../../components/options/options";

//styles
import "./home.css"
import Footer from "../../components/Footer/Footer.component";


function Home() {
      const [options, setOptions] = useState({
            adults:1,
            kids:0,
            rooms:1
      })
      // date state
  const [range, setRange] = useState([
      {
          startDate: new Date(),
          endDate:addDays(new Date(), 7),
          key: 'selection'
        }
    ]);
      const handleOption = (name, operation) => {
            setOptions((prev) => {
                 return {...prev, [name]: operation === "i" ? options[name] + 1 : options[name] -1}
            })
      }
     const [open, setOpen] = useState(false);
     //navigate
      const navigate = useNavigate();

      const handleSearch = () =>{
            navigate("/rooms", { state: {range, options} });
      }
      
    return (
      
            <Fragment>
                  {/* {console.log(options)}
                  {console.log(range)} */}
            <Outlet />
            <div className="home-container">   

                  <div className="room-search banner">
                        <h2 className="baner-title">Book Your Stay</h2>
                         <div className="date-picker-container">
                              {<div className="booking-search-Container" >            
                              <FontAwesomeIcon icon={faCalendarDays} className="inputIcon calendarIcon" />
                              <DateRanges
                                    setRange={setRange}
                                    range={range}
                                    onClick={()=>setOpen(!open)}
                              />
                              </div>}
                        </div>
                        <Options 
                              open ={open}
                              setOpen={setOpen} 
                              handleOption ={handleOption}
                              options={options}
                        />
                        <div>           
                        <button type="button" className="btn" onClick={handleSearch} >Search</button>
                        </div> 
                  </div>
                  
            </div>
            <Footer />
            </Fragment>      
    )
}

export default Home; 
//     // disable past dates after selection
//    const disablePastDates = current => {
//     return  current&&current < moment().endOf('day');     
//    }
//    //ok function. 
//     const onOk = (value)=> {
//       console.log('onOk:', value);
//     };