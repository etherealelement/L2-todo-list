
import styles from "./AddTask.module.css";
import {Button} from "../ui/button/Button.tsx";
import {Input} from "../ui/input/input.tsx";
import {memo, useEffect, useState} from "react";
import {AddTaskProps} from "./AddTask.props.ts";
import { v4 as uuid } from 'uuid'
import {Task} from "../task-item/Task.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {AddTaskForm} from "../../interfaces/taskItem-intarface.ts";
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
    const addTask = () => {
        const taskItem: AddTaskProps = {
            id: id,
            taskName: nameTaskValue,
            taskDescr: descrTaskValue,
            createDate: createDate(),
            endDate: dateTaskValue,
        }
        setTasks([...tasks, taskItem])
        // localStorage.setItem(taskId,JSON.stringify(taskItem))
    }
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(tasks))
    }, [tasks])

    // Работа с формой

    const {register,handleSubmit} = useForm<AddTaskForm>({
        defaultValues: {

        }
    })

    const submit: SubmitHandler<AddTaskForm> = data => {
        console.log(data)
    }

    return <section>
        <div className={styles.task__container}>
            <label className={styles.task__label}>
                <form className={styles.task__container} onSubmit={handleSubmit(submit)}>
                    <Input type={"text"} placeholder={"Введите название задачи"} onChange={(e) => setNameTaskValue(e.target.value)} {...register("name")}></Input>
                    <Input type={"text"} placeholder={"Введите описание задачи"} onChange={(e) => setDescrNameTaskValue(e.target.value)} {...register("description")}></Input>
                    <Input type={"date"} onChange={(e) => setDateTaskValue(e.target.value)} {...register("date")}></Input>
                </form>
                <Button onClick={addTask}>Добавить задачу</Button>
            </label>
        </div>
        <ul>
            {tasks.map(item => <Task key={item.id} endDate={item.endDate} description={item.taskDescr} createDate={item.createDate}>{item.taskName}</Task>)}
        </ul>
    </section>;
});


