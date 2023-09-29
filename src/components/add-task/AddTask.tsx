
import styles from "./AddTask.module.css";
import {Button} from "../ui/button/Button.tsx";
import {Input} from "../ui/input/input.tsx";
import {useState} from "react";
import {AddTaskProps} from "./AddTask.props.ts";
export const AddTask = () => {
    // Опредялеям состояние инпутов
    const [nameTaskValue, setNameTaskValue] = useState<string>("");
    const [descrTaskValue, setDescrNameTaskValue] = useState<string>("");
    const [dateTaskValue, setDateTaskValue] = useState<string>("");


    const createDate = (): string => {
        const currentDate = {
            curentDate: new Date().getDate(),
            currentMounth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
        }
        return currentDate
        
    }
    
    console.log(createDate())


    const addLocalStorageTask = () => {
        const TaskItem:AddTaskProps = {
            taskName: nameTaskValue,
            taskDescr: descrTaskValue,
             createDate: new Date(),
            endDate: dateTaskValue,
        }
    }




    

    return <div className={styles.task__container}>
        <label className={styles.task__label}>
           <div className={styles.task__container}>
               <Input type={"text"} placeholder={"Введите название задачи"} onChange={(e) => setNameTaskValue(e.target.value)}></Input>
               <Input type={"text"} placeholder={"Введите описание задачи"} onChange={(e) => setDescrNameTaskValue(e.target.value)}></Input>
               <Input type={"date"} onChange={(e) => setDateTaskValue(e.target.value)}></Input>
           </div>
            <Button onClick={addLocalStorageTask}>Добавить задачу</Button>
        </label>
    </div>;
};


