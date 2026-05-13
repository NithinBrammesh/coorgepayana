import styles from "./Footer.module.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* COMPANY INFO */}
        <div className={styles.column}>
          <h3 className={styles.logo}>Coorg Payana</h3>

          <p className={styles.description}>
            Premium cab service for comfortable travel across Karnataka.
            Explore beautiful destinations like Coorg, Chikmagalur, Mysuru
            and nearby hill stations with safe and reliable drivers.
          </p>
        </div>

        {/* POPULAR ROUTES */}
        <div className={styles.column}>
          <h4 className={styles.title}>Popular Travel Routes</h4>

          <ul className={styles.list}>
            <li>Bengaluru → Coorg</li>
            <li>Mysuru → Coorg</li>
            <li>Mysuru → Chikmagalur</li>
            <li>Bengaluru → Chikmagalur</li>
            <li>Coorg → Mysuru</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles.column}>
          <h4 className={styles.title}>Contact Information</h4>

          <div className={styles.contactItem}>
            <FaPhoneAlt />
            <span>+91 80886 74166</span>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope />
            <span>roshanroshan55344@gmail.com</span>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt />
            <span>Thithimath 
 virajpet taluka 
Kodagu.Karnataka</span>
          </div>

          <div className={styles.socials}>
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Coorg Payana. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
