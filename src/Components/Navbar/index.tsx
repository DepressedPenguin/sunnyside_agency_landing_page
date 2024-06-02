import styles from "./navbar.module.scss";

// LOGO LANDING PAGE
import img_logo from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <>
      <header className={styles.main_nav}>
        <nav className={styles.sub_nav}>
          <div className={styles.logo_sunny}>
            <img className={styles.svg_logo} src={img_logo} alt="logo" />
          </div>
          <div className={styles.nav_elements}>
            <ul className={styles.ul_nav}>
              <li>
                <a href="#footer">About</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li className={styles.li_contact}>CONTACT</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
