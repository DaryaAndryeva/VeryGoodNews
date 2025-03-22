import { Loader } from "../LoaderIcon";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export const Button = ({ onClick, isLoading }: ButtonProps): JSX.Element => (
  <button className={styles["button"]} onClick={onClick}>
    <div style={{ opacity: isLoading ? 0 : 1 }}>Сформировать отчет</div>
    {isLoading && <Loader className={styles["loader"]} />}
  </button>
);
