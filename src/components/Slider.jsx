import styles from './Slider.module.scss';

const Slider = ({ mainIndex, secondIndex, direction, heroes }) => {
  const currentSlides = [heroes[mainIndex], heroes[secondIndex]];

  return (
    <div className={styles.slider}>
      {currentSlides.map((slide) => (
        <picture key={slide.id} className={`${styles.picture} ${styles[direction]}`}>
          <source media="(max-width: 750px)" srcSet={slide.urlMobile} />
          <img src={slide.urlDesktop} alt="" />
        </picture>
      ))}
    </div>
  );
};

export default Slider;
