import styles from "./notfound.module.scss";

// NOT FOUND IMAGE
import not_found from "../../../assets/images/not_found.png";

export default function NotFound() {
  return (
    <>
      <div className={styles.notfound_card}>
        <img src={not_found} alt="Not found img" />
      </div>
    </>
  );
}
