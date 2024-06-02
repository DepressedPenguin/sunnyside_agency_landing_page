import styles from "./slider.module.scss";

// ARROW SLIDER
import arrow_icon from "../../assets/images/icon-arrow-down.svg";

export default function Slider() {
  return (
    <>
      <div className={styles.slider_bg}>
        <div className={styles.arrow_headline}>
          <div className={styles.headline_silder}>
            <h1>WE ARE CREATIVES</h1>
          </div>
          <div className={styles.arrow_div}>
            <img
              className={styles.icon_class_arrow}
              src={arrow_icon}
              alt="arrow icon"
            />
            {/* <h1>ARROW</h1> */}
          </div>
        </div>
        {/* <img src={slider_bg} alt="slider img" /> */}
      </div>
    </>
  );
}
