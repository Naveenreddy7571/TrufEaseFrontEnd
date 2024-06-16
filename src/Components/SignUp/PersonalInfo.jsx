import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./regestration.module.css";

function PersonalInfo({ userinfo, setUserInfo }) {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/contactinfo");
  };

  return (
    <div className={styles.regestration_container}>
      <div className={styles.container}>
        <h2>Registration</h2>
        <div className={styles.form_container}>
          <form id="regestration_form" onSubmit={handleNext}>
            <label className={styles.rlabel}>FirstName</label>
            <input
              className={styles.registrationInput}
              type="text"
              name="firstname"
              value={userinfo.firstname}
              onChange={(event) =>
                setUserInfo({
                  ...userinfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <label className={styles.rlabel}>LastName</label>
            <input
              className={styles.registrationInput}
              type="text"
              name="lastname"
              value={userinfo.lastname}
              onChange={(event) =>
                setUserInfo({
                  ...userinfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <label className={styles.rlabel}>Gender:</label>
            <input
              id="gender"
              type="radio"
              name="gender"
              value="male"
              checked={userinfo.gender === "male"}
              onChange={() => setUserInfo({ ...userinfo, gender: "male" })}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={userinfo.gender === "female"}
              onChange={() => setUserInfo({ ...userinfo, gender: "female" })}
            />{" "}
            Female
            <label className={styles.rlabel}>Password</label>
            <input
              className={styles.registrationInput}
              type="password"
              name="password"
              value={userinfo.password}
              onChange={(event) =>
                setUserInfo({
                  ...userinfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <button type="submit" className={styles.button}>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
