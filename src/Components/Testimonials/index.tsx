import styles from "./testimonials.module.scss";

// AVATAR ICONS
import emily_icon from "../../assets/avatar_icons/image-emily.jpg";
import jennie_icon from "../../assets/avatar_icons/image-jennie.jpg";
import thomas_icon from "../../assets/avatar_icons/image-thomas.jpg";

export default function Testimonials() {
  return (
    <>
      <div id="Services" className={styles.blur_effect}>
        <div className={styles.testimonials_main_card}>
          <div className={styles.headline_card}>
            <h1>CLIENT TESTIMONIALS</h1>
          </div>
          <div className={styles.card_feedback}>
            <div className={styles.users_feedback_emily}>
              <div className={styles.user_deatils}>
                <img
                  className={styles.img_emilly_avatar}
                  src={emily_icon}
                  alt="emily avatar"
                />
              </div>
              <div className={styles.user_deatils}>
                <p>
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
              </div>
              <div className={styles.user_deatils_name}>
                <h1 className={styles.user_name_bold}>Emily R.</h1>
                <p className={styles.job_role_user}>Marketing Director</p>
              </div>
            </div>
            <div className={styles.users_feedback}>
              <div className={styles.users_feedback_thomas}>
                <div className={styles.user_deatils}>
                  <img
                    className={styles.img_thomas_avatar}
                    src={thomas_icon}
                    alt="thomas avatar"
                  />
                </div>
                <div className={styles.user_deatils}>
                  <p>
                    Sunnyside's enthuasiasm coupled with their keen interest in
                    our brand's success made it a satisfying and enjoyale
                    experience
                  </p>
                </div>
                <div className={styles.user_deatils_name}>
                  <h1 className={styles.user_name_bold}>Thomas S.</h1>
                  <p className={styles.job_role_user}>
                    Chief Operating Officer
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.users_feedback}>
              <div className={styles.users_feedback_jennie}>
                <div className={styles.user_deatils}>
                  <img
                    className={styles.img_jennie_avatar}
                    src={jennie_icon}
                    alt="jennie avatar"
                  />
                </div>
                <div className={styles.user_deatils}>
                  <p>
                    Incredible end result! Our sales increased over 400% when we
                    worked with Sunnyside, Highly recommended!
                  </p>
                </div>
                <div className={styles.user_deatils_name}>
                  <h1 className={styles.user_name_bold}>Jennie F.</h1>
                  <p className={styles.job_role_user}>Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
