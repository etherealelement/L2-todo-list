import { FC } from 'react';
import styles from "./Task.module.css";
import {TaskProps} from "./Task.props.ts";
export const Task: FC<TaskProps> = ({children, createDate, endDate, description, ...props}: TaskProps): JSX.Element => {
    return <li className={styles.task__item} {...props}>

    </li>;
};

