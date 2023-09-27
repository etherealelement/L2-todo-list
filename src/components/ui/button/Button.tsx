import { FC } from 'react';
import {ButtonProps} from "./Button.props.ts";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = ({children,...props}: ButtonProps):JSX.Element => {
    return <button className={styles.button} {...props}>{children}</button>;
};