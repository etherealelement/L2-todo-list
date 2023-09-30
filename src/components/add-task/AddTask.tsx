
import styles from "./AddTask.module.css";
import {Button} from "../ui/button/Button.tsx";
import {Input} from "../ui/input/input.tsx";
import { memo, useCallback, useState} from "react";
import {AddTaskProps} from "./AddTask.props.ts";
import { v4 as uuid } from 'uuid'
export const AddTask =  memo(() => {
    // Опредялеям состояние инпутов
    const [nameTaskValue, setNameTaskValue] = useState<string>("");
    const [descrTaskValue, setDescrNameTaskValue] = useState<string>("");
    const [dateTaskValue, setDateTaskValue] = useState<string>("");
    const [tasks, setTasks] = useState<AddTaskProps[]>([]);
    const id = uuid();
    const createDate = (): string => {
        const currentDate = {
            curentDate: new Date().getDate(),
            currentMounth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
        }
        return `${currentDate.curentDate}-${currentDate.currentMounth}-${currentDate.currentYear}`

    }

    const addTask = useCallback(() => {
            const taskItem:AddTaskProps = {
                id: id,
                taskName: nameTaskValue,
                taskDescr: descrTaskValue,
                createDate: createDate(),
                endDate: dateTaskValue,
            }
            setTasks([...tasks, taskItem])

    for (let i = 0; i < tasks.length; i++) {
        localStorage.setItem(id, JSON.stringify(tasks[i]))
    }
            // localStorage.setItem(taskId,JSON.stringify(taskItem))
    }, [tasks])

    return <div className={styles.task__container}>
        <label className={styles.task__label}>
            <div className={styles.task__container}>
                <Input type={"text"} placeholder={"Введите название задачи"} onChange={(e) => setNameTaskValue(e.target.value)}></Input>
                <Input type={"text"} placeholder={"Введите описание задачи"} onChange={(e) => setDescrNameTaskValue(e.target.value)}></Input>
                <Input type={"date"} onChange={(e) => setDateTaskValue(e.target.value)}></Input>
            </div>
            <Button onClick={addTask}>Добавить задачу</Button>
        </label>
    </div>;
});


