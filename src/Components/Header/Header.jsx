import React from 'react';
import logo from '../../assets/Logo.png';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    const handleLogout = () => {
        // Your logout logic here
    };

    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.menu}>
                <ul className={styles.ull}>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><a href='#contact'>Contact us</a></li>
                    <li><a href='#About'>About us</a></li>
                    <li>
                        {!localStorage.getItem('token')? (
                            <ul className={styles.min}>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/register">Register</NavLink></li>
                            </ul>
                        ) : (
                            <button className={styles.logoutBtn} onClick={handleLogout}>LOGOUT</button>
                        )}
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    );
}
