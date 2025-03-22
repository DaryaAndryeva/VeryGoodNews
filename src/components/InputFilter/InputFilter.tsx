import styles from "./InputFilter.module.scss";
import cleaner from "../../assets/images/cleaner.svg";

interface InputFilterProps {
  value?: string;
  handleChange: (value?: string) => void;
}

export const InputFilter = ({
  value,
  handleChange,
}: InputFilterProps): JSX.Element => (
  <div className={styles["wrapper"]}>
    <input
      value={value}
      type="text"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      placeholder="Поиск..."
    />
    {!!value && (
      <img
        onClick={() => handleChange("")}
        src={cleaner}
        alt="img"
        className={styles["cleaner-icon"]}
      />
    )}
  </div>
);
