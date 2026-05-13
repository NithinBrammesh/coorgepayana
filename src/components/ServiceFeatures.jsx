import styles from "./ServiceFeatures.module.css";

import {
  FaUserTie,
  FaCarSide,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

function ServiceFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}

        <div className={styles.left}>

          <span className={styles.kicker}>
            WHY CHOOSE US
          </span>

          <h2 className={styles.title}>
            Premium Cab Experience
            Across Karnataka
          </h2>

          <p className={styles.description}>
            Travel with professional drivers, luxury maintained
            vehicles and reliable customer support designed for
            comfortable journeys across Coorg, Mysuru,
            Chikmagalur and beyond.
          </p>

          <div className={styles.imageWrapper}>
            <img
              src="/images/cabimage.png"
              alt="Luxury Travel"
              className={styles.image}
            />
          </div>

        </div>

        {/* RIGHT FEATURES */}

        <div className={styles.right}>

          <div className={styles.cardLarge}>
            <div className={styles.icon}>
              <FaUserTie />
            </div>

            <div>
              <h3>Experienced Drivers</h3>

              <p>
                Skilled and friendly drivers with excellent
                knowledge of scenic routes and tourist spots.
              </p>
            </div>
          </div>

          <div className={styles.row}>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FaCarSide />
              </div>

              <h3>Clean Cars</h3>

              <p>
                Sanitized and premium maintained vehicles for
                comfortable travel.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FaShieldAlt />
              </div>

              <h3>Safe Journey</h3>

              <p>
                Secure rides with customer-first safety and
                trusted service.
              </p>
            </div>

          </div>

          <div className={styles.cardWide}>
            <div className={styles.icon}>
              <FaHeadset />
            </div>

            <div>
              <h3>24/7 Travel Assistance</h3>

              <p>
                Our support team is always available for
                bookings, trip updates and travel guidance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServiceFeatures;