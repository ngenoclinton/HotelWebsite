import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from "react-router-dom";


import {format} from 'date-fns';
import "./list.css"
import Options from '../../components/options/options';
import Rooms from '../rooms-explore/rooms-search';
import Footer from '../../components/Footer/Footer.component';

function List(){

    const location = useLocation();
    console.log(location);
    const [range, setRange] = useState(location.state.range);
    const [options, setOptions] = useState(location.state.options);
    const[open, setOpenDate] = useState(false);

    //handle input change 
    function handleOPtionChange (event) {  
      setOptions(event.target.value);
    }
return(
  <div>   
    <div className="listContainer">
      <div className="listWrapper">
         <div className='listSearch'>
            <h1 className="list-header">Search</h1>  
          <div className='lsOptionsContainer'>
            <div className='listItem'>  
                <label>Check-In Date</label>
                  <span onClick={()=>setOpenDate(!open)}>
                      {`${format(range[0].startDate, 'MM/dd/yyyy')}`}
                  </span>
            </div>
            <div className='listItem'>  
              <label>Check-Out Date</label>
                  <span onClick={()=>setOpenDate(!open)}>
                      {`${format(range[0].endDate, 'MM/dd/yyyy')}`}
                  </span>
            </div>
            <div className='listItem'>  
              <div><label>Options</label></div>
                <div className='lsOptions'>
                  <div className='lsOptionItem'>  
                    <span lassName='lsOptionText'>Min Price <small>per night</small></span>
                    <input type="number"
                      className='lsOptionInput'       
                   // onChange={(e) = setOptions(e.target.value)}
                      />
                  </div>
                  <div className='lsOptionItem'>  
                    <span lassName='lsOptionText'>Max Price <small>per night</small></span>
                    <input type="number"
                      className="lsOptionInput"      
                    // onChange={(e) = setOptions(e.target.value)}
                    />
                  </div>
                  <div className='lsOptionItem'>  
                    <span className='lsOptionText'>Adult </span>
                    <input type="number"
                      className="lsOptionInput"     
                      value={options.adults}
                      placeholder={options.adults}
                      onChange={handleOPtionChange}
                      min={1}/>
                  </div>
                  <div className='lsOptionItem'>  
                      <span className='lsOptionText'>Kids</span>
                      <input
                        type="number"
                        className="lsOptionInput"  
                        placeholder={options.kids}                  
                        value={options.kids}
                        onChange={handleOPtionChange}
                              min={0}/>
                  </div>
                  <div className='lsOptionItem'>  
                    <span className='lsOptionText'>Rooms</span>
                    <input type="number"
                    className="lsOptionInput"     
                    placeholder={options.rooms}               
                    value={options.rooms}
                    onChange={handleOPtionChange}
                    min={1}/>
                  </div>
                  {/* {open && <DateRange 
          onChange={item => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          minDate={new Date()}
          ranges={range}
          month={1}
          direction="horizontal"
          className ="calender" />} */}
                </div>
            </div>
            
            <button className="btn lsbtn">Search</button>  
          </div>  
                                  
          </div>
       
          {open && <DateRange 
          onChange={item => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          minDate={new Date()}
          ranges={range}
          month={1}
          direction="horizontal"
          className ="calender" />}
          <div className="listResults"> 
              <Rooms 
                className="result-sect"
                type="roomsList"/>
          </div>
      </div>
    </div>
<Footer />
  </div>
       
    )
}

export default List;