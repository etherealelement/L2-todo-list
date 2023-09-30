import {FC, useState} from 'react';
import styles from "./RenderTask.module.css";

export const RenderTask: FC = (): JSX.Element => {
    const [taskData, setTaskData] = useState([])

    const parseLocalStorage = () => {
        let newArr = []
        for (let i = 0; i < localStorage.length; i++) {

        }

    }


    return <ul className={styles.task__list}>

    </ul>;
};