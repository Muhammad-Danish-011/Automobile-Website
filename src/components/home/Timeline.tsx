import styles from '@/styles/Timeline.module.css'

const Timeline = () => {
  return (
    <section className={styles.timeline}>
      <div className={styles.timeline_item}>
        <div className={styles.timeline_img}></div>

        <div className={`${styles.timeline_content} ${styles.timeline_card}`}>
          <div className={styles.timeline_img_header}>
            <h2>Global Expansion 2018</h2>
          </div>
          <div className={styles.date}>Dubai, UAE</div>
          <p>
            Launched our first international automotive marketplace in Dubai, bringing our 
            comprehensive vehicle inspection and secure transaction platform to the Middle East. 
            Established partnerships with leading car manufacturers and dealers to provide an 
            extensive inventory of new and pre-owned vehicles to our global customers.
          </p>
        </div>
      </div>

      <div className={styles.timeline_item}>
        <div className={styles.timeline_img}></div>

        <div className={`${styles.timeline_content} ${styles.timeline_card}`}>
          <div className={styles.timeline_img_header}>
            <h2>Digital Innovation 2019</h2>
          </div>
          <div className={styles.date}>Singapore</div>
          <p>
            Revolutionized our digital platform with advanced vehicle inspection technology
            and AI-powered pricing algorithms. Introduced virtual showroom experiences and
            360-degree vehicle tours, making remote car buying more accessible and transparent
            for customers worldwide.
          </p>
        </div>
      </div>

      <div className={styles.timeline_item}>
        <div className={styles.timeline_img}></div>

        <div className={`${styles.timeline_content} ${styles.timeline_card}`}>
          <div className={styles.timeline_img_header}>
            <h2>Market Leadership 2019</h2>
          </div>
          <div className={styles.date}>London, UK</div>
          <p>
            Expanded our presence to the European market with a new headquarters in London.
            Implemented enhanced financing options and introduced a comprehensive warranty
            program, setting new standards in the international used car marketplace industry.
          </p>
        </div>
      </div>

      <div className={styles.timeline_item}>
        <div className={styles.timeline_img}></div>

        <div className={`${styles.timeline_content} ${styles.timeline_card}`}>
          <div className={styles.timeline_img_header}>
            <h2>Customer Excellence 2020</h2>
          </div>
          <div className={styles.date}>New York, USA</div>
          <p>
            Achieved major milestone with expansion into the North American market.
            Launched premium concierge services and enhanced our customer support system
            with 24/7 multilingual assistance, further cementing our position as a global
            leader in the automotive marketplace industry.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Timeline
