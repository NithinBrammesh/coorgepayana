import styles from "./Services.module.css";
import {
  FaCar,
  FaMountain,
  FaMapMarkedAlt,
  FaRoute,
  FaRoad,
  FaCompass
} from "react-icons/fa";

function Services() {

  const services = [

    {
      icon: <FaCar />,
      title: "Mysuru → Coorg Scenic Drive",
      description:
        "Enjoy a peaceful cab journey from Mysuru to Coorg through beautiful forests and coffee plantations. Perfect for travelers looking for a relaxing hill station escape.",
      color: "#275b26",
      gradient: "linear-gradient(135deg,#275b26,#3a7339)"
    },

    {
      icon: <FaMountain />,
      title: "Bengaluru → Coorg Weekend Tour",
      description:
        "A comfortable weekend trip from Bengaluru to Coorg with breathtaking mountain views, waterfalls, coffee estates, and nature retreats.",
      color: "#275b26",
      gradient: "linear-gradient(135deg,#275b26,#3a7339)"
    },

    {
      icon: <FaMapMarkedAlt />,
      title: "Mysuru → Chikmagalur Coffee Trail",
      description:
        "Explore the famous coffee plantations of Chikmagalur with a scenic drive from Mysuru through the Western Ghats and lush green valleys.",
      color: "#275b26",
      gradient: "linear-gradient(135deg,#275b26,#3a7339)"
    },

    {
      icon: <FaRoute />,
      title: "Bengaluru → Chikmagalur Hill Drive",
      description:
        "Travel comfortably from Bengaluru to Chikmagalur with beautiful hill roads, waterfalls, sunrise viewpoints, and adventure trekking spots.",
      color: "#275b26",
      gradient: "linear-gradient(135deg,#275b26,#3a7339)"
    },

    {
      icon: <FaRoad />,
      title: "Coorg → Mysuru Heritage Ride",
      description:
        "Return from Coorg to Mysuru while exploring historic temples, cultural landmarks, and scenic countryside routes.",
      color: "#275b26",
      gradient: "linear-gradient(135deg,#275b26,#3a7339)"
    },

    {
      icon: <FaCompass />,
      title: "Custom Karnataka Tour Packages",
      description:
        "Create your own travel plan across Karnataka including Coorg, Chikmagalur, Mysuru, Sakleshpur, and more with premium cab services.",
      color: "#275b26",
      gradient: "linear-gradient(135deg,#275b26,#3a7339)"
    }

  ];

  return (

    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.headerContent}>

          <span className={styles.kicker}>TOUR PACKAGES</span>

          <h2 className={styles.heading}>
            Explore Karnataka With Comfort
          </h2>

          <p className={styles.subheading}>
            Premium cab services for scenic journeys across Coorg, Mysuru,
            Chikmagalur and more destinations.
          </p>

        </div>

        <div className={styles.grid}>

          {services.map((service, index) => (

            <div
              className={styles.card}
              key={index}
            >

              <div
                className={styles.iconWrapper}
                style={{ background: service.gradient }}
              >
                <div className={styles.icon}>
                  {service.icon}
                </div>
              </div>

              <h3 className={styles.title}>
                {service.title}
              </h3>

              <p className={styles.description}>
                {service.description}
              </p>

              <button
                className={styles.learnMore}
                style={{ color: service.color }}
              >

                Explore Route

                <svg
                  className={styles.arrow}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >

                  <path d="M5 12h14M12 5l7 7-7 7"/>

                </svg>

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Services;
