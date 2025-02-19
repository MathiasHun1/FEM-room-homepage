import styles from './Navbar.module.scss';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.nav_element}>
      <div className={styles.image_wrapper}>
        <img src={logo} alt="" />
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
    </nav>
  );
};

export default Navbar;
