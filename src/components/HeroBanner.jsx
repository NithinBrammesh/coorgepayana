import styles from "./HeroBanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";

function HeroBanner() {

  const images = [
    "/images/banner4.jpg",
    "/images/banner3.jpg",
    "/images/banner2.jpg"
  ];

  return (
    <div className={styles.heroContainer}>

      {/* NAVBAR */}

      <nav className={styles.navbar}>
       <img
  src="/images/logoimage.png"
  alt="Coorg Payana"
  className={styles.logo}
/>

        <button className={styles.callButton}>
          <FaPhoneAlt className={styles.icon}/>
          Call Us
        </button>
      </nav>

      {/* HERO SLIDER */}

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay:4000,
          disableOnInteraction:false
        }}
        className={styles.heroSlider}
      >

        {images.map((img,index)=>(
          <SwiperSlide key={index}>

            <div
              className={styles.heroSlide}
              style={{ backgroundImage:`url(${img})` }}
            >

              <div className={styles.overlay}></div>

              <div className={styles.heroContent}>

                <h1 className={styles.heroTitle}>
                  Explore The Beauty Of Coorg
                </h1>

                <p className={styles.heroSubtitle}>
                  Discover coffee plantations, waterfalls and misty hills
                </p>

                <button className={styles.viewAll}>
                  Book on WhatsApp
                  <FaArrowRight className={styles.arrow}/>
                </button>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}

export default HeroBanner;
