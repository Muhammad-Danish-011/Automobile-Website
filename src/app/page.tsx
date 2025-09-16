'use client';

import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';
import { style } from '../app/career/cardStyle';

import Image from 'next/image';
import Timeline from '@/components/home/Timeline';
import Heading from '@/components/Heading';
import OrangeSection from '@/components/OrangeSection';
import { HomeCard } from "@/components/home/HomeCards";
import { DatahomeCards } from "@/components/home/dataHomeCard";
import FaqSection from "@/components/FaqSection";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  const totalCards = DatahomeCards.length;

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(totalCards / cardsPerView);
  const maxIndex = totalSlides - 1;

  const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <>
      <style jsx>{style}</style>

      {/* Hero Section */}
      <div className={styles.sae_intro}>
        <Image
          src="/images/home/car.gif"
          alt="card"
          width={1007}
          height={627}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '1007px',
            objectFit: 'contain',
          }}
        />
        <div>
          <div className={styles.sae_headings}>
            <h1 className={styles.sae_name_text}>DIGILIGHTED ENTERPRISES (DGL)</h1>
          </div>
          <p className={styles.sae_long_text}>
            DIGILIGHTED ENTERPRISES (DGL) is a leading platform for buying and selling new and pre-owned cars, offering a comprehensive automotive marketplace experience. We provide expert vehicle inspections, secure transactions, competitive financing options, and exceptional customer service. Our extensive inventory includes everything from luxury vehicles to economical daily drivers, all thoroughly vetted to ensure quality and reliability. With our innovative digital platform and professional team of automotive experts, we make the car buying and selling process seamless, transparent, and enjoyable for all our clients.
          </p>
        </div>
      </div>

      {/* Events & Workshops Slider */}
      <div style={{ marginTop: "40px" }}>
        <Heading headingText="Events & Workshops" />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                style={{
                  flex: `0 0 ${100 / totalSlides}%`,
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                {DatahomeCards.slice(
                  slideIndex * cardsPerView,
                  slideIndex * cardsPerView + cardsPerView
                ).map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    style={{
                      flex: `0 0 ${cardsPerView === 1 ? "100%" : "50%"}`, // mobile = 100%, desktop = 50%
                      boxSizing: "border-box",
                    }}
                  >
                    <HomeCard
                      image={card.image}
                      title={card.title}
                      text={card.text}
                      link={card.link}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                background: "#333",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                cursor: "pointer",
                borderRadius: "50%",
                zIndex: 1,
              }}
            >
              &#8249;
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "#333",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                cursor: "pointer",
                borderRadius: "50%",
                zIndex: 1,
              }}
            >
              &#8250;
            </button>
          )}
        </div>

        {/* Dots Indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "8px",
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: currentIndex === index ? "#333" : "#ccc",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>



      {/* Achievements Section */}
      <div className={styles.ourachievments_sae}>
        <Heading headingText="Our Achievements" />
        <div className={styles.achievments_cards_sae}>
          <Timeline />
        </div>
      </div>

{/* Faq Question  */}

     <section className="benefits-section">
<FaqSection/>
</section>

{/* orange section */}

      <OrangeSection />
    </>
  );
}

export default Home;
