import styles from './Slider.module.scss';

import Stepper from './Stepper';

const Slider = ({ currentSlides, direction, slideLeft, slideRight }) => {
  return (
    <div className={styles.slider}>
      {currentSlides.map((slide) => (
        <picture key={slide.id} className={`${styles.picture} ${styles[direction]}`}>
          <img src={slide.urlDesktop} alt="" />
        </picture>
      ))}

      <Stepper onStepRight={slideRight} onStepLeft={slideLeft} />
    </div>
  );
};

export default Slider;
