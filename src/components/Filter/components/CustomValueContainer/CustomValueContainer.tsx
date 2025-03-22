import { ValueContainerProps } from "react-select";
import { Option } from "../../Filter";
import styles from "./CustomValueContainer.module.scss";

export const CustomValueContainer = ({
  selectProps,
  children,
}: ValueContainerProps<Option>) => {
  const values = selectProps.value;

  return (
    <div
      className={styles.container}
      style={{
        width: "100%",
        padding: "0.375rem 0.75rem",
        overflow: "hidden",
      }}>
      {values && Array.isArray(values) && values?.length > 0 && (
        <>Выбрано {values?.length}</>
      )}
      <div
        style={{
          marginLeft:
            values && Array.isArray(values) && values?.length > 0
              ? "10px"
              : undefined,
        }}>
        {children}
      </div>
    </div>
  );
};
