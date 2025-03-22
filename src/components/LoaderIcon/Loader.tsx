import { LoaderIcon } from "./loader.icon";
import styles from "./Loader.module.scss";
import classNames from "classnames";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className = "" }: LoaderProps): JSX.Element => {
  return (
    <div
      style={{ marginLeft: "auto" }}
      className={classNames(styles["loader"], className)}>
      <LoaderIcon />
    </div>
  );
};
