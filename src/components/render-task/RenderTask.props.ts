import {DetailedHTMLProps, HTMLAttributes} from "react";
import {TaskProps} from "../task-item/Task.props.ts";



export interface RenderTaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    arrTasks: TaskProps[];
}