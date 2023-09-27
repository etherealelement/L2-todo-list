import { FC } from 'react';
import {InputProps} from "./input.props.ts";
import styles from "./input.module.css";
export const Input: FC<InputProps> = ({type, placeholder, ...props}:InputProps):JSX.Element => {
    switch (type) {
        case "text": {
            return  <input type={"text"} placeholder={placeholder} className={styles.input__text} {...props}></input>
        }
        case "date" : {
            return  <input type={"date"} className={styles.input__date} {...props}></input>
        }
    }
};