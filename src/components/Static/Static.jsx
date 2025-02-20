import styles from './Static.module.scss';

const Static = () => {
  return (
    <section className={styles.fix}>
      <picture className={styles.static__image}>
        <img src="/images/image-about-dark.jpg" alt="" />
      </picture>
      <div className={styles.static__text}>
        <h2 className={styles.title}>About our furniture</h2>
        <p className={styles.param}>
          Our multifunctional collection blends design and function to suit your individual taste. Make each room
          unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything in between. Product specialists are
          available to help you create your dream space.
        </p>
      </div>
      <picture className={styles.static__image}>
        <img src="/images/image-about-light.jpg" alt="" />
      </picture>
    </section>
  );
};

export default Static;
