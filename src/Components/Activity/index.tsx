import styles from "./activity.module.scss";

// IMGS FOR FRUITES
import img_tranform from "../../assets/imgs_f/image-transform.jpg";
import img_standout from "../../assets/imgs_f/image-stand-out.jpg";

export default function Activity() {
  return (
    <>
      <div id="projects" className={styles.activity_container}>
        <div className={styles.box_activity}>
          {/* SUB DIV */}
          <div className={styles.sub_div_activity}>
            <h1>Transform your brand</h1>
            <p className={styles.para_box_bold}>
              We are a full-service creative agency specialing in helping brands
              grow fast. Engage your clients through complelling visuals that do
              most of the marketing for you
            </p>
            <p className={styles.learnmore_btn}>LEARN MORE</p>
          </div>
        </div>
        <div className={styles.box_activity_two}>
          <img src={img_tranform} alt="img tranform" />
        </div>
        <div className={styles.box_activity_three}>
          <img src={img_standout} alt="img standout" />
        </div>
        <div className={styles.box_activity}>
          <div
            className={`${styles.sub_div_activity} ${styles.sub_div_tranform}`}
          >
            <h1 className={styles.uniq_h1}>Stand out to the right audience</h1>
            <p className={styles.para_box_bold}>
              Using a collobrative forumaula of designers, researchers,
              Phtographers, videographers, and copywriters, we'll build and
              extend your brand in digial places.
            </p>
            <p className={styles.learnmore_btn_two}>LEARN MORE</p>
          </div>
        </div>
        <div className={styles.box_activity_fruits}>
          <div className={styles.box_activity_fr}>
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </div>
        <div className={styles.box_activity_fruits_two}>
          <div className={styles.box_activity_fr}>
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
