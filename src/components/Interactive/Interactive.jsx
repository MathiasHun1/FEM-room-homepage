import styles from './Interactive.module.scss';
import { data as heroes } from '../../data';
import { useState } from 'react';

import Slider from '../Slider';
import Navbar from '../Navbar';

const Interactive = () => {
  const [mainSlide, setMainSlide] = useState(0);
  const [secondSlide, setSecondSlide] = useState(1);
  const [direction, setDirection] = useState('none');

  const currentSlides = [heroes[mainSlide], heroes[secondSlide]];
  const currentTitle = heroes[mainSlide].title;
  const currentText = heroes[mainSlide].text;

  const slideRight = () => {
    //prettier-ignore
    const nextSlide = mainSlide === (heroes.length - 1) 
        ? 0 
        : mainSlide + 1;

    setDirection('right');
    setSecondSlide(mainSlide);
    setMainSlide(nextSlide);
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
        <Slider currentSlides={currentSlides} direction={direction} slideLeft={slideLeft} slideRight={slideRight} />
        <Navbar />
      </div>

      <div className={styles.article_container}>
        <h1>{currentTitle}</h1>
        <p>{currentText}</p>
      </div>
    </section>
  );
};

export default Interactive;
