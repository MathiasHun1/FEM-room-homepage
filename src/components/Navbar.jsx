import styles from './Navbar.module.scss';
import logo from '../assets/logo.svg';
import hamburgerIcon from '../assets/icon-hamburger.svg';
import { createPortal } from 'react-dom';

import NavMobile from './NavMobile';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav_element}>
      <div className={styles.logo_wrapper}>
        <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
          <img src={hamburgerIcon} alt="" />
        </button>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
      </div>

      <ul className={styles.navlist}>
        <li className={styles.navlist__listitem}>
          <a href="">home</a>
        </li>
        <li className={styles.navlist__listitem}>
          <a href="">shop</a>
        </li>
        <li className={styles.navlist__listitem}>
          <a href="">about</a>
        </li>
        <li className={styles.navlist__listitem}>
          <a href="">contact</a>
        </li>
      </ul>

      {isOpen && createPortal(<NavMobile setIsOpen={setIsOpen} />, document.body)}
    </nav>
  );
};

export default Navbar;
