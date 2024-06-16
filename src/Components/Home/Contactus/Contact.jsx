import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact_area_section_gap}>
      <div className={styles.contact_container}>
        <span className={styles.big_circle}></span>
        <div className={styles.form}>
          <div className={styles.contact_info}>
            <h3 className={styles.title}>Let's get in touch</h3>
            <p className={styles.text}>
              We're here to assist you. If you have any questions or need assistance, please feel free to reach out to us.
            </p>

            <div className={styles.contact_info}>
              <div className={styles.contactinformation}>
                <i className="fas fa-map-marker-alt"></i> &nbsp; &nbsp;
                <p>Indore, India</p>
              </div>
              <div className={styles.contactinformation}>
                <i className="fas fa-phone"></i>&nbsp;&nbsp;
                <p>+91 7247501405</p>
              </div>
              <div className={styles.contactinformation}>
                <i className="fas fa-clock"></i>&nbsp;&nbsp;
                <p>Mon to Fri 9 AM to 6 PM</p>
              </div>
            </div>

            <div className={styles.social_media}>
              <p>Connect with us:</p>
              <div className={styles.social_icons}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contact_form}>
            <span className={styles.circle_one}></span>
            <span className={styles.circle_two}></span>

            <form action="https://owner.bmtbookmyturf.com/contact-submit" method="post" className={styles.contactfoorm} noValidate autoComplete="off">
              <input type="hidden" name="_token" value="FJTsGXLpW5Yhq5GYnzYjerJgvFxl87w2pRUAQ3YK" autoComplete="off" />
              <h3 className={styles.title}>Contact us</h3>
              <div className={styles.input_container}>
                <input type="text" className={styles.input} id="name" name="name" placeholder="Name" required />
                <span className={styles.error_msg} id="name-error"></span>
              </div>
              <div className={styles.input_container}>
                <input type="email" name="email" id="email" className={styles.input} placeholder="Email" required />
                <span className={styles.error_msg} id="email-error"></span>
              </div>
              <div className={styles.input_container}>
                <input type="text" name="subject" id="subject" className={styles.input} placeholder="Subject" required />
                <span className={styles.error_msg} id="subject-error"></span>
              </div>
              <div className={styles.input_container}>
                <input type="tel" name="phone_number" id="phone_number" className={styles.input} placeholder="Phone" required />
                <span className={styles.error_msg} id="phone_number-error"></span>
              </div>
              <div className={styles.input_container_textarea}>
                <textarea name="message" id="message" className={styles.input} placeholder="Message" required></textarea>
                <span className={styles.error_msg} id="message-error"></span>
              </div>
              <button type="submit" value="submit" className={styles.btn_theme_btn_button_hover}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
