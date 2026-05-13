import { useState } from "react";
import styles from "./PopularDestinations.module.css";
import { FaArrowRight } from "react-icons/fa";

function PopularDestinations() {
  const destinations = [
    {
      name: "Coorg",
      tours: "5 Tours",
       image: "/images/coorge1.png",
      description: "Coffee plantations, waterfalls and misty hills.",
      size: "large" // Takes 2 columns chikkamanglore
    },
    {
      name: "Mysore",
      tours: "3 Tours",
      image: "/images/mysore.png",
      description: "Visit Mysore Palace and explore royal heritage.",
      size: "medium"
    },
    {
      name: "Bangalore",
      tours: "4 Tours",
      image: "/images/banglore1.png",
      description: "Garden city with vibrant nightlife and tech hub.",
      size: "medium"
    },
    {
      name: "Chikmagalur",
      tours: "3 Tours",
        image: "/images/chikkamanglore.png",
      description: "Beautiful hills, coffee estates and trekking.",
      size: "large"
    },
    {
      name: "Wayanad",
      tours: "2 Tours",
       image: "/images/waynad.png",
      description: "Waterfalls, wildlife and scenic mountain views.",
      size: "large" 
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.kicker}>EXPLORE</span>
            <h2 className={styles.title}>Popular Destinations</h2>
          </div>

          {/* <a href="/destinations" className={styles.viewAll}>
            View All Destinations
            <FaArrowRight className={styles.arrow} />
          </a> */}
        </div>

        <div className={styles.grid}>
          {destinations.map((place, index) => (
            <div
              className={`${styles.card} ${
                place.size === "large" ? styles.cardLarge : styles.cardMedium
              }`}
              key={index}
            >
              <img
                src={place.image}
                alt={place.name}
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <div className={styles.content}>
                {/* <span className={styles.tours}>{place.tours}</span> */}

                <h3 className={styles.place}>{place.name}</h3>

                <p className={styles.description}>{place.description}</p>

                <button className={styles.viewButton}>
                  Contact Us
                  <FaArrowRight className={styles.buttonArrow} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;