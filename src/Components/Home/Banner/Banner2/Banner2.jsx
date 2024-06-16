import React from "react";
import "./Banner2.css";
import image from "../../../../assets/bannerimg1.jpg";
function Banner2() {
  return (
    <div className="about" id="About">
      <h1 className="titlee">About Truf Ease</h1>
      <div className="Container">
        <div className="desciption">
          <p>
            {" "}
            Book My Turf, your premier turf booking agency, simplifies sports
            venue reservations. With our user-friendly platform, athletes secure
            playtime hassle-free. Explore a wide array of top-notch facilities,
            from cricket pitches to football fields. Elevate your game with BMT
            and experience convenience, quality, and unparalleled service, every
            booking.
          </p>
        </div>
        <img src={image}></img>
      </div>
    </div>
  );
}

export default Banner2;
