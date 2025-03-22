import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <div className={styles["wrapper"]}>
      <img src={logo} className={styles["logo"]} alt="logo" />
    </div>
  );
};
