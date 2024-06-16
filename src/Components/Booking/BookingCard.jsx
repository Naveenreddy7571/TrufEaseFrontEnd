import React from 'react';
import dataa from '../../Data/data.js';
import { useNavigate } from 'react-router-dom';
import styles from './BookingCard.module.css';

function BookingCard() {
  const navigate = useNavigate();

  const handleBookClick = (ground) => {
    // Serialize the ground object to a JSON string
    const serializedData = encodeURIComponent(JSON.stringify(ground));
    // Redirect to the BookNow page with the serialized data
    console.log("Sending data:", ground);
    navigate(`/bookNow?data=${serializedData}`);
  };

  return (
    <div className={styles.cardscontainer}>
      {dataa.map((ground, index) => (
        <div className={styles.card2} key={index}>
          <img className={styles.card2img} src={ground.img} alt="ground" />
          <h2 className={styles.card2pric}>{ground.price}</h2>
          <h3>{ground.location}</h3>
          <p className={styles.card2data}>{ground.data}</p>
          <button className={styles.btnbook} onClick={() => handleBookClick(ground)}>BOOK NOW</button>
        </div>
      ))}
    </div>
  );
}

export default BookingCard;
