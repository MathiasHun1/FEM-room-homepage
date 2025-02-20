import styles from './Interactive.module.scss';
import { data as heroes } from '../../data';
import { useEffect, useRef, useState } from 'react';

import Slider from '../Slider';
import Navbar from '../Navbar';
import Stepper from '../Stepper';

const Interactive = () => {
  const [mainSlide, setMainSlide] = useState(0);
  const [secondSlide, setSecondSlide] = useState(1);
  const [direction, setDirection] = useState('none');
  const [isVisible, setTVisible] = useState(true);
  const [titleText, setTitleText] = useState(heroes[0].title);
  const [paramText, setParamText] = useState(heroes[0].text);

  const currentText = heroes[mainSlide].text;

  useEffect(() => {
    setTVisible(false);
    setTimeout(() => {
      setTitleText(heroes[mainSlide].title);
      setParamText(heroes[mainSlide].text);
      setTVisible(true);
    }, 200);
  }, [mainSlide]);

  const slideRight = () => {
    //prettier-ignore
    const nextSlide = mainSlide === (heroes.length - 1) 
        ? 0 
        : mainSlide + 1;

    setDirection('right');
    setSecondSlide(mainSlide);
    setMainSlide(nextSlide);

    setTVisible(false);
    setTimeout(() => {
      setTVisible(true);
    }, 200);
  };

  const slideLeft = () => {
    //prettier-ignore
    const nextSlide = mainSlide === 0 
        ? heroes.length - 1
        : mainSlide - 1;

    setDirection('left');
    setSecondSlide(mainSlide);
    setMainSlide(nextSlide);
  };

  return (
    <section className={styles.interactive}>
      <div className={styles.slider_container}>
        <Slider
          mainSlide={mainSlide}
          secondSlide={secondSlide}
          heroes={heroes}
          direction={direction}
          slideLeft={slideLeft}
          slideRight={slideRight}
        />
        <Navbar />
      </div>

      <div className={styles.article_container}>
        <h1 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>{titleText}</h1>
        <p className={`${styles.text} ${isVisible ? styles.visible : ''}`}>{paramText}</p>
        <Stepper onStepRight={slideRight} onStepLeft={slideLeft} />
      </div>
    </section>
  );
};

export default Interactive;
