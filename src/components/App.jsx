import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "../routes/home/Home";
import Navigation from "../routes/navigation/navigation.component";
import Rooms from "../routes/rooms-explore/rooms-search";
import List from "../routes/List/list.component";
// import Room from "./Room/room.component";
import Explore from "../routes/Explore/explore";
import RoomDetails from "./roomDetails/roomDetails.component";
// import RoomsCat from "../../components/roomsTypes";
import ListRoom from "./list";

// import contexts
import {DataContext} from "./RoomsData"

function App() {
 
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route index element={ <Home/>}/>
          <Route exact path="/roomsbook" element={<Rooms  />} />
          <Route path="/roomsbook/:id" element={<RoomDetails/>} />
          <Route path="/roomdetails" element={<ListRoom />}></Route>
          <Route path="/rooms" element={<List />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
        </Route>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
//room={RoomsCat}