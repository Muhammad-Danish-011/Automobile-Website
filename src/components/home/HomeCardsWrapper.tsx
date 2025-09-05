import { HomeCard, HomeCardProps } from "./HomeCards";
import styles from "@/styles/HomeCards.module.css";

interface HomeCardsWrapperProps {
  cards: HomeCardProps[];
}

export const HomeCardsWrapper = ({ cards }: HomeCardsWrapperProps) => {
  return (
    <div className={styles.blog_slider}>
      <div className={`${styles.blog_slider__wrp} ${styles.swiper_wrapper}`}>
        {cards.map((card, index) => (
          <HomeCard key={index} {...card} />
        ))}
      </div>
      <div className={styles.blog_slider__pagination}></div>
    </div>
  );
};
