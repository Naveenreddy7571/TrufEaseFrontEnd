import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Home/Homepage";
import Login from "./Components/Login/Login";
import PersonalInfo from "./Components/SignUp/PersonalInfo";
import Header from "./Components/Header/Header";
import Mybokkings from "./Components/MyBokkings/Mybokkings";
import Contactinfo from "./Components/SignUp/Contactinfo";
import Addground from "./Components/Ground/Addground"
import { useState } from "react";
import Booking from "./Components/Booking/Booking";
import BookingCard from "./Components/Booking/BookingCard";
function App() {
  const [userinfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    password: "",
    email: "",
    contactno: "",
    city: "",
    pincode: "",
  });


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <PersonalInfo userinfo={userinfo} setUserInfo={setUserInfo} />
          }
        />
        <Route 
          path="/contactinfo" element={<Contactinfo userinfo={userinfo} setUserInfo={setUserInfo} />} />

        <Route path="/mybookings" element={<Mybokkings />}></Route>
        <Route path="/add-ground" element={<Addground />}></Route>
        <Route path="/booking-page" element={<BookingCard /> }></Route>
        <Route path="/bookNow" element={<Booking />}></Route>
        <Route path="/add-ground" element={<Addground />}></Route>
        <Route  path="/mybookings" element={<Mybokkings />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
