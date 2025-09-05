import styles from "@/styles/HomeCards.module.css";

export interface HomeCardProps {
  image: string;
  title: string;
  text: string;
  link: string;
}

export const HomeCard = ({ image, title, text, link }: HomeCardProps) => {
  return (
    <div className={styles.blog_slider}>
      <div className={`${styles.blog_slider__wrp} ${styles.swiper_wrapper}`}>
        <div className={`${styles.blog_slider__item} ${styles.swiper_slide}`}>
          <div className={styles.blog_slider__img}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.blog_slider__content}>
            <div className={styles.blog_slider__title}>{title}</div>
            <div className={styles.blog_slider__text}>{text}</div>
          </div>
        </div>
      </div>
      <div className={styles.blog_slider__pagination}></div>
    </div>
  );
};
