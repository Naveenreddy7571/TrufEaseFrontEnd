import React, { useState } from "react";
import groundimg from "../../assets/crickettruf.jpg";
import styles from './Mybokking.module.css'

function Mybokkings() {
  let bookingList = [
    {
      groundImg: groundimg,
      groundName: "chinna swamy stadium",
      bookingId: "3600",
      customerName: "Naveen",
      customerContact: "6281521333",
      bookingDate: "24-02-2024",
      bookingTimeSlot: "3:00 - 4:00",
      totalPayableAmount: "2000",
      bookingStatus: "Booked",
    },
    {
      groundImg: groundimg,
      groundName: "chinna swamy stadium",
      bookingId: "3600",
      customerName: "Naveen",
      customerContact: "6281521333",
      bookingDate: "24-02-2024",
      bookingTimeSlot: "3:00 - 4:00",
      totalPayableAmount: "2000",
      bookingStatus: "Booked",
    },

    {
      groundImg: groundimg,
      groundName: "chinna swamy stadium",
      bookingId: "3600",
      customerName: "Naveen",
      customerContact: "6281521333",
      bookingDate: "24-02-2024",
      bookingTimeSlot: "3:00 - 4:00",
      totalPayableAmount: "2000",
      bookingStatus: "Booked",
    },
    {
      groundImg: groundimg,
      groundName: "chinna swamy stadium",
      bookingId: "3600",
      customerName: "Naveen",
      customerContact: "6281521333",
      bookingDate: "24-02-2024",
      bookingTimeSlot: "3:00 - 4:00",
      totalPayableAmount: "2000",
      bookingStatus: "Booked",
    },
    {
      groundImg: groundimg,
      groundName: "chinna swamy stadium",
      bookingId: "3600",
      customerName: "Naveen",
      customerContact: "6281521333",
      bookingDate: "24-02-2024",
      bookingTimeSlot: "3:00 - 4:00",
      totalPayableAmount: "2000",
      bookingStatus: "Booked",
    }
  ];
  

  const [bookinginfo, setBookinginfo] = useState(bookingList);

  return (
    <div className={styles.mybooking_container}>
      <h1>My Bookings</h1>
      <table className={styles.booking_info_table}>
        <thead>
          <tr>
            <th>Ground Img</th>
            <th>Ground Name</th>
            <th>Booking ID</th>
            <th>Customer Name</th>
            <th>Customer Contact</th>
            <th>Booking Date</th>
            <th>Booking Time Slot</th>
            <th>Total Amount Paid</th>
            <th>Booking Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((bookingObj, index) => (
            <tr key={index}>
              <td><img src={bookingObj.groundImg} alt="Ground" style={{height: '50px', width: '50px'}} /></td>
              <td>{bookingObj.groundName}</td>
              <td>{bookingObj.bookingId}</td>
              <td>{bookingObj.customerName}</td>
              <td>{bookingObj.customerContact}</td>
              <td>{bookingObj.bookingDate}</td>
              <td>{bookingObj.bookingTimeSlot}</td>
              <td>{bookingObj.totalPayableAmount}</td>
              <td>{bookingObj.bookingStatus}</td>
              <tr><td><button id="booking-btn">Cancel</button></td></tr>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default Mybokkings;
