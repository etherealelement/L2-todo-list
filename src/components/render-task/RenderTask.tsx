import {FC} from 'react';
import styles from "./RenderTask.module.css";
import {Task} from "../task-item/Task.tsx";
import {TaskItemInterface} from "../../interfaces/taskItem-intarface.ts";

export const RenderTask: FC = (): JSX.Element => {
    const parseData:TaskItemInterface[] = JSON.parse(localStorage.getItem("items"));

    return <ul className={styles.task__list}>
        {parseData.map((item:TaskItemInterface) => {
          return  <Task key={item.id} endDate={item.endDate} description={item.taskDescr} createDate={item.createDate}>{item.taskName}</Task>
        })}
    </ul>;
};