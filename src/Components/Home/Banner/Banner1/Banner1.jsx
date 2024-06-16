import React from "react";
import bannerImg from "../../../../assets/crickettruf.jpg";
import styles from "./Banner1.module.css";
import { Link } from "react-router-dom";

function Banner1() {
  return (
    <div className={styles.Banner}>
      <div id="Home" className={styles.content}>
        <div className={styles.img}>
          <img src={bannerImg} alt="Cricket Turf"></img>
        </div>
        <div className={styles.description}>
          <h5>AWAY FROM MONOTONOUS LIFE</h5>
          <h1>Play Like Champ</h1>
          <p>
            Escape the ordinary, book your turf, and play like never before.
          </p>
          <button>
            <Link to={"/login"} style={{ textDecoration: "none" , color:"black"}}>
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
