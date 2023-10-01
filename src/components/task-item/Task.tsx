import { FC } from 'react';
import styles from "./Task.module.css";
import {TaskProps} from "./Task.props.ts";
import {Button} from "../ui/button/Button.tsx";
export const Task: FC<TaskProps> = ({children, createDate, endDate, description, ...props}: TaskProps): JSX.Element => {
    return <li className={styles.task__item} {...props}>
        <input type="checkbox"/>
        <span className={styles.task__left}>
            <p className={styles.task__left_title}>{children}</p>
            <p className={styles.task__left_descr}>{description}</p>
        </span>

        <span className={styles.task__middle}>
            <p className={styles.task__middle_create}>{createDate}</p>
            <p className={styles.task__middle_enddate}>{endDate}</p>
        </span>

        <span className={styles.task__buttons}>
            <Button>Удалить</Button>
        </span>
   </li>;
};

