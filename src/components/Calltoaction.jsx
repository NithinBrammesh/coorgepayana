import styles from "./Calltoaction.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function CallToAction() {
  return (
    <section className={styles.section}>
      {/* Animated Circuit Background */}
      <div className={styles.circuitBackground}>
        <svg className={styles.circuit} viewBox="0 0 1200 600">
          {/* Horizontal Lines */}
          <line x1="0" y1="100" x2="300" y2="100" className={styles.line} />
          <line x1="400" y1="100" x2="800" y2="100" className={styles.line} />
          <line x1="900" y1="100" x2="1200" y2="100" className={styles.line} />
          
          <line x1="0" y1="250" x2="200" y2="250" className={styles.line} />
          <line x1="300" y1="250" x2="600" y2="250" className={styles.line} />
          <line x1="700" y1="250" x2="1200" y2="250" className={styles.line} />
          
          <line x1="0" y1="400" x2="400" y2="400" className={styles.line} />
          <line x1="500" y1="400" x2="900" y2="400" className={styles.line} />
          <line x1="1000" y1="400" x2="1200" y2="400" className={styles.line} />
          
          {/* Vertical Lines */}
          <line x1="200" y1="0" x2="200" y2="200" className={styles.line} />
          <line x1="200" y1="300" x2="200" y2="600" className={styles.line} />
          
          <line x1="500" y1="0" x2="500" y2="150" className={styles.line} />
          <line x1="500" y1="250" x2="500" y2="600" className={styles.line} />
          
          <line x1="800" y1="0" x2="800" y2="300" className={styles.line} />
          <line x1="800" y1="400" x2="800" y2="600" className={styles.line} />
          
          <line x1="1000" y1="0" x2="1000" y2="250" className={styles.line} />
          <line x1="1000" y1="350" x2="1000" y2="600" className={styles.line} />
          
          {/* Connection Nodes */}
          <circle cx="200" cy="100" r="4" className={styles.node} />
          <circle cx="500" cy="250" r="4" className={styles.node} />
          <circle cx="800" cy="100" r="4" className={styles.node} />
          <circle cx="200" cy="250" r="4" className={styles.node} />
          <circle cx="500" cy="400" r="4" className={styles.node} />
          <circle cx="800" cy="400" r="4" className={styles.node} />
          <circle cx="1000" cy="250" r="4" className={styles.node} />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.kicker}>TALK TO OUR EXPERTS</span>
          
          <h2 className={styles.heading}>
            Partner with the Best Website Development Company
          </h2>
          
          <p className={styles.description}>
            Looking for the most reliable website development company to build your online presence? 
            We create custom, responsive, and business-driven websites that deliver results.
          </p>

          <div className={styles.buttons}>
            <a href="tel:+919876543210" className={styles.primaryButton}>
              <FaPhone className={styles.buttonIcon} />
              Call Now
            </a>
            
            <a href="#quote" className={styles.secondaryButton}>
              <FaEnvelope className={styles.buttonIcon} />
              Request a Free Quote
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>250+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;