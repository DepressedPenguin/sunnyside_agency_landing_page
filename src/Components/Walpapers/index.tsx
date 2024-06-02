import styles from "./walpapers.module.scss";

// IMAGES WALPAPERS
import bottles_img from "../../assets/imgs_f/image-gallery-milkbottles.jpg";
import orange_img from "../../assets/imgs_f/image-gallery-orange.jpg";
import cone_img from "../../assets/imgs_f/image-gallery-cone.jpg";
import garcubes_img from "../../assets/imgs_f/image-gallery-sugarcubes.jpg";

export default function Walpapers() {
  return (
    <>
      <div className={styles.wallpapers_card}>
        <div className={styles.sub_wallpaper}>
          <img src={bottles_img} alt="bottles img" />
        </div>
        <div className={styles.sub_wallpaper}>
          <img src={orange_img} alt="orange img" />
        </div>
        <div className={styles.sub_wallpaper}>
          <img src={cone_img} alt="orange img" />
        </div>
        <div className={styles.sub_wallpaper}>
          <img src={garcubes_img} alt="garcubes img" />
        </div>
      </div>
    </>
  );
}
