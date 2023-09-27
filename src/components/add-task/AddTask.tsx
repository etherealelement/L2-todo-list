
import styles from "./AddTask.module.css";
import {Button} from "../ui/button/Button.tsx";
import {Input} from "../ui/input/input.tsx";
export const AddTask = () => {
    return <div className={styles.task__container}>
        <label className={styles.task__label}>
           <div className={styles.task__container}>
               <Input type={"text"} placeholder={"Введите название задачи"}></Input>
               <Input type={"text"} placeholder={"Введите описание задачи"}></Input>
               <Input type={"date"}></Input>
           </div>
            <Button>Добавить задачу</Button>
        </label>
    </div>;
};


