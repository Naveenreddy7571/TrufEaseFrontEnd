import React from "react";
import styles from "./regestration.module.css";

function Contactinfo({ userinfo, setUserInfo }) {
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(userinfo);
  };

  return (
    <div className={styles.regestration_container}>
    <div className={styles.container}>
      <h2>Contact Info</h2>
      <div className={styles.form_container}>
        <form onSubmit={handleSumbit}>
          <label  className={styles.rlabel}>Email id</label>
          <input
          className={styles.registrationInput}
            type="text"
            name="email"
            value={userinfo.email}
            onChange={(e) => setUserInfo({ ...userinfo, [e.target.name]: e.target.value })}
          />
          <label  className={styles.rlabel}>Contact No</label>
          <input
          className={styles.registrationInput}
            type="text"
            name="contactno"
            value={userinfo.contactno}
            onChange={(e) => setUserInfo({ ...userinfo, [e.target.name]: e.target.value })}
          />
          <label  className={styles.rlabel}>City</label>
          <input
          className={styles.registrationInput}
            type="text"
            name="city"
            value={userinfo.city}
            onChange={(e) => setUserInfo({ ...userinfo, [e.target.name]: e.target.value })}
          />
          <label  className={styles.rlabel}>Pincode</label>
          <input
          className={styles.registrationInput}
            type="text"
            name="pincode"
            value={userinfo.pincode}
            onChange={(e) => setUserInfo({ ...userinfo, [e.target.name]: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contactinfo;
