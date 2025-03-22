import { ReactNode } from "react";
import styles from "./View.module.scss";

export const View = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className={styles["view"]}>{children}</div>
);
