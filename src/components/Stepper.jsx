import styles from './Stepper.module.scss';

import left from '../assets/icon-angle-left.svg';
import right from '../assets/icon-angle-right.svg';

const Stepper = ({ onStepRight, onStepLeft }) => {
  return (
    <div className={styles.stepper}>
      <button className={styles.left_arrow} onClick={onStepLeft} aria-label="step right">
        <img src={left} alt="" />
      </button>
      <button className={styles.right_arrow} onClick={onStepRight} aria-label="step-left">
        <img src={right} alt="" />
      </button>
    </div>
  );
};

export default Stepper;
