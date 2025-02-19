import styles from './Stepper.module.scss';

import left from '../assets/icon-angle-left.svg';
import right from '../assets/icon-angle-right.svg';

const Stepper = ({ onStepRight, onStepLeft }) => {
  return (
    <div className={styles.stepper}>
      <div className={styles.left_arrow} onClick={onStepLeft}>
        <img src={left} alt="" />
      </div>
      <div className={styles.right_arrow} onClick={onStepRight}>
        <img src={right} alt="" />
      </div>
    </div>
  );
};

export default Stepper;
