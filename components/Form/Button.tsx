import { ButtonHTMLAttributes } from "react";
import { cname } from "utils/className";
import styles from "styles/Form.module.scss";

type ButtonProps = {
    type?: 'primary' | 'gradient' | 'disabled' | 'warning' | 'unimportant',
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
    type = 'primary',
    className,
    disabled = false,
    ...rest
}) =>  <button {...rest} className={cname([styles.Button, styles[`Button__${type}`], className])} />;

export default Button;