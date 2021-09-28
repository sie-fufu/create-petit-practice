import styles from "./index.module.css";
import classNames from "classnames";

type Colors = "brown";

interface ColorsObj {
  [key: string]: string;
}

interface ButtonProps {
  color: Colors;
  text: string;
}

export const Button = (props: ButtonProps) => {
  const { color, text } = props;

  const colors: ColorsObj = {
    brown: styles.brown,
  };

  return (
    <button className={classNames(styles.btn, colors[color])}>{text}</button>
  );
};
