import { FC } from 'react';
import styles from "./Home.module.css";
import {Header} from "../../components/header/Header.tsx";
import {AddTask} from "../../components/add-task/AddTask.tsx";
import {RenderTask} from "../../components/render-task/RenderTask.tsx";

;
export const Home: FC = () => {
    return <section className={styles.home}>
        <Header>TODO-LIST</Header>
        <AddTask></AddTask>
        <RenderTask></RenderTask>
    </section>;
};