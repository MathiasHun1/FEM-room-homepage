import styles from './NavMobile.module.scss';
import { createPortal } from 'react-dom';
import closeIcon from '../assets/icon-close.svg';
import { useEffect, useRef, useState } from 'react';

const NavMobile = ({ setIsOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        handleClose();
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [navRef]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.visible : ''}`}>
      <div ref={navRef} className={styles.nav_section}>
        <button className={styles.close} onClick={handleClose}>
          <img src={closeIcon} alt="" />
        </button>
        <ul className={styles.list}>
          <li className={styles.list_item}>home</li>
          <li className={styles.list_item}>shop</li>
          <li className={styles.list_item}>about</li>
          <li className={styles.list_item}>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
