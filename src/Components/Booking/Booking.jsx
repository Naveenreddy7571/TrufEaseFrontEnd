import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Card.module.css';

function Booking() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dataString = searchParams.get('data');
  let data = {};

  try {
    data = JSON.parse(decodeURIComponent(dataString));
    console.log("Received data:", data);
  } catch (error) {
    console.error("Error decoding data:", error);
    data = {}; 
  }

  const timeSlots = [
    "06:00 AM - 07:00 AM",
    "07:00 AM - 08:00 AM",
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
    "08:00 PM - 09:00 PM",
    "09:00 PM - 10:00 PM"
  ];

  return (
    <div className={styles.whole}>
      <div className={styles.card}>
        <div className={styles.cardheader}>
          <h1>Enjoy your turf</h1>
        </div>
        <div className={styles.cardbody}>
          {data && data.img ? (
            <div>
              <img className={styles.imm} src={data.img} alt='ground'/><br />
              <strong>Data:</strong> {data.data}<br />
              <strong>Price:</strong> <span style={{color: 'yellow',fontWeight: 900}}>{data.price}</span>
            </div>
          ) : (
            <div>
              <p>No data available.</p>
            </div>
          )}
          <hr></hr>
          <div className={styles.booking}>
            <div className={styles.bookinginput}>
              <label>Booking Date</label>
              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
            <div className={styles.bookinginput}>
              <label>Booking Time Slot</label>
              <select>
                <option value="" disabled selected>Select Time Slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
          <button className={styles.bookbutton}>Book Ground</button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
