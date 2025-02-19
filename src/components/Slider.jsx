import styles from './Slider.module.scss';

import Stepper from './Stepper';

const Slider = ({ currentSlides, direction }) => {
  return (
    <div className={styles.slider}>
      {currentSlides.map((slide) => (
        <picture key={slide.id} className={`${styles.picture} ${styles[direction]}`}>
          <img src={slide.urlDesktop} alt="" />
        </picture>
      ))}
    </div>
  );
};

export default Slider;
