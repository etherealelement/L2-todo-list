
import styles from "./AddTask.module.css";
import {Button} from "../ui/button/Button.tsx";
export const AddTask = () => {
    return <div className={styles.task__container}>
        <label className={styles.task__label}>
            <input type="text" placeholder={"Введите название задачи..."} className={styles.task__text}/>
            <input type="text" className={styles.task__text} placeholder={"Введите описание задачи..."}/>
            <input type="date"></input>
            <Button>Добавить задачу</Button>
        </label>
    </div>;
};


