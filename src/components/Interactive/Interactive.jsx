import styles from './Interactive.module.scss';
import { data as heroes } from '../../data';
import { useEffect, useState } from 'react';

import Slider from '../Slider';
import Navbar from '../Navbar';
import Stepper from '../Stepper';

const Interactive = () => {
  const [mainIndex, setmainIndex] = useState(0);
  const [secondIndex, setsecondIndex] = useState(1);
  const [direction, setDirection] = useState('none');

  const [isVisible, setVisible] = useState(true);
  const [text, setText] = useState(heroes[0].text);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setText(heroes[mainIndex].text);
      setVisible(true);
    }, 200);
  }, [mainIndex]);

  const slideRight = () => {
    //prettier-ignore
    const nextSlide = mainIndex === (heroes.length - 1) 
        ? 0 
        : mainIndex + 1;

    setDirection('right');
    setsecondIndex(mainIndex);
    setmainIndex(nextSlide);
  };

  const slideLeft = () => {
    //prettier-ignore
    const nextSlide = mainIndex === 0 
        ? heroes.length - 1
        : mainIndex - 1;

    setDirection('left');
    setsecondIndex(mainIndex);
    setmainIndex(nextSlide);
  };

  return (
    <section className={styles.interactive}>
      <div className={styles.slider_container}>
        <Slider
          mainIndex={mainIndex}
          secondIndex={secondIndex}
          heroes={heroes}
          direction={direction}
          slideLeft={slideLeft}
          slideRight={slideRight}
        />
        <Navbar />
      </div>

      <div className={styles.article_container}>
        <h1 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>{text.title}</h1>
        <p className={`${styles.text} ${isVisible ? styles.visible : ''}`}>{text.param}</p>
        <Stepper onStepRight={slideRight} onStepLeft={slideLeft} />
      </div>
    </section>
  );
};

export default Interactive;
