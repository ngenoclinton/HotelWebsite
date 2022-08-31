import React from "react";
//import RoomsCat from "../../roomsCategories";
import { Fragment } from "react";
//styles
import "./banner.css"

function RoomExplorer({type}) {
    return (        
        <Fragment>
                <div className={type==="roomsList" ?"room-explore-header listMode":"room-explore-header"}>
                    <div className={type==="roomsList" ?"rooms-icon listMode":"rooms-icon"}>
                    <h2 >Rooms</h2>
                    </div>
                    <img alt= "" className={type==="roomsList" ?"rooms-icon-image listMode":"rooms-icon-image"} src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                </div> 
                
                {/* <div className="room-type-explorer">
                {RoomsCat.map((room) =>(
                        <div key={room.id} className="room-container">
                            <img src={room.imageUrl} />
                        </div>
                    ))}
                </div> */}
    </Fragment>
      
    )
}
export default RoomExplorer;