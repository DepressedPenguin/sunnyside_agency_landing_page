import styles from "./footer.module.scss";

// IMPORT ICONS SOCIAL MEDIA
import facebook_icon from "../../assets/Social_Media_icons/icon-facebook.svg";
import instagram_icon from "../../assets/Social_Media_icons/icon-instagram.svg";
import pinterset_icon from "../../assets/Social_Media_icons/icon-pinterest.svg";
import twitter_icon from "../../assets/Social_Media_icons/icon-twitter.svg";

export default function Footer() {
  // FUNCTION TO HANDL SCROLE TOP
  const handScrooltop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className={styles.main_footer}>
        <div className={styles.footer_box_headline}>
          <h1 id="footer" className={styles.logo_class_footer}>
            sunnyside
          </h1>
        </div>
        <div className={styles.footer_box}>
          <ul className={styles.ul_footer}>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li onClick={handScrooltop}>TO TOP</li>
          </ul>
        </div>
        <div className={styles.footer_box}>
          <ul className={styles.social_media_ul}>
            <a href="#">
              <li>
                <img src={facebook_icon} alt="facebook icon" />
              </li>
            </a>
            <a href="#">
              <li>
                <img src={instagram_icon} alt="facebook icon" />
              </li>
            </a>
            <a href="#">
              <li>
                <img src={twitter_icon} alt="facebook icon" />
              </li>
            </a>
            <a href="#">
              <li>
                <img src={pinterset_icon} alt="facebook icon" />
              </li>
            </a>
          </ul>
        </div>
      </footer>
    </>
  );
}
