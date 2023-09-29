import { FC } from 'react';
import {RenderTaskProps} from "./RenderTask.props.ts";
import styles from "./RenderTask.module.css";

export const RenderTask: FC<RenderTaskProps> = ({arrTasks}: RenderTaskProps): JSX.Element => {
    return <ul className={styles.task__list}>

    </ul>;
};