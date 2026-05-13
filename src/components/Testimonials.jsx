import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Rakesh Kumar",
      location: "Bengaluru",
      text: "We booked a cab from Bengaluru to Coorg for a weekend trip. The driver was very professional and the journey was extremely comfortable. The car was clean and the scenic stops suggested by the driver made the trip even better.",
      image: "/images/icons/man.png",
      rating: 5
    },
    {
      name: "Ananya Shetty",
      location: "Mysuru",
      text: "Amazing service! We traveled from Mysuru to Chikmagalur with family and the entire trip was smooth and relaxing. The driver knew all the beautiful viewpoints and coffee plantation spots. Highly recommended!",
     image: "/images/icons/woman.png",
      rating: 5
    },
    {
      name: "Rahul Nair",
      location: "Coorg",
      text: "Best cab service for hill station trips. I booked a return ride from Coorg to Bengaluru and the experience was excellent. Safe driving, punctual pickup, and very friendly service.",
       image: "/images/icons/man.png",
      rating: 5
    },
    {
      name: "Priya S",
      location: "Chikmagalur",
      text: "We booked a custom Karnataka tour including Mysuru, Coorg, and Chikmagalur. Everything was perfectly arranged and the journey was very comfortable. Great service and reasonable pricing.",
      image: "/images/icons/woman.png",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToTestimonial = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <span className={styles.kicker}>CUSTOMER REVIEWS</span>
          <h2 className={styles.heading}>What Our Travelers Say</h2>
        </div>

        <div className={styles.sliderContainer}>
          <button
            className={`${styles.navButton} ${styles.navLeft}`}
            onClick={prevTestimonial}
          >
            <FaChevronLeft />
          </button>

          <div className={styles.cardsWrapper}>
            {testimonials.map((testimonial, index) => {
              let position = "nextSlide";

              if (index === currentIndex) {
                position = "activeSlide";
              }

              if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === testimonials.length - 1)
              ) {
                position = "prevSlide";
              }

              return (
                <div
                  key={index}
                  className={`${styles.card} ${styles[position]}`}
                >
                  <div className={styles.stars}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>

                  <p className={styles.text}>{testimonial.text}</p>

                  <div className={styles.profile}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={styles.avatar}
                    />

                    <div className={styles.info}>
                      <h4 className={styles.name}>{testimonial.name}</h4>
                      <span className={styles.location}>
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className={`${styles.navButton} ${styles.navRight}`}
            onClick={nextTestimonial}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
